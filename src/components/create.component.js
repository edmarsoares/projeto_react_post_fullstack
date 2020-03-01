import React, { useState, useEffect , componentWillUnmount} from 'react'
import axios from 'axios';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { unmountComponentAtNode } from 'react-dom';


function CreateUser(props) {

    const [user, setUser] = useState({ _id: '', username: '', password: '' });
    const [showLoading, setShowLoading] = useState(false);

    const apiUrl = "http://localhost:8080/users";
    
    useEffect(() => {
        debugger;
        if (props.match.params.id) {
            const {id} = props.match.params;

            const GetUser = async () => {
                const result = await axios(`${apiUrl}/${id}`);
                debugger;
                if (result) {
                    setUser({ ...result.data });
                    console.log(user);

                }

            };

            GetUser();
           
            return () => {
                debugger;
                setUser({ _id: '', username: '', password: '' }) 
            }
        }
    }, [ props.match.params.id]);

    function getApi() {
        if (props.match.params.id !== null && props.match.params.id !== '') {
            return `${apiUrl}/${props.match.params.id}`
        }

        return apiUrl;
    }

    const insertUser = (e) => {

        e.preventDefault();

        let method = "post"
        let id = "";
        
        if (props.match.params.id !== null && props.match.params.id !== undefined ) {
            method = "put";
            id = props.match.params.id;
        }

        const data = {
            username: user.username, password: user.password,
        };

        axios[method](`${apiUrl}/${id}`, data)
            .then((result) => {
                props.history.push('/usuario')
            }).catch(err => {
                console.log(err);

            });
    };

    const onChange = (e) => {
        e.persist();
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form onSubmit={insertUser}>
                                    <h1>Registrar</h1>
                                    <InputGroup className="mb-3">

                                        <Input type="text" name="username" id="username" placeholder="User Name" value={user.username} onChange={onChange} />
                                    </InputGroup>
                                    <InputGroup className="mb-3">

                                        <Input type="password" placeholder="Password" name="password" id="password" value={user.password} onChange={onChange} />
                                    </InputGroup>

                                    <CardFooter className="p-4">
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>
                                            </Col>
                                        </Row>
                                    </CardFooter>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default CreateUser  
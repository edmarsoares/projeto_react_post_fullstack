import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory  } from 'react-router-dom';

function UserList(props) {
    const apiUrl = "http://localhost:8080/users";

    const [user, setUser] = useState([]);
    let history = useHistory();

    const listAll = async () => {
        const result = await axios(apiUrl);
        setUser(result.data);
    };


    useEffect(() => {
        const GetUser = async () => {
            const result = await axios(apiUrl);
            setUser(result.data);
        };

        GetUser();
    }, []);

    const deleteUser = (id) => {
        axios.delete(apiUrl+'/' + id)
            .then((result) => {
                listAll();
            });
    };

    const editUser = (id) => {
        history.push('/edit/' + id);
    };

    return (
        <div className="animated fadeIn">
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Lista de usuários
              </CardHeader>
                        <CardBody>
                            <Table hover bordered striped responsive size="sm">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>name</th>
                                        {/* <th>Age</th>
                                        <th>City</th>
                                        <th>Country</th>
                                        <th>Gender</th>
                                        <th>Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        user.map((item, idx) => {
                                            return <tr>
                                                <td>{item._id}</td>
                                                <td>{item.username}</td>
                                               
                                                <td>
                                                    <div class="btn-group">
                                                        <button className="btn btn-warning" onClick={() => { editUser(item._id) }}>Edit</button>
                                                        <button className="btn btn-danger" onClick={() => { deleteUser(item._id) }}>Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        })}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default UserList  

import React, {Component, Fragment} from "react";
import styled, {css} from "styled-components"
import {withLoading} from "./withLoading";
const StyledButton = styled.button`
background-color: red;
font-size: 18px;
${props => props.active && css`
    background-color: green
`}
`;
class AppForm extends Component {
    state = {
        active: false
    }
    render() {
        // const {children} = this.props
        return (
            <Fragment>
                <h1>Formulario</h1>
                <form action="">
                    Login: <input type="text"/>
                    Senha: <input type="password"/>
                </form>
                {this.props.children}
                <StyledButton
                    onMouseOver={() => {
                        this.setState({
                            active: true
                        })
                    }}
                    onMouseLeave={() => {
                        this.setState({
                            active: false
                        })
                    }}
                    active={this.state.active}>
                    botao
                </StyledButton>
            </Fragment>
        )
    }
}
export default withLoading(AppForm)

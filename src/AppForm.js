import React, { Component, Fragment, useState } from "react";
import styled, { css } from "styled-components"
import { withLoading } from "./withLoading";

const StyledButton = styled.button`
background-color: red;
font-size: 18px;
${props => props.active && css`
    background-color: green
`}
`;
export default withLoading((props) => {

    const [active, setActive] = useState(false);
    const { children } = props

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form action="">
                Login: <input type="text" />
                Senha: <input type="password" />
            </form>
            {children}
            <StyledButton
                onMouseOver={() => {
                    setActive(true)
                }}
                onMouseLeave={() => {
                    setActive(false)
                }}
                active={active}>
                botao
                </StyledButton>
        </Fragment>
    )

}
)
// export default withLoading(AppForm)


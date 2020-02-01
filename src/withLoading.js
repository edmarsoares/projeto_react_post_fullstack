import React from "react";


export const withLoading = (Componente) => {
    const WithLoading = (props) => {
        console.log(props)
        if(props.carregando === true) {
            return "Carregando ..."
        }
        return <Componente {...props} />
    }

    return WithLoading
}

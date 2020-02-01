import React, {Component} from "react";
import logo from "./logo.svg";

export default class AppImage extends Component {
    componentDidMount() {
        console.log('componente montado')
    }
    shouldComponentUpdate(
        nextProps,
        nextState,
        nextContext) {
        console.log('nextProps =>',nextProps)
        console.log('props =>',this.props)
        console.log('mudou props ou state')
        return this.props.show !== nextProps.show
    }
    componentWillUnmount() {
        console.log('componente desmontado')
    }
    render() {
        const {show} = this.props
        if(!show) {
            return null
        }
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}

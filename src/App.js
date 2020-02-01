import React from 'react';
import './App.css';
import AppImage from "./AppImage";
import AppForm from "./AppForm"

export default class App extends React.Component{
  color = "red"
  tamanhodafonte = 18

  state = {
    exibirImagem: true
  }

  carregar = () => {
    this.setState({carregando: true})
    const self = this
    setTimeout(() => {
      self.setState({carregando: false})
    }, 2000)
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <AppForm carregando={this.state.carregando}>
              <h2>eu sou o children</h2>
              <AppImage show={this.state.exibirImagem} />

            </AppForm>
            <button
                style={{
                  fontSize: 25
                }}
                onClick={this.carregar}>
              carregar
            </button>
            <button onClick={() => {
              this.setState({
                exibirImagem: !this.state.exibirImagem
              })
            }}>
              <div style={{
                fontSize: 25
              }}>
                {this.state.exibirImagem ? "esconder" : "exibir"}
              </div>
            </button>

          </header>
        </div>
    );
  }
}

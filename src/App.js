import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import './App.css';
import AppImage from "./AppImage";
import AppForm from "./AppForm" 
import CreateUser from './components/create.component';
import UserList, { ListUser } from './components/List';

// export default class App extends React.Component{
//   color = "red"
//   tamanhodafonte = 18

//   state = {
//     exibirImagem: true
//   }

//   carregar = () => {
//     this.setState({carregando: true})
//     const self = this
//     setTimeout(() => {
//       self.setState({carregando: false})
//     }, 2000)
//   }
//   render() {
//     return (
//         <div className="App">
//           <header className="App-header">
//             <AppForm carregando={this.state.carregando}>
//               <h2>eu sou o children</h2>
//               <AppImage show={this.state.exibirImagem} />

//             </AppForm>
//             <button
//                 style={{
//                   fontSize: 25
//                 }}
//                 onClick={this.carregar}>
//               carregar
//             </button>
//             <button onClick={() => {
//               this.setState({
//                 exibirImagem: !this.state.exibirImagem
//               })
//             }}>
//               <div style={{
//                 fontSize: 25
//               }}>
//                 {this.state.exibirImagem ? "esconder" : "exibir"}
//               </div>
//             </button>

//           </header>
//         </div>
//     );
//   }
// }

function App() {  
  return (  
    <div className="App">  
     <Router>    
      <div className="container">    
        <nav className="btn btn-light navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
           
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/usuario/adicionar'} className="nav-link">Adicionar Usuário</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/usuario'} className="nav-link">Listar</Link>    
              </li>    
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>    
          <Route exact path='/usuario/adicionar' component={CreateUser} />    
          <Route path='/usuario' component={UserList} />  
          <Route exact path='/edit/:id' component={CreateUser}/>  
        </Switch>    
      </div>    
    </Router>    
    </div>  
  );  
}  
export default App;  

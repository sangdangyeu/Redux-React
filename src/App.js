import logo from './logo.svg';
import React from 'react';
import './App.css';
import { increaseCounter, decreaseCounter } from './redux/action/actions';
import Home from './components/Home';
import MyComponent from './component/MyComponent';
import MyText from './component/MyText';
import ListTudo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Todos/Nav/Nav';
import Homes from './Homes/Homes';
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';
import { BrowserRouter, Switch, Route } from "react-router-dom";
const App = (props) => {
   return (
      <BrowserRouter >
         <div className="App">
            <header className="App-header">
               <Nav />
               <img src={logo} className="App-logo" alt="logo" />
               <Switch>
                  <Route path="/" exact>
                     <Homes />
                  </Route>
                  <Route path="/Todos">
                     <ListTudo />
                  </Route>
                  <Route path="/Contact">
                     <MyText />
                  </Route>
                  <Route path="/User" exact>
                     <ListUser />
                  </Route>
                  <Route path="/User/:id">
                     <DetailUser />
                  </Route>
               </Switch>
            </header>
            <ToastContainer
               position="top-right"
               autoClose={2000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="light"
            />
         </div>
      </BrowserRouter>
   )
}



export default App;


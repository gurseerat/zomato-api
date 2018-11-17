import React from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import './index.css';
import createHistory from 'history/createBrowserHistory';
import  Dashboard from './dashboard';

const history = createHistory({forceRefresh:true});   

class App extends React.Component {
  
   render(){
       return (
           <Router history={history}>   
           <div>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                </div>
           </Router>
       )
   }
}

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {signup:false,login:true};

    this.getInitialState = this.getInitialState.bind(this);
    this.switch = this.switch.bind(this);
  }
  getInitialState(){
    this.setState({signup:false,login:true});
  }
  switch(word){
    var signup,login;
    if(word === "signup"){signup = true;login = false;}
    else{login = true; signup = false;}
    return this.setState({login:login, signup:signup})
    
  }
 

  render() {
     return (
      
      <div className="topBar">
      <div id="buttons">
        <p id="signupButton" onClick={this.switch.bind(null,"signup")} className={this.state.signup ? "blue" : "yellow"}>Sign Up</p>
      <p id="loginButton" onClick={this.switch.bind(null,"login")} className={this.state.login ? "blue" : "yellow"}> Login</p>
      </div>

   { this.state.signup?<Signup/> : null}
   {this.state.login? <Login /> : null}

</div>
     );
  }
}

class Signup extends React.Component{
  render(){
        
        
    return (
    <div className="signup-main">
           
          <div id="signup">
                <input type="text" id="first" placeholder="Username"/>
                <input type="email" id="email" placeholder="Email"/>
            <input type="password" id="password" placeholder="Password"/>
            <input type="password" id="confirm" placeholder="Confirm Password"/>
            <button id="register">Register</button>
    </div>
        </div>
    
    )
}
}

var users={
  name:'admin',
  password:'admin'
  }

class Login extends React.Component{
  
  
  constructor() {
    super();

    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
}


 handleUserChange(e){
   this.setState({username: e.target.value});
}
handlePasswordChange(e) {
   this.setState({password: e.target.value});
}

  render(){
    
    
    return (
          <div className="login-main">
                      
         <div id="login">
            <input type="text" id="username" name="username" placeholder="Username" onChange={this.handleUserChange}/>
            <input type="password" id="password" name="password" placeholder="Password" onChange={this.handlePasswordChange}/>
            <button id="login-btn" onClick={this.handleSubmit}>Login</button>
    </div>
        
          </div>
      
    )
    }
    handleSubmit() {
      
      if(this.state.username === users.name && this.state.password === users.password){
        history.push('/dashboard')
      }
      else
      alert("Wrong username/password")
    }
}



export default App;
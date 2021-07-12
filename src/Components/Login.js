import React from 'react';
import axios from 'axios';
import Modal from './Modal';
import { Redirect } from 'react-router-dom';

class Login extends React.Component{
    state = { key : ' ' , redirect: false  }

    
    loginSubmit = async(stateData) => {

      let res = await axios.post('http://localhost/API/login.php', { 
          email : stateData.email , 
          password : stateData.password 
      })
      .then(function(response){ return response.data; })
      .then(users => { 
        this.setState({key:users.API_key});
        this.setState({redirect : true});
      })
      .catch(function (error) {
        console.log(error);
      });
      
      localStorage.setItem('userKey',this.state.key);
      
    } 
    render(){
      if(this.state.redirect){
        return( <Redirect to={'/profile/'+this.state.key} /> )
      }
        return (
            <div>
                <Modal loginSubmit = {this.loginSubmit} /> 
            </div>
        )
      }
}

export default Login;

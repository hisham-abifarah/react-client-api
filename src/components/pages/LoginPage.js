import React from "react";
import LoginForm from "../forms/LoginForm";

 // page will render LoginForm
 // loginform take some function, guard date from form and pass data into this function
 // form doesnt know what will happen with data, it will pass it along only


 // const LoginPage = () => (
//     <div className ="ui container">
//         <h1>Login Page </h1>

//         <LoginForm submit = {this.submit}/>
//     </div>
// );

class LoginPage extends React.Component{

    submit = (data) =>{
        console.log(data);
    };

    render(){
        return(
            <div className="ui container">
                <h1>Login Page </h1>

                <LoginForm submit={this.submit} />
            </div>
        );
    }
}

export default LoginPage;
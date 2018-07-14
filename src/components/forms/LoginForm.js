import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Validator  from 'validator';
import InlineError from '../messages/InlineError';

 //  no need to use reduxstore to store forms state only if needed 
 //  no need to store data user enters, only interested in submitting data

class LoginForm extends Component {
    // data object store all form data
    state = {
        data: {
            email: '',
            password: ''
        },
        loading : false,
        errors: {}
    };

    // onchange: universal event Handler, no need to create onchangeemail, onchangepassword.. 
    // we use for all elements that are type text
    // if numbers or dropdownlist we create seperate changehandlers

    // onchange for event:  'e'  , setstate() to change data but before we need to save what we have in data so we use '...this.state.data'
    // e.target.name : what we want to change 
    // e.target.value : value to change
    onChange =(event)  =>{
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value }
    });
}

    onSubmit = () => {
        // 1.validate data
        // 2.pass data to submit function
        // handle error cases : ie:from server async
        const errors = this.validate(this.state.data);
        this.setState = ({ errors }); // update state with errors

         // use seperate function or isempty from lowdash instead
        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data);
        }
    }

    validate = (data) =>{
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if(!data.password) errors.password = "Password can't be blank";
        return errors;
    }

    render() {
        const { data , errors } = this.state;
        // console.log(data); prints : {email: "", password: ""}

        return (
            <Form onSubmit = { this.onSubmit }>
                {/* <Form.Field> : semantic ui element */}
                {/* onchange and value are to control email by React */}
                {/* instead of value = {this.state.data.email} we deconstruct data and use it for value of elements : first line after render()  */}
                {/* error={!!errors.email} : error is semanticui , !!.. converts to boolean, if true change style whole component/ field */}
                <Form.Field error={!!errors.email}> 
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder = "example@example.com"
                        value = {data.email}
                        onChange={this.onChange}
                    />
                    {errors.email && <InlineError text= {errors.email}/>}
                </Form.Field>

                <Form.Field error={!!errors.password}> 
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Make it Secure..."
                        value={data.password}
                        onChange={this.onChange}
                    />
                    {/* if errors password has something in it, use inlinerror with text errors.password */}
                    {errors.password && <InlineError text= {errors.password}/>}
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
  };

export default LoginForm;
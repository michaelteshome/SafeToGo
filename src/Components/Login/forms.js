import React from 'react';
import './form.css';
import logo from '../../images/logo.png';

export default class FormOption extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            confirmPassowrd: '',
        }
        this.displayForm = {
            display: "none",
        };
    }

    establishForm(){
        this.displayForm = {
            display: "block"
        }
        if(this.props.value == 'login'){
            return this.createLogin();
        }
        else if(this.props.value == 'sign up'){
            return this.createSignUp();
        }
        else {
            return null;
        }
    }

    createLogin(){
        return(
            <div className="login-form">
                
                <form action="">
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email"></input>
                    </div>
                    <div className="form-group">
                        <label for="Password">Password</label>
                        <input type="Password" class="form-control" id="email"></input>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>

            </div>
        );
    }

    createSignUp(){
        return (
            /*<div className="signup-form">
                <h3>{this.props.value}</h3>
                <p>Thanks for Signing Up </p>
            </div>*/

            <div className="signup-form">
                
                <form action="">
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email"></input>
                    </div>
                    <div className="form-group">
                        <label for="Password">Password</label>
                        <input type="Password" class="form-control" id="Password"></input>
                    </div>
                    <div className="form-group">
                        <label for="Password">Confirm Password</label>
                        <input type="Password" class="form-control" id="Password"></input>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }

    render() {
        return(
            <div className="container" style={this.displayForm}>
                <img src={logo} alt="main-logo"></img>
                {this.establishForm()}
            </div>
        )
    }
}
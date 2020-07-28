import React from 'react';
import './login.css';
import logo from '../../images/logo.png';
import FormOption from './forms';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            form:'',
        };

        this.styles = {
            display: "block"
        };

        this.bodyBackground = {
            background: "linear-gradient(#d7bc90, #1e2887, #8568a6);"
        };
    }

    createForms(formValue) {
        this.setState({
            form: formValue,
        });

        this.styles = {
            display: "none",
        }

        this.bodyBackground = {
            background: "linear-gradient(#7583d1, #3258e2, #21d8bf)", 
            opacity: "1.0"
        }
    }
    


    render() {
        return (
            <div>
                <div className="landing-page" style={this.bodyBackground}>
                   
                    <div className="main-logo" style={this.styles}>
                        <img src={logo} alt="main-logo"></img>

                        <div className="grouped-buttons">
                            <button className="loginButton buttons" onClick={() => {this.createForms('login')} }>Login</button>
                            <button className="SignUpButton buttons" onClick={() => {this.createForms('sign up')} }>Sign Up</button>        
                        </div>
                
                    </div>

                    <FormOption value={this.state.form}/>

                </div>
                
            </div>
        );
    }
    
}



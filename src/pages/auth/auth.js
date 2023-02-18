import React, { Component } from "react";
import './auth.css';

class AuthPage extends Component {
    state = {
        isLogin: false
    }

    constructor(prop) {
        super(prop);
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
    }

    handleLoginSignup = () => {
        this.setState(prevState => {
            return {
                isLogin: !prevState.isLogin
            }
        });
    }

    formSubmitHandler = (event) => {
        event.preventDefault()
        const email = this.emailEl.current.value;
        const passowrd = this.passwordEl.current.value;
        if (email?.trim().length === 0 || passowrd?.trim().length === 0) {
            return;
        }

        let payload = {
            query: `mutation {createUser(userDetail: {email: "${email}", password: "${passowrd}"}){_id email}}`
        }

        if (this.state.isLogin) {
            payload = {
                query: `
                query {
                    login(email: "${email}", password: "${passowrd}"){
                        userId
                        token
                        tokenExpiration
                    }
                }
                `
            }
        }

        fetch('http://localhost:5000/graphql', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    render() {
        return <form className="login-form" onSubmit={this.formSubmitHandler}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={this.emailEl} />
            </div>
            <div className="form-control">
                <label htmlFor="passowrd">Password</label>
                <input type="password" id="password" ref={this.passwordEl} />
            </div>
            <div className="form-action">
                <button type="submit">Login</button>
                <button type="button" onClick={this.handleLoginSignup}>Switch to {this.state.isLogin ? 'Signup' : 'Login'}</button>
            </div>
        </form>
    }
}

export default AuthPage;
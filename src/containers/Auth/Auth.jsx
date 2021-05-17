import React, { Component } from "react";
import styles from "./Auth.module.css"
import Button from "../../Components/UI/Button/Button"
import Input from "../../Components/UI/Input/Input"
export default class Auth extends Component {
    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = () => {

    }
    registerHandler = () => {

    }
    submitHandler = event => {
        event.preventDefault();
    }
    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}: `, event.target.value)
    }
    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={(event) => { this.onChangeHandler(event, controlName) }}
                />
            )
        })
    }

    render() {
        return (
            <div className={styles.Auth}>
                <div className="">
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={styles.AuthForm}>
                        {this.renderInputs()}
                        {/* <Input label="Email" />
                        <Input label="Password" errorMessage={'TEST'} /> */}
                        <Button type="success" onClick={this.loginHandler}>Log In</Button>
                        <Button type="primary" onClick={this.registerHandler}>Register</Button>
                    </form>
                </div>
            </div>
        );
    }
}

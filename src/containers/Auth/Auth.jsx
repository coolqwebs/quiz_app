import React, { Component } from "react";
import styles from "./Auth.module.css"
import Button from "../../Components/UI/Button/Button"
import Input from "../../Components/UI/Input/Input"
import is from "is_js"

export default class Auth extends Component {
    state = {
        isFormVAlid: false,
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
    validateControl(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== ' ' && isValid
        }

        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }
    onChangeHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })
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
                        <Button
                            type="success"
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormVAlid}
                        >
                            Log In
                        </Button>
                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormVAlid}
                        >
                            Register
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

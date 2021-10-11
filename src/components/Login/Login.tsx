import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/TextArea";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from "../common/FormsControls/TextArea.module.css"


const LoginForm = ({handleSubmit, error}: any) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/>
                remember me
            </div>
            {/*{captchaUrl && <img src{captchaUrl}/>}
            {captchaUrl && <Field placeholder={'Symbols from image'} name={'captcha'} type={''} component={Input}
                validate={[required]}/>}*/}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)



type LoginPropsType={
    isAuth:boolean
    login:any
}



const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }


    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}  />
    </div>
}


const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})


export default connect(mapStateToProps, {login})(Login);
import { Component } from "react";
import './index.css'


class Login extends Component{
    state = {}

    render(){
        return(
            <div className="login-container">
                <div className="login-left-container-desktop">
                    <h1 className="app-title">Board.</h1>
                </div>
                <div className="login-left-container-mobile">
                    <h1 className="app-title">Board.</h1>
                </div>
               
                <div className="login-right-container">

                    <div className="login-right-sub-container">
                        <h1 className="signin-title">Sign In</h1>
                        <p className="signin-with-google-apple">Sign in to your account</p>
                        <div className="account-container">
                            <div className="google-acc-container">
                                <img className="google-image" src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692591910/OpeninApp%20Assignment/google-icon_1_jl6zcx.png" alt="Google" />
                                <button className="google-title">Sign in with Google</button>
                            </div>
                            <div className="apple-acc-container">
                                <img className="apple-image" src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692591910/OpeninApp%20Assignment/apple_1_eb8f2c.png" alt="Apple" />
                                <button className="apple-title">Sign in with Apple</button>
                            </div>
                        </div>
                        <form className="form-container">
                            <div className="input-container">
                            <label htmlFor="email" className="custom-label">Email address</label>
                            <input id="email" type="text" className="custom-input" placeholder="example@example.com" />
                            </div>
                            <div className="input-container">
                            <label htmlFor="password" className="custom-label">Password</label>
                            <input id="password" type="password" className="custom-input" placeholder="Password" />
                            </div>
                            <p className="forget-password">Forgot password?</p>
                            <button className="signin-button" type="submit">Sign In</button>
                        </form>
                        <div className="new-registration-container">
                            <p className="new-reg-des">Don’t have an account?</p>
                            <button className="registration-button" type="button">Register here</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Login
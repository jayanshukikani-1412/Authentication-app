import React, { useState } from 'react'
import axios from 'axios'
import '../LogIn/LogIn.css'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'




const LogIn = () => {
    const navigate = useNavigate();
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPwd, setLoginPwd] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const LOGIN_API = "https://dummyjson.com/auth/login"
    const header = {
        'Content-Type': 'application/json'
    }



    const loginSubmitHandler = (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        let loginData = {
            username: loginUsername,
            password: loginPwd
        }

        console.log(loginData)

        axios.post(LOGIN_API, loginData, { headers: header })
            .then((response) => {
                // console.log("success")
                // console.log(response)



                setIsSubmitting(false)
                setLoginUsername("");
                setLoginPwd("");

                navigate("/home");
            })
            .catch((e) => {
                // console.log("error")
                alert("Enter Valid Credentials")
            });

        setLoginUsername("");
        setLoginPwd("");
        // navigate("/home");
    }

    return (
        <div>
            <section className='login_section'>
                <div className='login_conatiner'>
                    <form action="" onSubmit={loginSubmitHandler}>
                        <h2>Log In Here</h2>
                        <div className='login_wrapper'>
                            <div className='user_name_wrapper'>
                                <label htmlFor="login_user_name"><FaUserAlt /></label>
                                <input type="text" name="login_user_name" id="login_user_name" placeholder='Username' value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} required autoComplete='off' autoFocus />
                            </div>
                            <div className='user_pwd_wrapper'>
                                <label htmlFor="login_user_pwd"><BsFillShieldLockFill /></label>
                                <input type="password" name="login_user_pwd" id="login_user_pwd" placeholder='Password' value={loginPwd} onChange={(e) => setLoginPwd(e.target.value)} required autoComplete='off' />
                            </div>
                        </div>

                        <button type='submit' disabled={isSubmitting} className='login_submit_btn'>Log In</button>
                    </form>

                    {/* <hr /> */}

                    {/* 
                    <p className='line'>For Register Your Account </p>
                    <Link to={"/registration"}>
                        <button className='register_btn'>Register</button>
                    </Link> */}
                </div>
            </section>
        </div>
    )
}

export default LogIn



////////////////
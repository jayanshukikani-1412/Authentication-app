
import React, { useState, useEffect } from 'react'
import '../Registration/Registration.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaUserAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BsFillShieldLockFill } from 'react-icons/bs'


const Registration = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const REG_API = "http://restapi.adequateshop.com/api/authaccount/registration";
    const headers = {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        origin: 'http://localhost:3000',
        // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        // 'Access-Control-Allow-Headers': 'Content-Type'
    };

    useEffect(() => {
        if (localStorage.getItem('token') !== "" && localStorage.getItem('token') !== null) {
            navigate('/')
        }
    })

    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const regSubmitHandler = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        let regData = {
            name: name,
            email: email,
            password: pwd,
        }

        console.log(regData);

        axios.post(REG_API, regData, headers)
            .then((response) => {
                setIsSubmitting(false)
                console.log(response)
                localStorage.setItem('token', response.data.Token)
                navigate("/");
            })
            .catch((e) => {
                setIsSubmitting(false)
                console.error("+++ ERROR +++")
                // if (e.response.data.errors !== undefined) {
                //     // setValidationErrors(e.response.data.errors);
                // }
            });

        setName("");
        setEmail("");
        setPwd("");

        // navigate("/login");

    }


    return (
        <section className='reg_section'>
            <div className='reg_conatiner'>
                <form action="" onSubmit={regSubmitHandler}>
                    <h2>Register Here</h2>
                    <div className='reg_wrapper'>
                        <div className='user_name_wrapper'>
                            <label htmlFor="reg_user_name"><FaUserAlt /></label>
                            <input type="text" name="reg_user_name" id="reg_user_name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required autoComplete='off' />
                        </div>
                        <div className='user_email_wrapper'>
                            <label htmlFor="reg_user_email"><MdEmail /></label>
                            <input type="email" name="reg_user_email" id="reg_user_email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete='off' />
                        </div>
                        <div className='user_pwd_wrapper'>
                            <label htmlFor="reg_user_pwd"><BsFillShieldLockFill /></label>
                            <input type="password" name="reg_user_pwd" id="reg_user_pwd" placeholder='Password' value={pwd} onChange={(e) => setPwd(e.target.value)} required autoComplete='off' />
                        </div>
                    </div>

                    <button type='submit' onClick={showToastMessage} disabled={isSubmitting} className='reg_submit_btn'>Register</button>
                    <ToastContainer />

                    <hr />
                </form>


                <p className='line'>Already have an account ? </p>
                <Link to={"/login"}>
                    <button className='login_btn'>Log In</button>
                </Link>
            </div>
        </section>
    )
}

export default Registration

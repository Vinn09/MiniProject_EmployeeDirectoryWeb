import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/bg_img.jpg";
import { useState } from "react";
import axios from 'axios';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleChangeConfirmPass = (e) => {
        setConfirmPass(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleRegister = async() => {
        if(password !== confirmPass){
            setError('Password do not match');
            return;
        }

        const payload = {
            email: email,
            password: password,
        }

        const config = {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        }

        try {
            const response = await axios.post('https://reqres.in/api/register', payload, config)
            console.log(response);
            setSuccess('Registration Successful');

            setTimeout(() => {
                navigate('/login');
            }, 2000)
        } catch (error) {
            console.log(error);
            setError(error.response.data.error);
        }
    }

    const isFormValid = email.trim() !== '' && password.trim() !== '' && confirmPass.trim() !== '';

    return(
        <>
                <div className="bg-gray-900 min-h-screen flex justify-center items-center">
                    <div className="grid lg:grid-cols-2 gap-6 bg-gray-800 w-[90%] min-h-[80vh] shadow-lg overflow-hidden rounded-xl">
                        <div className="hidden lg:flex m-4 rounded-xl relative overflow-hidden">
                            <img className="h-auto w-full object-cover rounded-xl" src={loginImg} alt="" />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-10">
                                <h2 className="text-white text-2xl font-semibold mb-1.5">Welcome Back!</h2>
                                <p className="text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quibusdam?</p>
                            </div>
                        </div>
                        <div className="p-8 px-16 text-sm text-white">
                            <h1 className="text-2xl font-medium">SIGN UP</h1>
                            <p className="mt-2 text-gray-300">Create your account</p>
                            {error && <p className="text-red-500 mt-2">{error}</p>}
                            {success && <p className="text-green-500 mx-2 text-center">{success}</p>}
                            <div className="flex flex-col pt-6">
                            <label className="text-left mb-2">Email</label>
                            <input onChange={handleChangeEmail} className="border-b h-10 w-full mb-4" type="text" placeholder="Enter your email"/>
                            <label className="text-left mb-2">Password</label>
                            <input onChange={handleChangePassword} className="border-b h-10 w-full mb-4" type="password" placeholder="Enter your password"/>
                            <label className="text-left mb-2">Confirm Password</label>
                            <input onChange={handleChangeConfirmPass} class="border-b h-10 w-full mb-4" type="password" placeholder="Confirm your password" />
                            <div className="pt-4">
                                <button disabled={!isFormValid} onClick={handleRegister} 
                                className={`bg-yellow-500 rounded-lg h-10 w-full mt-4
                                ${isFormValid? 'hover:bg-yellow-600 cursor-pointer' : 'cursor-not-allowed' }`}>SIGN UP
                                </button>
                            </div>
                            </div>
                            <div className="mt-10">
                                <p className="text-xs text-center text-gray-500">Have already an account?<Link to={'/login'}><span className="pl-1 hover:underline text-yellow-500">Sign In</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
        {/* <section class="bg-gray-900 min-h-screen flex justify-center items-center">
            <div class="grid lg:grid-cols-2 gap-6 bg-gray-800 w-[90%] min-h-[80vh] shadow-lg overflow-hidden rounded-xl">
                <div className="hidden lg:flex m-4 rounded-xl relative overflow-hidden">
                    <img className="h-auto w-full object-cover rounded-xl" src={loginImg} alt="" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-10">
                        <h2 className="text-white text-2xl font-semibold mb-1.5">Welcome Back!</h2>
                        <p className="text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quibusdam?</p>
                    </div>
                </div>
                <div className="p-4">
                    <h1 class="text-2xl text-center mt-2">Sign Up</h1>
                    {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
                    {success && <p className="text-green-500 mt-2 text-center">{success}</p>}
                    <div class="flex flex-col items-center pt-8" action=""> 
                        <input onChange={handleChangeEmail} class="border rounded-lg h-10 w-80 p-4 mb-4" type="text" placeholder="Email" />
                        <input onChange={handleChangePassword} class="border rounded-lg h-10 w-80 p-4 mb-4" type="password" placeholder="Password" />
                        <input onChange={handleChangeConfirmPass} class="border rounded-lg h-10 w-80 p-4 mb-4" type="password" placeholder="Confirm Password" />
                        <div class="pt-4">
                            <button onClick={handleRegister} disabled={!isFormValid}
                            class={`bg-yellow-500 rounded-lg h-10 w-80
                            ${isFormValid? 'hover:bg-yellow-600 cursor-pointer' : 'cursor-not-allowed'}`}>SIGN UP
                            </button>
                        </div>
                    </div>
                    <div className="mt-10 mb-4">
                        <p className="text-xs text-center text-gray-500">Have already an account?<Link to={'/login'}><span className="pl-1 hover:underline text-yellow-500">Sign In</span></Link></p>
                    </div>
                </div>
            </div>
        </section> */}
        </>
    )
}

export default Register;
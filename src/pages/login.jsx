import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/bg_img.jpg";
import { useState } from "react";
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const navigate = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = async () => {
        const config = {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        }

        const payload = {
            email: email,
            password: password
        }
        
        try {
            const response = await axios.post('https://reqres.in/api/login', payload, config)
            console.log(response);
            setSuccess('Login Success');
            localStorage.setItem('token', response.data.token)

            setTimeout(() => {
                navigate('/')
            }, 2000)
        } catch (error) {
            console.log(error.response)
            setError(error.response.data.error || 'Login failed');
        }
    }

    const isFormValid = email.trim() !== "" && password.trim() !== "";

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
                    <h1 className="text-2xl font-medium">LOGIN</h1>
                    <p className="mt-2 text-gray-300">Please enter your details</p>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    {success && <p className="text-green-500 mt-2">{success}</p>}
                    <div className="flex flex-col pt-6">
                    <label className="text-left mb-2">Email</label>
                    <input onChange={handleChangeEmail} className="border-b h-10 w-full mb-4" type="text" placeholder="Enter your email"/>
                    <label className="text-left mb-2">Password</label>
                    <input onChange={handleChangePassword} className="border-b h-10 w-full mb-4" type="password" placeholder="Enter your password"/>
                        <div className="flex justify-between w-full">
                            <label className="flex text-xs text-gray-300">
                                <input className="border border-gray-300 mr-2" type="checkbox" />
                                Remember me
                            </label>
                            <p className="text-xs text-gray-300 cursor-pointer hover:underline">Forgot Password?</p>
                        </div>
                        <div className="pt-4">
                            <button disabled={!isFormValid} onClick={handleLogin} 
                            className={`bg-yellow-500 rounded-lg h-10 w-full mt-8
                            ${isFormValid? 'hover:bg-yellow-600 cursor-pointer' : 'cursor-not-allowed' }`}>LOGIN
                            </button>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="text-xs text-center text-gray-500">Create an account?<Link to={'/register'}><span className="pl-1 hover:underline text-yellow-500">Sign Up</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;
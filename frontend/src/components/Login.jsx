import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useAuth } from '../context/AuthProvider';



export default function Login() {
    const [authUser, setauthUser] = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) =>  {
        const userinfo = {
            email : data.email,
            password : data.password
        }
        console.log(userinfo)
        await axios.post("http://localhost:4001/user/login", userinfo)
        .then((res)=>{
            console.log(res.data)
            if (res.data) {
                alert("login successfull")
            }
            console.log(res.data.user)
            localStorage.setItem("Users", JSON.stringify(res.data.user));
            setauthUser(res.data.user);
        }).catch((err)=>{
            if(err.response){
                console.log(err)
                alert("Error: "+err.response.data.message)
            }
        })
    }
    return (
        <>
            <div>
                <dialog id="my_modal_32" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                             onClick={() => document.getElementById("my_modal_32").close()}>✕</Link>

                            <h3 className="font-semibold text-lg ">Login</h3>
                            <hr />
                            <div className="py-10 ">
                                <p >Email</p>
                                <div className="mb-5" >
                                    <label className="input validator  focus-within:border-gray-300 ">
                                        <svg
                                            className="h-[1em] opacity-50"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2.5"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </g>
                                        </svg>
                                        <input type="email" placeholder="Type your email" required
                                        {...register("email", { required: true })} />
                                        {errors.email && <span>This field is required</span>}
                                    </label>
                                    <div className="validator-hint hidden">Enter valid email address</div>
                                </div>
                                <p>Password</p>
                                <label className="input validator  focus-within:border-gray-300 ">

                                    <input type="text" placeholder="Type your password" required 
                                    {...register("password", { required: true })}/>
                                    {errors.password && <span>This field is required</span>}
                                </label>
                                <div className='flex justify-between'>
                                    <button 
                                    type='submit'
                                    className="btn btn-secondary mt-5 ml-3 hover:cursor-pointer ">Login</button>

                                    <p className="mt-8 ">Not registered!
                                        <Link to={"/signup"} className="text-blue-600 cursor-pointer ml-2">
                                            Sign up
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </dialog>

            </div>
        </>
    )
}

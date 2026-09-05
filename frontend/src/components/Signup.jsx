import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios";

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const userinfo = {
            fullname : data.fullname,
            email : data.email,
            password : data.password
        }
        console.log(userinfo)
        await axios.post("http://localhost:4001/user/signup", userinfo)
        .then((res)=>{
            console.log(res.data)
            if (res.data) {
                alert("signup successfull")
            }
            console.log(res.data.user)
            localStorage.setItem("Users", JSON.stringify(res.data.user));
        }).catch((err)=>{
            if(err.response){
                console.log(err)
                alert("Error: "+err.response.data.message)
            }
        })
    }
    return (
        <div>
            <div id="my_modal_3" className="flex justify-center items-center h-screen">
                <div className="border-1 px-8 py-4 w-120 relative md:mx-0 mx-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={()=> document.getElementById().close()} >✕</Link>

                        <h3 className="font-semibold text-lg ">Signup</h3>
                        <hr />
                        <div className="py-10  ">
                            <p>Name</p>
                            <div className="mb-5 " >
                                <label className="input validator  focus-within:border-gray-300 ">

                                    <input type="text" placeholder="Type your password" required
                                    {...register("fullname", { required: true })} />
                                    {errors.fullname && <span>This field is required</span>}
                                </label>

                            </div>
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
                                    {...register("email", { required: true })}/>
                                    {errors.email && <span>This field is required</span>}
                                </label>
                                <div className="validator-hint hidden">Enter valid email address</div>
                            </div>
                            <p>Password</p>
                            <label className="input validator  focus-within:border-gray-300 ">

                                <input type="text" placeholder="Type your password" required
                                {...register("password", { required: true })} />
                                {errors.password && <span>This field is required</span>}
                            </label>
                            <div className='flex justify-between '>
                                <button className="btn btn-secondary mt-5 ml-3 hover:cursor-pointer ">Signup</button>
                                <p className='mt-8 '>Hey! completed Signup <br /> Go to<a href="/" className='text-pink-300 hover:text-green-500 cursor-pointer'
                                > home</a> </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup

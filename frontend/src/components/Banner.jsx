import React from 'react'

function Banner() {
    return (
        <>
            <div className="max-w-screen-2xl container gap-5 mt-12 md:px-15  flex flex-col md:flex-row ">

                <div className="order-2 md:order-1 w-full md:w-1/2 mt-8 md:mt-22">
                    <div className="space-y-7 ml-5 md:ml-3">

                        <h1 className="text-4xl font-bold ">Hello, Welcome here to learn Something <span className="text-pink-500 ">New Everyday!!!</span> </h1>
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat in voluptate obcaecati expedita tenetur voluptates architecto reiciendis quidem molestiae quibusdam, facere iusto ea fugiat doloremque, repellendus provident non eos.</p>
                    </div>
                    <div className="">
                        <label className=" ml-4 mb-2 mt-8 w-90 md:w-139 h-13 input validator outline-none  focus-within:border-gray-300 ">
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
                            <input type="email" placeholder="Type your email" required />
                        </label>
                        <div className="validator-hint hidden outline-none border-none">Enter valid email address</div>
                    </div>
                    <div>
                        <button className="btn btn-secondary ml-4 md:mt-5 md:ml-3">Secondary</button>
                    </div>
                </div>



                <div className="order-1 w-full md:w-1/2">
                    <img className=" ml-4 w-107 h-70 md:w-160 md:h-110  mt-5 rounded-2xl" src="/banner.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner

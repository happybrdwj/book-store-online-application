import React from 'react'

export default function Cards({ item }) {
    return (
        <>
            <div>
                <div classname="">
                    <div className=" cursor-pointer card bg-base-100 w-full ml-1 shadow-sm hover:scale-105 duration-500 border border-transparent dark:hover:border-white/30 ">
                        <figure>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-95 object-cover mr-4 ml-2 "
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">
                                {item.name}
                                <div className="badge badge-secondary">{item.category}</div>
                            </h2>

                            <p>
                                {item.title}
                            </p>

                            <div className="card-actions justify-between">
                                <div className="badge badge-outline">${item.price}</div>
                                <div className="badge badge-outline hover:cursor-pointer hover:text-white hover:bg-pink-500">Buy now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
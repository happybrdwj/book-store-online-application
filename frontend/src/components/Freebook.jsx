import React from 'react'
import list from "../list.json";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImport from "react-slick";
import Cards from './Cards';
const Slider = SliderImport.default ?? SliderImport;


export default function Freebook() {
    const filterdata = list.filter((data) => data.category === "free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
              {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0
            }
        }
        ]
    };
    return (
        <>
            <div className="max-w-screen-2xl container mt-5  ml-4 md:ml-4 md:px-15 py-5 gap-5 ">
                <div className="font-semibold text-xl">Free Book Offered

                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quisquam enim? Sequi velit veniam libero. Ipsa, ut nesciunt aperiam ipsam iusto quis eius itaque nemo repellendus iure repudiandae ipsum officia eaque ex accusantium. Repellendus, labore.</h1>
            </div>
            <div className="max-w-screen-2xl container ml-3 md:ml-0 mx-auto md:px-15 py-4">
                <Slider {...settings}>
                    {filterdata.map((item)=> (
                        <Cards item = {item} key = {item.id}/>
                    ))}
                </Slider>
            </div>
        </>
    )
}

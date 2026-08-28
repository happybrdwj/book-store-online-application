import React from 'react'
import Navbar from './Navbartemp'
import Footer from './Footer'

function About() {
    return (
        <>
            <Navbar />
            <div className='min-h-screen mt-25 mx-4 md:ml-0'>

                <h1 className='flex justify-center items-center text-4xl'>

                    Welcome to Book Store 📚
                </h1>
                <p className='max-w-screen-2xl container  mt-5 md:px-15'>

                    Discover your next great read with **Book Store** — a simple platform to explore books, discover new titles, and find something you'll love reading.

                    Whether you're a student, a learner, or simply a book lover, we've got something for you.

                    <br /><br /> <span className='text-2xl max-w-screen-2xl  container  '>
                        What We Offer <br />
                    </span> <br />
                    📚 Wide Collection <br />
                    Explore books from different categories and interests. <br /><br />
                    🔍 **Easy Search** <br />
                    Quickly find the book you're looking for. <br /><br />

                    📖 **Free Books** <br />
                    Explore our collection of books available to read for free. <br /><br />

                    💻 **Easy & Responsive** <br />
                    Enjoy a smooth experience on desktop, tablet, and mobile. <br /> <br />

                    ### Explore <br /><br />

                    * <a href="/">Home</a> – Discover featured and popular books <br />
                    * <a href="/course">Course</a> – Explore learning resources <br />
                    * <a href="/contact">Conatct</a> – Get in touch with us <br /><br />

                   <span className='text-2xl max-w-screen-2xl  container  '>
                        Our Offer <br />
                    </span> <br />

                    Our goal is simple — **make discovering books easy, enjoyable, and accessible.**

                    We are continuously working to improve our collection and provide a better reading experience. <br /><br />

                    <span className='text-2xl max-w-screen-2xl  container  '>
                        Connect With Us <br />
                    </span> <br />

                    📧 **Email:** [support@bookstore.com](mailto:support@bookstore.com) <br />
                    📱 **Contact:** +91 XXXXX XXXXX <br /> <br />

                   

                   

                </p>
            </div>
            <Footer />
        </>
    )
}

export default About

import React from 'react'
import Banner1Img from '../../assets/banner1.png'
import { BiPlayCircle } from 'react-icons/bi'

const Banner1 = ({togglePlay}) => {
  return (
    <div>
        <div className="container py-8 sm:py-14 min-h-[620px] relative">
            <div className="flex flex-col gap-14">
                {/* Banner 1 section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
                    <div data-aos="fade-up" data-aos-once="false" className="sm:order-1">
                        <img className="w-full max-w-[400px]"src={Banner1Img} alt=""/>
                    </div>
    

                    <div className="sm:order-2 lg:pr-20 relative">
                        <div className="relative z-10 space-y-5"> 
                        <h1 data-aos="fade-up" data-aos-delay="300"data className="text-4xl font-semibold">
                            GET READY TO ENJ0Y VR{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">MOVIES WITH OUR PLATFORM</span>
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="500">
                        Use immersive features to get a detailed multidimensional view of the world and confidently navigate with AR walking directions
                        </p>
                        <div className="flex gap-6">
                            <button
                               data-aos="fade-up"
                               data-aos-delay="700"
                               className="primary-btn"
                            >
                                Get Started
                            </button>
                            <button
                                data-aos="fade-up"
                                data-aos-delay="900"
                                className="flex items-center gap-2"
                                onClick={togglePlay}
                            >
                                {" "}
                                <BiPlayCircle className="text-3xl" />
                                See Demo
                            </button>
                        </div>
                        </div>
                        <div className="w-[250px] h-[250px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[0px] left-[320px] blur-3xl opacity-40">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner1
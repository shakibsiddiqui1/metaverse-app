import React from 'react'
import HeroPng from '../../assets/hero.png'
import { BiPlayCircle } from 'react-icons/bi'

const Hero = ({togglePlay}) => {
    return (
        <>
          <div className="py-8 sm:py-14 md:px-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
            <div className="container  flex relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  place-items-center relative z-10">
                {/* hero text section */}
                <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
                  <h1 data-aos="fade-up" data-aos-delay="300" data className="text-4xl font-semibold">
                    GET READY TO ENJ0Y VR{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      GAMES WITH OUR PLATFORM
                    </span>
                  </h1>
                  <p data-aos="fade-up" data-aos-delay="500">
                    Augmented, virtual and immersive reality expand how we experience the world and access knowledge. They allow you to take in information and content visually, int the same way you take in the world.
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
                {/* image section */}
                <div
                  data-aos="fade-up"
                  data-aos-offset="0"
                  className="order-1 sm:order-2"
                >
                  <img src={HeroPng} alt="" className="" />
                </div>
              </div>
    
              {/* Animated Blob */}
              <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
            </div>
          </div>
        </>)
}

export default Hero
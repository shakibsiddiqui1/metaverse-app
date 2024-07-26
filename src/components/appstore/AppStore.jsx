import React from 'react'
import AppStoreImg from '../../assets/website/app_store.png'
import PlayStoreImg from '../../assets/website/play_store.png'

const AppStore = () => {
  return (
    <div className="">
       <div className="container py-10 sm:py-10 md:py-12 lg:py-0">
           <div className="space-y-6 max-w-xl mx-auto text-center">
               <h1 data-aos="fade-up" className="text-3xl sm::text-4xl font-semibold">Get Started with our app</h1>
               <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt autem voluptatem quod dolore.</p>
               <div className="flex justify-center items-center gap-5">
                    <img data-aos="fade-up" data-aos-delay="500" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" src={AppStoreImg} alt=""/>
                    <img data-aos="fade-up" data-aos-delay="700" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" src={PlayStoreImg} alt=""/>
               </div>
           </div>
       </div>
    </div>
  )
}

export default AppStore
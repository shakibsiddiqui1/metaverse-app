import { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Quotes from './components/quotes/Quotes'
import Banner1 from './components/banner/Banner1'
import Banner2 from './components/banner/Banner2'
import Features from './components/features/Features'
import AppStore from './components/appstore/AppStore'
import Footer from './components/footer/Footer'
import PopPlayer from './components/pop_player/PopPlayer'
import AOS from 'aos'
import "aos/dist/aos.css"




function App() {
  const [isPlay, setIsPlay] = useState(false)
  const togglePlay = ()=>{
    setIsPlay(!isPlay)
  }

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  },[])

  return (
    <main className="overflow-x-hidden bg-white text-black dark:bg-black dark:text-white">
      <Navbar/>
      <Hero togglePlay={togglePlay}/>
      <Quotes/>
      <Banner1 togglePlay={togglePlay}/>
      <Banner2 togglePlay={togglePlay}/>
      <Features/>
      <AppStore/>
      <Footer/>
      <PopPlayer isPlay={isPlay} togglePlay={togglePlay}/>
   
    </main>
  )
}

export default App

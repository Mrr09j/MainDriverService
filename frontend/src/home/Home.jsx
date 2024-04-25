import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
function Home() {
  return (
   <>
   <div>
   <Navbar />
    <Banner/>
    <Feature/>
    <Footer/>
   </div>
   </>
  )
}

export default Home

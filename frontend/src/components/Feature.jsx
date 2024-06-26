import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards'; // Adjust the path as necessary based on your file structure

import list from "../../public/list.json";
function Feature() {
    const filterData = list.filter((data)=>data.category ===  "free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
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
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
  <>
  <div className='x-w-screen-2xl container mx-auto md:px-36 px-4 '>
   <div>
   <h1 className='font-semibold text-xl pb-2'>Features</h1>
    <p>
        We have several key features that mentioned below:
    </p>
   </div>
 
  <div>

  <Slider {...settings}>
       {filterData.map((item)=>(
        <Cards item={item} key={item.id}/>
       ))}
      </Slider>
  </div>
  </div>
  </>
  )
}

export default Feature

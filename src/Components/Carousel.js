import React from 'react'
import useRestaurant from '../util/useRestaurant'
import {useState, useEffect} from 'react'
import { isMobile } from '../util/utilityFunctions'
import { swiggy_api_URL, swiggy_mobile_api_URL } from '../config'
import CarouselCards from './CarouselCards'
const Carousel = () => {

    const [restaurant, setRestaurant] = useState(null);
    async function getRestaurant(){
        const data = await fetch(isMobile()? swiggy_mobile_api_URL: swiggy_api_URL);
        const json = await data.json();
          
          // updated state variable restaurants with Swiggy API data
        let carousel;
        if(isMobile()){
            carousel = json?.data?.success?.cards[2]?.gridWidget?.imageGridCards?.info;
        }else{
              // topRestaurant = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            carousel = json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
        }
        console.log(carousel)
        setRestaurant(carousel);
        
    }

    useEffect(() => {
        getRestaurant();
    },[]);


    let box = document.querySelector('.carousel-container');

    const moveElementsLeft = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width);
    }
    const moveElementsRight = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    }

  return (
    <>
        { !restaurant || !restaurant?.length === 0 ? ( <div></div>) : (
            <div className='mt-28 lg:mt-40 relative max-w-fit lg:mx-auto mx-3'>
                <div className='flex justify-between'>
                    <div className='text-base font-semibold lg:text-xl lg:font-bold'>
                        Best Offer for you
                    </div>
                    <div>
                        <button onClick={moveElementsLeft} className='bg-slate-200 rounded-full px-2 lg:px-3 py-1 lg:py-2 mx-1 lg:mx-3'><i class="fa-solid fa-chevron-up fa-rotate-270"></i></button>
                        <button onClick={moveElementsRight} className='bg-slate-200 rounded-full px-2 lg:px-3 py-1 lg:py-2 mx-1 lg:mx-3'><i class="fa-solid fa-chevron-up fa-rotate-90"></i></button>
                    </div>
                </div>
                <div className='relative overflow-hidden max-w-[1200px] m-auto'>
                    <div className='carousel-container flex  overflow-x-hidden scroll-smooth gap-5'>
                        {restaurant.map((item) => <CarouselCards {...item} key={item.id}/>)}
                    </div>

                </div>
                
            </div>
        )}
    </>
    
  )
}

export default Carousel

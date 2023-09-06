import React from 'react'
import { IMG_CDN_URL } from '../config'

const CarouselCards = ({
    id, imageId
}) => {
    const CAROUSEL_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/"
  return (
    <div className=''>
      <img src={CAROUSEL_IMG + imageId} alt="" srcset="" width={425} height={252} className='w-64 lg:w-96 max-w-fit'/>
    </div>
  )
}

export default CarouselCards

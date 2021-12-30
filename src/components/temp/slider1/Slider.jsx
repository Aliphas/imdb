import classes from './Slider.module.css'
import React, {useState, useEffect} from "react"

const Slider = () => {

  const imgArr = [
    { id: 1, src: 'https://itchief.ru/examples/images/lighthouses/image-1-700x1000.jpg' },
    { id: 2, src: 'https://itchief.ru/examples/images/lighthouses/image-2-700x1000.jpg' },
    { id: 3, src: 'https://itchief.ru/examples/images/lighthouses/image-3-700x1000.jpg' },
    { id: 4, src: 'https://itchief.ru/examples/images/lighthouses/image-4-700x1000.jpg' },
    { id: 5, src: 'https://itchief.ru/examples/images/lighthouses/image-5-700x1000.jpg' },
    { id: 6, src: 'https://itchief.ru/examples/images/lighthouses/image-6-700x1000.jpg' },
  ]

  
     
 return(
   <div className={classes.images}>
     {imgArr.map(imgItem => (
       <div>
         <img className={classes.imgItem} src={imgItem.src} alt="" />
         <div className={classes.info}></div>
       </div>
       
     ))}
   </div>

 )
  
}

export default Slider
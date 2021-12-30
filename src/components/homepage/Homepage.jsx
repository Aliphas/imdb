import { useState } from 'react'
import FeaturedToday from './featuredToday/FeaturedToday'
import classes from './Homepage.module.css'
import SideSlider from './mainSlider/sideSlider/SideSlider'
import MainSlider from './mainSlider/slider/MainSlider.jsx'
const Homepage = (props) => {
  const {isDesktop} = props
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [activeFeaturedTodaySlideIndex, setActiveFeaturedTodaySlideIndex ] = useState(0)

  return (
    <div className={classes.homepage}>
      <div className={classes.mainSliderContainer}>
        <MainSlider activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex}/>
        {isDesktop?
        <SideSlider activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex}/>
        : null }
         
      </div>
      <FeaturedToday activeSlideIndex={activeFeaturedTodaySlideIndex} setActiveSlideIndex={setActiveFeaturedTodaySlideIndex}/> 
    </div>
      
  )
}
export default Homepage
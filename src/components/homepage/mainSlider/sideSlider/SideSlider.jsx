import imageSlider from '../imageSlider'
import { useEffect, useState } from "react";
import classes from './SideSlider.module.css'
import SideSliderContent from "./SideSliderContent";

const length = imageSlider.length - 1

function SideSlider(props) {
  const {activeSlideIndex, setActiveSlideIndex} = props
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex(activeSlideIndex === length ? 0 : activeSlideIndex +1 )
    }, 5000)
    return () => clearInterval(interval)
  }, [activeSlideIndex])

  return (
    <div className={classes.sideSliderContainer}>
      <div className={classes.upNext}><h2>Up next</h2></div>
      <section>
      {imageSlider.map((slide, index) => (
        <div key={index}
          className={
            (activeSlideIndex === length - 2 && (index === length -1 || index === length)) ||
            (activeSlideIndex === length - 1 && index === length) ||
            ((index === 0 || index === 1 || index === 2) && activeSlideIndex === length)
            ? `${classes.slides} ${classes.active}` : classes.inactive}
        >
          <SideSliderContent slide={slide} classes={classes}/>
        </div>))}
      </section>
      <section>
      {imageSlider.map((slide, index) => (
        <div key={index}
          className={
            ((index === activeSlideIndex + 1 || index === activeSlideIndex + 2 || index === activeSlideIndex + 3) && activeSlideIndex < length -2)
            || (activeSlideIndex === length - 2 && index === 0 )
            || (activeSlideIndex === length - 1 && (index === 0 || index === 1) )
            ? `${classes.slides} ${classes.active}` : classes.inactive}
        >
          <SideSliderContent slide={slide} classes={classes} />
        </div>))}
      </section>
      
      <div className={classes.browse}><a href=""><h2>Browse trailers &#10095;</h2></a></div>
    </div>
  )
}
export default SideSlider
import SliderContent from "./SliderContent";
import imageSlider from '../imageSlider'
import { useEffect } from "react";
import Arrows from "../../Arrows";
import classes from './Slider.module.css'

const length = imageSlider.length - 1

const  MainSlider = (props) => {
  const {activeSlideIndex, setActiveSlideIndex} = props
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex(activeSlideIndex === length ? 0 : activeSlideIndex +1 )
    }, 5000)
    return () => clearInterval(interval)
  }, [activeSlideIndex])

  return (
    <div className={classes.sliderContainer}>
      <SliderContent activeSlideIndex={activeSlideIndex} imageSlider={imageSlider} classes={classes} />
      <Arrows
        prevSlide={() => 
          setActiveSlideIndex(activeSlideIndex < 1 ? length : activeSlideIndex - 1)
        }
        nextSlide={() => 
          setActiveSlideIndex(activeSlideIndex === length ? 0 : activeSlideIndex + 1)
        }
        loop={true}
      />
    </div>
  )
}
export default MainSlider
import classes from './Slider.module.css'
import SliderItem from '../slider1/SliderItem'
import Arrows from '../Arrows'
import { useEffect, useState } from 'react'



const Slider = (props) => {
  
  const {slides, activeSlideIndex, setActiveSlideIndex, title} = props
  const length = slides.length/2 - 1
  const [left, setLeft] = useState(0)
  useEffect(() => {
    const width = document.getElementById(classes.sliderWrapper).clientWidth
    setLeft(`-${width*activeSlideIndex}px`)
  }, [activeSlideIndex])

  return (
    <div>
      <div className={classes.sliderTitle}><h2>{title}</h2></div>
      <div id={classes.sliderWrapper}>
        <Arrows
          prevSlide={
            () => setActiveSlideIndex(activeSlideIndex === 0 ? activeSlideIndex : activeSlideIndex - 1) 
          }
          nextSlide={() => 
            setActiveSlideIndex(activeSlideIndex < length ? activeSlideIndex + 1: activeSlideIndex)
          }
        />
        <div id={classes.sliderList} style={{'left': left}}>
          {slides.map((item) => (
            <SliderItem item={item} classes={classes}/>
          ))}  
        </div>
        
      </div>
    </div>
  )
}
export default Slider
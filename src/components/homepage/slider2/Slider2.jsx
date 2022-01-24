import classes from './Slider2.module.css'
import SliderItem2 from './SliderItem2'
import Arrows from '../Arrows'
import { useEffect, useState } from 'react'

const Slider2 = (props) => {
  
  const {slides, activeSlideIndex, setActiveSlideIndex, title} = props
  const windowSize = 6
  const length = slides.length/windowSize -1
  const [left, setLeft] = useState(0)
  useEffect(() => {
    const slideWidth = document.getElementById(classes.sliderItemWrapper).clientWidth
    const width = slideWidth*windowSize
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
          activeSlideIndex={activeSlideIndex}
          length={length}
        />
        <div id={classes.sliderList} style={{'left': left}}>
          {slides.map((item) => (
            <SliderItem2 item={item} classes={classes}/>
          ))}  
        </div>
        
      </div>
    </div>
  )
}
export default Slider2
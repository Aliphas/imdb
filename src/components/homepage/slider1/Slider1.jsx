import classes from './Slider1.module.css'
import SliderItem1 from './SliderItem1'
import Arrows from '../Arrows'
import { useEffect, useState } from 'react'



const Slider1 = (props) => {
  
  const {slides, activeSlideIndex, setActiveSlideIndex, title, windowSize} = props
  const [windowWidth, setWindowWidth] = useState(0)
  const length = slides.length - windowSize
  const [left, setLeft] = useState(0)

  useEffect(() => {
    const slideWidth = document.getElementById(classes.sliderItem).clientWidth
    const wrapperWidth = parseInt(slideWidth)*windowSize
    const listWidth = slides.length*slideWidth
    
    let newLeft = slideWidth*activeSlideIndex
    newLeft + wrapperWidth > listWidth ? newLeft = (length*slideWidth) : newLeft = newLeft
    setLeft(`-${newLeft}px`)
    setWindowWidth(`${wrapperWidth}px`)
  }, [activeSlideIndex])

  return (
    <div>
      <div className={classes.sliderTitle}><h2>{title}</h2></div>
      <div id={classes.sliderWrapper} style={{'width': windowWidth}}> 
        <Arrows
          prevSlide={
            () => setActiveSlideIndex(activeSlideIndex === 0 ? activeSlideIndex : activeSlideIndex - windowSize) 
          }
          nextSlide={() => 
            setActiveSlideIndex(activeSlideIndex < length ? activeSlideIndex + windowSize: activeSlideIndex)
          }
          activeSlideIndex={activeSlideIndex}
          length={length}
        />
        <div id={classes.sliderList} style={{'left': left}}>
          {slides.map((item) => (
            item.url ? <SliderItem1 item={item} classes={classes} windowSize={2}/> : null
          ))}  
        </div>
      </div>
    </div>
  )
}
export default Slider1
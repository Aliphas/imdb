import classes from './ContentSlider.module.css'
import ContentSliderItem from './ContentSliderItem'
import Arrows from '../Arrows'
import { useEffect } from 'react'

const ContentSlider = (props) => {
  const { slides, name, activeSlideIndex, setActiveSlideIndex, windowSize, windowWidth, setWindowWidth, left, setLeft } = props
  const length = slides.length - windowSize

  useEffect(() => {
    const slideWidth = document.getElementById(classes.sliderItemWrapper).clientWidth
    const wrapperWidth = parseInt(slideWidth) * windowSize
    setWindowWidth(`${wrapperWidth}px`)

    const listWidth = slides.length * slideWidth
    let newLeft = slideWidth * activeSlideIndex
    newLeft + wrapperWidth > listWidth ? newLeft = (length * slideWidth) : null
    setLeft(`-${newLeft}px`)
  }, [activeSlideIndex])

  return (
    <div>
      <div className={classes.sliderTitle}><h2>{name}</h2></div>
      <div id={classes.sliderWrapper} style={{ 'width': windowWidth }}>
        <Arrows
          prevSlide={ () => 
            setActiveSlideIndex(activeSlideIndex === 0 ? activeSlideIndex : activeSlideIndex - windowSize)
          }
          nextSlide={ () => 
            setActiveSlideIndex(activeSlideIndex < length ? activeSlideIndex + windowSize : activeSlideIndex)
          }
          activeSlideIndex={activeSlideIndex}
          length={length}
        />
        <div id={classes.sliderList} style={{ 'left': left }}>
          {slides.map((item, index) => (
            item.img ? 
            <ContentSliderItem item={item} classes={classes} key={index} /> 
            : null
          ))}
        </div>
      </div>
    </div>
  )

}

export default ContentSlider
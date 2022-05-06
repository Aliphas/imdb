import classes from './TitleSlider.module.css'
import TitleSliderItem from './TitleSliderItem'
import Arrows from '../Arrows'
import { useEffect } from 'react'

const TitleSlider = (props) => {
  const { slides, activeSlideIndex, setActiveSlideIndex, name, windowSize, left, setLeft, windowWidth, setWindowWidth } = props
  const length = slides.length / windowSize - 1
  
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
            setActiveSlideIndex(activeSlideIndex === 0 ? activeSlideIndex : activeSlideIndex - 1)
          }
          nextSlide={ () =>
            setActiveSlideIndex(activeSlideIndex < length ? activeSlideIndex + 1 : activeSlideIndex)
          }
          activeSlideIndex={activeSlideIndex}
          length={length}
        />
        <div id={classes.sliderList} style={{ 'left': left }}>
          {slides.map((item, index) => (
            item.posterImg ? <TitleSliderItem item={item} classes={classes} key={index}/> : null
          ))}
        </div>
      </div>
    </div>
  )
}

export default TitleSlider
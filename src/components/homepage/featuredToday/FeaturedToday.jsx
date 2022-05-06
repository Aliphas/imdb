import ContentSlider from '../../sliders/contentSlider/ContentSlider.jsx'
import { useRecoilState } from 'recoil'
import { featuredTodaySliderLeft, featuredTodaySlideIndex, featuredTodayWindowWidth } from '../../../store'
import { useState, useEffect } from 'react'

const FeaturedToday = () => {
  const name = 'Featured today'
  const [activeSlideIndex, setActiveSlideIndex] = useRecoilState(featuredTodaySlideIndex)
  const [left, setLeft] = useRecoilState(featuredTodaySliderLeft)
  const [windowWidth, setWindowWidth] = useRecoilState(featuredTodayWindowWidth)
  const windowSize = 2
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [featuredTodaySlides, setFeaturedTodaySlides] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8000/lists/ft`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setFeaturedTodaySlides(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [activeSlideIndex])

  return (
    <div>
      { featuredTodaySlides.length > 0 && !error && isLoaded  ?
        <ContentSlider 
          slides={featuredTodaySlides} 
          activeSlideIndex={activeSlideIndex} 
          setActiveSlideIndex={setActiveSlideIndex} 
          name={name} 
          left={left} 
          setLeft={setLeft} 
          windowWidth={windowWidth}
          setWindowWidth={setWindowWidth}
          windowSize={windowSize}
        />
      : null }   
    </div>
  )
}

export default FeaturedToday
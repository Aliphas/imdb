import TitleSlider from '../../sliders/titleSlider/TitleSlider'
import { useRecoilState } from 'recoil'
import { primeVideosSlideIndex, primeVideosSliderLeft, primeVideosWindowWidth } from '../../../store'
import { useState, useEffect } from 'react'

const PrimeVideos = (props) => {
  const name = 'Prime Videos'
  const [activeSlideIndex, setActiveSlideIndex] = useRecoilState(primeVideosSlideIndex)
  const [left, setLeft] = useRecoilState(primeVideosSliderLeft)
  const [windowWidth, setWindowWidth] = useRecoilState(primeVideosWindowWidth)
  const windowSize = 6
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [primeVideosSlides, setPrimeVideosSlides] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8000/prime`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setPrimeVideosSlides(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [activeSlideIndex])

  return (
    <div>
      {primeVideosSlides.length > 0 && !error && isLoaded ?
        <TitleSlider
          slides={primeVideosSlides}
          activeSlideIndex={activeSlideIndex}
          setActiveSlideIndex={setActiveSlideIndex}
          name={name}
          left={left}
          setLeft={setLeft}
          windowWidth={windowWidth}
          setWindowWidth={setWindowWidth}
          windowSize={windowSize}
        />
        : null}
    </div>
  )
}

export default PrimeVideos
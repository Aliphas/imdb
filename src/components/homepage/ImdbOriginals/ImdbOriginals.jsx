import ContentSlider from '../../sliders/contentSlider/ContentSlider'
import { useRecoilState } from 'recoil'
import { imdbOriginalsSlideIndex, imdbOriginalsSliderLeft, imdbOriginalsWindowWidth } from '../../../store'
import { useState, useEffect } from 'react'

const ImdbOriginals = () => {
  const name = 'Imdb Originals'
  const [activeSlideIndex, setActiveSlideIndex] = useRecoilState(imdbOriginalsSlideIndex)
  const [left, setLeft] = useRecoilState(imdbOriginalsSliderLeft)
  const [windowWidth, setWindowWidth] = useRecoilState(imdbOriginalsWindowWidth)
  const windowSize = 3
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [imdbOriginalsSlides, setImdbOriginalsSlides] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8000/lists/io`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setImdbOriginalsSlides(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [activeSlideIndex])
    
  return (
    <div>
      { imdbOriginalsSlides.length > 0 && !error && isLoaded ?
        <ContentSlider 
          slides={imdbOriginalsSlides} 
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

export default ImdbOriginals
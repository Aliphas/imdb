import TitleSlider from "../../sliders/titleSlider/TitleSlider"
import { useRecoilState } from "recoil"
import { funFavoritesSliderLeft, funFavoritesWindowWidth, funFavoritesSlideIndex } from "../../../store"
import { useState, useEffect} from 'react'

const FunFavorites = () => {
  const name = 'Fun favorites'
  const [activeSlideIndex, setActiveSlideIndex] = useRecoilState(funFavoritesSlideIndex)
  const [left, setLeft] = useRecoilState(funFavoritesSliderLeft)
  const [windowWidth, setWindowWidth] = useRecoilState(funFavoritesWindowWidth)
  const windowSize = 6
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [funFavoritesSlides, setFunFavoritesSlides] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8000/toprate`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setFunFavoritesSlides(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [activeSlideIndex])
  
  return (
    <div>
      { funFavoritesSlides.length > 0 && !error && isLoaded  ?
        <TitleSlider 
          slides={funFavoritesSlides} 
          activeSlideIndex={activeSlideIndex} 
          setActiveSlideIndex={setActiveSlideIndex} 
          name={name}
          left={left}
          setLeft={setLeft}
          windowWidth={windowWidth}
          setWindowWidth={setWindowWidth}
          windowSize={windowSize} 
        />
      : <div>asd</div> }
    </div>
  )
}

export default FunFavorites
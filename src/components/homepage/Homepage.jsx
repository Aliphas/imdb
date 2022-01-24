import { useState } from 'react'
import FeaturedToday from './featuredToday/FeaturedToday'
import FunFavorites from './funFavorites/FunFavorites'
import classes from './Homepage.module.css'
import ImdbOriginals from './ImdbOriginals/ImdbOriginals'
import SideSlider from './mainSlider/sideSlider/SideSlider'
import MainSlider from './mainSlider/slider/MainSlider.jsx'
import PrimeVideos from './primeVideos/PrimeVideos'
const Homepage = (props) => {
  const {isDesktop} = props
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [activeFeaturedTodaySlideIndex, setActiveFeaturedTodaySlideIndex ] = useState(0)
  const [activeFunFavoritesSlideIndex, setActiveFunFavoritesSlideIndex] = useState(0)
  const [imdbOriginalsSlideIndex, setImdbOriginalsSlideIndex] = useState(0)
  const [primeVideosSlideIndex, setPrimeVideosSlideIndex] = useState(0)

  return (
    <div className={classes.homepage}>
      <div className={classes.mainSliderContainer}>
        <MainSlider activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex}/>
        {isDesktop?
        <SideSlider activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex}/>
        : null }
         
      </div>
      <FeaturedToday activeSlideIndex={activeFeaturedTodaySlideIndex} setActiveSlideIndex={setActiveFeaturedTodaySlideIndex} /> 
      <FunFavorites activeSlideIndex={activeFunFavoritesSlideIndex} setActiveSlideIndex={setActiveFunFavoritesSlideIndex} />
      <ImdbOriginals activeSlideIndex={imdbOriginalsSlideIndex} setActiveSlideIndex={setImdbOriginalsSlideIndex} /> 
      <PrimeVideos activeSlideIndex={primeVideosSlideIndex} setActiveSlideIndex={setPrimeVideosSlideIndex} />

    </div>
      
  )
}
export default Homepage
import Footer from '../footer/Footer'
import Header from '../header/Header'
import FeaturedToday from './featuredToday/FeaturedToday'
import FunFavorites from './funFavorites/FunFavorites'
import classes from './Homepage.module.css'
import ImdbOriginals from './ImdbOriginals/ImdbOriginals'
import SideSlider from '../sliders/sideSlider/SideSlider'
import MainSlider from '../sliders/mainSlider/MainSlider.jsx'
import PrimeVideos from './primeVideos/PrimeVideos'
import { useRecoilValue } from 'recoil'
import { desktop } from '../../store'

const Homepage = () => {
  const isDesktop = useRecoilValue(desktop)

  return (
    <div className={classes.homepageWrapper}>
      <Header />
      <div className={classes.homepage}>
        <div className={classes.sliderContainer}>
          <MainSlider />
          { isDesktop ? <SideSlider /> : null }
        </div>
        <FeaturedToday />
        <FunFavorites />
        <ImdbOriginals />
        <PrimeVideos />
      </div>
      <Footer />
    </div>
  )
}

export default Homepage
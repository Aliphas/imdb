import Slider2 from "../slider2/Slider2"
import slides from './FunFavoritesImage'
import classes from './FunFavorites.module.css'

const FunFavorites = (props) => {
  const {activeSlideIndex, setActiveSlideIndex} = props
  const title = 'Fun favorites'
  return (
    <div className={classes.funFavorites}>
      <Slider2 slides={slides} activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex} title={title}/>
    </div>
  )
}

export default FunFavorites
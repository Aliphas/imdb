import classes from './FeaturedToday.module.css'
import slides from './FeaturedTodayImages'
import Slider1 from '../slider1/Slider1'
const FeaturedToday = (props) => {
  const {activeSlideIndex, setActiveSlideIndex} = props
  const title = 'Featured today'
  const windowSize = 2
  return (
    <div className={classes.featuredToday}>
      <Slider1 slides={slides} activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex} title={title} windowSize={windowSize}/>
    </div>
  )
}

export default FeaturedToday
import classes from './FeaturedToday.module.css'
import slides from './FeaturedTodayImages'
import Slider from '../slider1/Slider'
const FeaturedToday = (props) => {
  const {activeSlideIndex, setActiveSlideIndex} = props
  const title = 'Featured today'
  return (
    <div className={classes.featuredToday}>
      <Slider slides={slides} activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex} title={title}/>
    </div>
  )
}

export default FeaturedToday
import classes from './PrimeVideos.module.css'
import slides from './PrimeVideosImage'
import Slider2 from '../slider2/Slider2'
const PrimeVideos = (props) => {
  const {activeSlideIndex, setActiveSlideIndex} = props
  const title = 'Prime Videos'
  const windowSize = 3
  return (
    <div className={classes.imdbOriginals}>
      <Slider2 slides={slides} activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex} title={title} windowSize={windowSize}/>
    </div>
  )
}

export default PrimeVideos
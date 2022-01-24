import classes from './ImdbOriginals.module.css'
import slides from './ImdbOriginalsImage'
import Slider1 from '../slider1/Slider1'
const ImdbOriginals = (props) => {
  const {activeSlideIndex, setActiveSlideIndex} = props
  const title = 'Imdb Originals'
  const windowSize = 3
  return (
    <div className={classes.imdbOriginals}>
      <Slider1 slides={slides} activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex} title={title} windowSize={windowSize}/>
    </div>
  )
}

export default ImdbOriginals
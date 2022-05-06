import classes from './Arrows.module.css'

const Arrows = (props) => {
  const { prevSlide, nextSlide, activeSlideIndex, length, loop } = props
  return (
    !loop ? <div className={classes.arrows}>
      {activeSlideIndex > 0 ? <span className={classes.prev} onClick={prevSlide}>&#10094;</span> : null}
      {activeSlideIndex < length ? <span className={classes.next} onClick={nextSlide}>&#10095;</span> : null}
    </div>
      : <div className={classes.arrows}>
        <span className={classes.prev} onClick={prevSlide}>&#10094;</span>
        <span className={classes.next} onClick={nextSlide}>&#10095;</span>
      </div>
  )
}
export default Arrows
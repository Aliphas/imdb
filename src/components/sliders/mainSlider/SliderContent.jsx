import { ReactComponent as PlayButton } from '../../../images/sliders/playButton.svg';
import { ReactComponent as WatchList } from '../../../images/watchlistIconBlack.svg';
import { ReactComponent as Plus } from '../../../images/plusIcon.svg';

const SliderContent = (props) => {
  const { activeSlideIndex, imageSlider, poster, classes } = props
  const duration = undefined
  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeSlideIndex ? `${classes.slides} ${classes.active}` : classes.inactive}
        >
          <img src={slide.videos[0].img} alt={slide.name} className={classes.slideImage} />
          <div className={classes.descrContainer}>
            <div className={classes.descrImg}>
              <div className={classes.svgContainer}>
                <Plus id={classes.plusIcon} />
                <WatchList id={classes.watchlistIcon} />

              </div>
              {poster ? <img src={poster} alt="" className={classes.smallSlideImage} /> : null}
            </div>
            <div className={classes.descrText}>
              <div className={classes.playButtonContainer}>
                <PlayButton id={classes.playButton} />
              </div>
              <div className={classes.text}>
                <div>
                  <div className={classes.slideTitle}>
                    {slide.name}
                    <div className={classes.videoTime}>
                      {duration ? duration : '0:00'}
                    </div>
                  </div>
                  <div className={classes.slideText}>{slide.description}</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default SliderContent
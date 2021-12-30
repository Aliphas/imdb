import { ReactComponent as PlayButton } from '../../../../images/playButton.svg';
const SideSliderContent = (props) => {
  const { slide, classes } = props
  const duration = undefined
  return (
    <>
      <img src={slide.sUrl} alt="" className={classes.slideImage} />
          <div className={classes.descr}>
            <div className={classes.descrBtn}>
              <PlayButton id={classes.playButton} />
              <span>{duration ? duration : '0:00'}</span>  
            </div>
            
            <div className={classes.descrText}>
              <div className={classes.slideTitle}>
                {slide.title}
              </div>
              <div className={classes.slideText}>{slide.description}</div>
            </div>
          </div>
    </>
          
        
      



     
  )
}

export default SideSliderContent
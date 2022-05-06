import { Link } from 'react-router-dom';
import { ReactComponent as PlayButton } from '../../../images/sliders/playButton.svg';

const SideSliderContent = (props) => {
  const {title, classes} = props

  return ( 
      <div className={classes.slideItem}>
        <img src={title.posterImg} alt={title.name} className={classes.slideImage} />
        <Link to={`/video/${title.id}/0`}>
          <div className={classes.descr}>
            <div className={classes.descrBtn}>
              <PlayButton id={classes.playButton} />
              <span>{title.duration ? title.duration : '0:00'}</span>
            </div>
            <div className={classes.slideName}>{title.name}</div>
          </div>
        </Link>   
      </div>
  )
}

export default SideSliderContent
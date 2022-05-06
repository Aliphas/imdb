import classes from './TitleTrailer.module.css'
import { ReactComponent as Videos } from '../../../images/videos.svg'
import { ReactComponent as Photos } from '../../../images/photos.svg'
import { ReactComponent as Play } from '../../../images/sliders/playButton.svg'
import { Link } from 'react-router-dom'

const TitleTrailer = (props) => {
  const { title } = props
  
  const ToMinutes = (number) => {
    const min = Math.floor(number / 60)
    const sec = number % 60
    return `${min}:${sec}`
  }

  return (
    <div className={classes.titleTrailer}>
      <div className={classes.media}>
        <Link to={`/photo/${title.id}/poster`} className={classes.poster}>
          <img src={title.posterImg} alt="poster img" />
        </Link>
        <Link to={`/video/${title.id}/0`} className={classes.trailer}>
          <img src={title.videos[0].img} alt='trailer video' />
          <div className={classes.playTrailer}>
            <Play className={classes.playButton} />
            <div>
              <span className={classes.playTrailerText}>Play trailer</span>
              <span className={classes.trailerDuration}>{ToMinutes(title.videos[0].duration)}</span>
            </div>
          </div>
        </Link>
      </div>
      <div className={classes.stats}>
        <Link to={`/videos/${title.id}`} className={classes.videosCount}>
          <Videos height='35px' />
          <span>
            {title.videos.length <= 99
              ? title.videos.length : '99+'} VIDEOS
          </span>
        </Link>
        <Link to={`/photos/${title.id}`} className={classes.photosCount}>
          <Photos height='35px' />
          <span>
            {title.photos.length < 99 || title.photos.length === 99
              ? title.photos.length : '99+'} PHOTOS
          </span>
        </Link>
      </div>
    </div>
  )
}

export default TitleTrailer
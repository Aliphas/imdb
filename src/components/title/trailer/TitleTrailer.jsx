import classes from './TitleTrailer.module.css'
import { ReactComponent as Videos } from '../../../images/videos.svg'
import { ReactComponent as Photos } from '../../../images/photos.svg'
import { ReactComponent as Play } from '../../../images/playButton.svg'
import { Link } from 'react-router-dom'

const TitleTrailer = (props) => {
  const { title } = props
  return (
    <div className={classes.titleTrailer}>
      <div className={classes.media}>
        <Link to={`/photoviewer/${title.id}`} className={classes.poster}>
          <img src={title.posterImg} alt="poster img" />
        </Link>
        <Link to={`/video/${title.id}`} className={classes.trailer}>
          <img src={title.trailerImg} alt='trailer video' />


          <div className={classes.playTrailer}>
            <Play className={classes.playButton} />
            <div>
              <span className={classes.playTrailerText}>Play trailer</span>
              <span className={classes.trailerDuration}>{title.trailerDuration}</span>
            </div>

          </div>
        </Link>
      </div>

      <div className={classes.stats}>
        <Link to="/videogallegy" className={classes.videosCount}>
          <Videos height='35px' />
          <span>
            {title.videos.length < 99 || title.videos.length === 99
              ? title.videos.length : '99+'} VIDEOS
          </span>
        </Link>
        <Link to="/photogallery" className={classes.photosCount}>
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
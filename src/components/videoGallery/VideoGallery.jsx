import { Link, useParams } from 'react-router-dom'
import classes from './VideoGallery.module.css'
import titles from '../../titles'

const VideoGallery = () => {
  let params = useParams() 
  const title = titles[params.titleId]
  
  return (
    <div className={classes.VideoGallery}>
      <div className={classes.main}>
        <div className={classes.header}>
          <div className={classes.title}>
            <div className={classes.titleImg}></div>
            <div className={classes.titleText}>
              <Link to={`/title/${title.id}`} className={classes.titleName}>{title.name}</Link>
              <h2>Video Gallery</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.sidebar}></div>
    </div>
  )
}

export default VideoGallery
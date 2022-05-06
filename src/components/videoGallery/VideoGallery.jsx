import { Link } from "react-router-dom"
import classes from './VideoGallery.module.css'

const VideoGallery = ({ title }) => {
  return (
    <div className={classes.pageWrapper}>
      <div className={classes.content}>
        <div className={classes.left}>
          <div className={classes.main}>
            <div className={classes.header}>
              <div className={classes.title}>
                <div className={classes.poster}>
                  <Link to={`/title/${title.id}`}><img src={title.posterImg} alt="" /></Link>
                </div>
                <div className={classes.titleText}>
                  <div>
                    <Link to={`/title/${title.id}`} className={classes.titleName}>{title.name}</Link>
                    <span>({title.year})</span>
                  </div>
                  <h2>Video Gallery</h2>
                </div>
              </div>
            </div>
            <div className={classes.videosContainer}>
              {title ? title.videos.map((video, index) => (
                <Link to={`/video/${title.id}/${video.vId}`} key={index}>
                  <div className={classes.video}>
                    <img src={video.img} alt={`Video №${video.vId} `} />
                  </div>
                </Link>
              ))
                : 'No videos yet'}
            </div>
          </div>
          <div className={classes.seeAlso}>
            <h3>See also</h3>
            <Link to={`/photos/${title.id}`}>Photo Gallery</Link></div>
        </div>

        <div className={classes.sidebar}></div>
      </div>
    </div>
  )
}

export default VideoGallery
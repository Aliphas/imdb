import { Link } from 'react-router-dom'
import classes from './PhotoGallery.module.css'

const PhotoGallery = (props) => {
  const { title } = props

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
                  <h2>Photo Gallery</h2>
                </div>
              </div>
            </div>
            <div className={classes.photosContainer}>
              {title.photos.map((photo, index) => (
                <Link to={`/photo/${title.id}/${photo.pId}`} key={index}>
                  <div className={classes.photo}>
                    <img src={photo.img} alt={`Photo №${photo.pId}`} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className={classes.trailers}>
            <h2>Trailers and Videos</h2>
            {title.videos.map((video, index) => (
              index < 3 ?
                <Link to={`/video/${title.id}/${video.vId}`} key={index}><div className={classes.video}><img src={video.img} alt={`Video №${video.vId} `} /></div></Link>
                : null
            ))}
          </div>
          <div className={classes.storyline}>
            <h2>Storyline</h2>
            <span>Twenty-five years after the original series of murders in Woodsboro, a new Ghostface emerges, and Sidney Prescott must return to uncover the truth.</span>
          </div>
        </div>
        <div className={classes.right}></div>
      </div>
    </div>
  )
}

export default PhotoGallery
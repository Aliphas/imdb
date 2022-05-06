import classes from './PhotoPage.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as Close } from '../../images/closeIcon.svg'
import { ReactComponent as Gallery } from '../../images/galleryIcon.svg'
import { ReactComponent as Share } from '../../images/shareIcon.svg'

const PhotoPage = (props) => {
  const { title, photoId } = props
  const photo = title.photos.find(photo => photo.pId == photoId)
  const currentIndex = title.photos.indexOf(photo)
  const prevPhoto = title.photos[currentIndex - 1]
  const nextPhoto = title.photos[currentIndex + 1]
  let navigate = useNavigate();

  return (
    <div className={classes.photoPage}>
      <div className={classes.topBar}>
        <Link to={`/photos/${title.id}`}>
          <button className={classes.close} onClick={() => navigate(-1)}>
            <Close />
            <span>Close</span>
          </button>
        </Link>
        <div className={classes.topButtons}>
          <Link to={`/photos/${title.id}`}>
            <button className={classes.topButton}><Gallery /></button>
          </Link>
          <button className={classes.topButton}><Share /></button>
        </div>
      </div>
      <div className={classes.main}>
        <div className={classes.arrows}>
          {prevPhoto ?
            <Link to={`/photo/${title.id}/${prevPhoto.pId}`}>
              <div className={classes.prev}>&#10094;</div>
            </Link>
            : null
          }
          {nextPhoto ?
            <Link to={`/photo/${title.id}/${nextPhoto.pId}`}>
              <div className={classes.next}>&#10095;</div>
            </Link>
            : null
          }
        </div>

        <div className={classes.photo}>
          {title.photos[photoId] && photoId !== 'poster' ?
            <img src={title.photos[photoId].img} alt="" />
            : photoId === 'poster' ?
              <img src={title.posterImg} alt="" />
              : "Photo doesn't exist"
          }
        </div>
      </div>
    </div>

  )
}

export default PhotoPage
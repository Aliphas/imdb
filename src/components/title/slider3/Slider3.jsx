import { Link } from 'react-router-dom'
import classes from './Slider3.module.css'

const Slider3 = ({title}) => {
  return (
    <div className={classes.slider}>
      <div className={classes.window}>
        <div className={classes.slides}>
          {title.videos.map((video, index) => (
            <Link to={`/video/${title.id}/${index}`} className={classes.slide}>
              <img src={video.img} alt="" />
              <span>{video.title}</span>
            </Link>
          )) }
        </div>
      </div>
    </div>
  )
}

export default Slider3
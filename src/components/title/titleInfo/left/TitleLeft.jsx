import classes from './TitleLeft.module.css'
import { ReactComponent as RightArrow } from '../../../../images/rightArrow.svg'
import { Link } from 'react-router-dom'

const TitleLeft = ({ title }) => {
  return (
    <div className={classes.left}>
      <div className={classes.videos}>
        <Link to={`/videos/${title.id}`} className={classes.blockTitle}>
          <div><h2>Videos</h2></div>
          <div>{title.videos.length}</div>
          <div><RightArrow className={classes.titleArrow} /></div>
        </Link>
      </div>
    </div>
  )
}

export default TitleLeft
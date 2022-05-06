import classes from './ImdbPro.module.css'
import '../../../styles/Buttons.css'
import imdbproImg from '../../../images/imdbpro_popup_img.png'
import { Link } from 'react-router-dom'

const ImdbPro = () => {
  return (
    <div className={classes.imdbProContainer}>
        <div className={`${classes.imdbPro} bButton`}>IMDbPro</div>
        <div className={classes.imdbProPopup}>
          <Link to="/">
            <div className={classes.imdbProPopupImg}>
              <img src={imdbproImg} alt="" />
            </div>
            <div className={classes.imdbProPopupText}>
              <h4>The essential resource for entertainment professionals</h4>
              <ul>
                <li>Find industry contacts &amp; talent representation</li>
                <li>Access in-development titles not available on IMDb</li>
                <li>Get the latest news from leading industry trades</li>
                <li>Claim your page and control your brand across IMDb &amp; Amazon </li>
              </ul>
              <button className={`${classes.imdbProPopupButton} gButton`}>Try IMDbPro Free</button> 
            </div>
          </Link>   
        </div> 
        <div className={classes.separator}></div> 
      </div>
  )
}

export default ImdbPro
import classes from './MenuPopup.module.css'
import { ReactComponent as Logo } from '../../../images/logo.svg';
import { ReactComponent as Cross } from '../../../images/menuPopupCross.svg';
const MenuPopup = (props) => {
  const {togglePopupMenu} = props
  return (
    <div>
      
      
        <div className={classes.menuPopup}>
          <div className={classes.menuPopupHeader}>
            <Logo id={classes.logoIcon}/>
            <div className={classes.crossContainer}><Cross id={classes.menuPopupCrossIcon} onClick={togglePopupMenu}/></div>
          </div>

          <div className={classes.menuPopupBody}>
            <div className={classes.menuPopupColumn}>
              <div className={classes.menuPopupTitle}>
                <h3>Movies</h3>
                  <ul>
                    <li><a href="">Release Calendar</a></li>
                    <li><a href="">DVD &amp; Blu-ray Releases</a></li>
                    <li><a href="">Top 250 Movies</a></li>
                    <li><a href="">Most Popular Movies</a></li>
                    <li><a href="">Browse Movies by Genre</a></li>
                    <li><a href="">Top Box Office</a></li>
                    <li><a href="">Showtimes &amp; Tickets</a></li>
                    <li><a href="">In Theaters</a></li>
                    <li><a href="">Coming Soon</a></li>
                    <li><a href="">Movie News</a></li>
                    <li><a href="">India Movie Spotlight</a></li>
                  </ul>
              </div>
              <div className={classes.menuPopupTitle}>
                <h3>Celebs</h3>
              </div>
            </div>
            <div className={classes.menuPopupColumn}>
              <div className={classes.menuPopupTitle}>
              <h3>TV shows</h3>
              </div>
              <div className={classes.menuPopupTitle}>
                <h3>Watch</h3>
              </div>
            </div>
            <div className={classes.menuPopupColumn}>
              <div className={classes.menuPopupTitle}>
                <h3>Awards &amp; Events</h3>
              </div>
              <div className={classes.menuPopupTitle}>
                <h3>Community</h3>
              </div>
            </div>
          </div>

        </div>
      </div>

    
    
  )
}

export default MenuPopup
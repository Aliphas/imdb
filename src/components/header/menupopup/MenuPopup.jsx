import classes from './MenuPopup.module.css'
import { ReactComponent as Logo } from '../../../images/logo.svg';
import { ReactComponent as Cross } from '../../../images/menuPopupCross.svg';
import { Link } from 'react-router-dom';

const MenuPopup = (props) => {
  const { togglePopupMenu } = props
  return (
    <div>
      <div className={classes.menuPopup}>
        <div className={classes.menuPopupHeader}>
          <Logo id={classes.logoIcon} />
          <div className={classes.crossContainer}><Cross id={classes.menuPopupCrossIcon} onClick={togglePopupMenu} /></div>
        </div>
        <div className={classes.menuPopupBody}>
          <div className={classes.menuPopupColumn}>
            <div className={classes.menuPopupSection}>
              <h3>Movies</h3>
              <ul>
                <li><Link to="/">Release Calendar</Link></li>
                <li><Link to="/">DVD &amp; Blu-ray Releases</Link></li>
                <li><Link to="/">Top 250 Movies</Link></li>
                <li><Link to="/">Most Popular Movies</Link></li>
                <li><Link to="/">Browse Movies by Genre</Link></li>
                <li><Link to="/">Top Box Office</Link></li>
                <li><Link to="/">Showtimes &amp; Tickets</Link></li>
                <li><Link to="/">In Theaters</Link></li>
                <li><Link to="/">Coming Soon</Link></li>
                <li><Link to="/">Movie News</Link></li>
                <li><Link to="/">India Movie Spotlight</Link></li>
              </ul>
            </div>
            <div className={classes.menuPopupSection}>
              <h3>Celebs</h3>
              <ul>
                <li><Link to="/">Born Today</Link></li>
                <li><Link to="/">Most Popular Celebs</Link></li>
                <li><Link to="/">Celebrity News</Link></li>
              </ul>
            </div>
          </div>
          <div className={classes.menuPopupColumn}>
            <div className={classes.menuPopupSection}>
              <h3>TV shows</h3>
              <ul>
                <li><Link to="/">What's on TV &amp; Streaming</Link></li>
                <li><Link to="/">Top 250 TV Shows</Link></li>
                <li><Link to="/">Most Popular TV Shows</Link></li>
                <li><Link to="/">Browse TV shows by Genre</Link></li>
                <li><Link to="/">TV News</Link></li>
                <li><Link to="/">India TV Spotlight</Link></li>  
              </ul>
            </div>
            <div className={classes.menuPopupSection}>
              <h3>Watch</h3>
              <ul>
                <li><Link to="/">What to Watch</Link></li>
                <li><Link to="/">Latest Trailers</Link></li>
                <li><Link to="/">IMDb Originals</Link></li>
                <li><Link to="/">IMDb Picks</Link></li>
                <li><Link to="/">IMDb Podcasts</Link></li> 
              </ul>
            </div>
          </div>
          <div className={classes.menuPopupColumn}>
            <div className={classes.menuPopupSection}>
              <h3>Awards &amp; Events</h3>
              <ul>
                <li><Link to="/"></Link></li>
                <li><Link to="/"></Link></li>
                <li><Link to="/"></Link></li>
                <li><Link to="/"></Link></li>
                <li><Link to="/"></Link></li>
                <li><Link to="/"></Link></li>
                <li><Link to="/"></Link></li>
                <li><Link to="/"></Link></li>
                <li><Link to="/"></Link></li>
                <li><Link to="/"></Link></li> 
                <li><Link to="/"></Link></li>
                <li><Link to="/"></Link></li> 
              </ul>
            </div>
            <div className={classes.menuPopupSection}>
              <h3>Community</h3>
              <ul>
                <li><Link to="/"></Link></li>
                <li><Link to="/"></Link></li>
                <li><Link to="/"></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuPopup
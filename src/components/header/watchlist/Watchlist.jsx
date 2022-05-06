import classes from './Watchlist.module.css'
import { ReactComponent as WatchList } from '../../../images/watchlist_icon.svg';
import '../../../styles/Buttons.css'

const Watchlist = () => {
  return(
    <>
      <div className={classes.separator}>       
      </div>
      <div className={`${classes.watchlist} bButton`}>
          <WatchList id={classes.watchlistIcon}/>
          <span>Watchlist</span> 
      </div>
    </>
  )
}

export default Watchlist
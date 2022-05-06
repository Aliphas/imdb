import { ReactComponent as Watchlist } from '../../../images/watchlistIconBlack.svg';
import { ReactComponent as GoldStar } from '../../../images/goldStar.svg';
import { ReactComponent as BlueStar } from '../../../images/blueStar.svg';
import { ReactComponent as Plus } from '../../../images/plusIcon.svg';
import { ReactComponent as Play } from '../../../images/playButton2.svg';
import { Link } from 'react-router-dom';

const TitleSliderItem = ({ item, classes }) => {
  return (
    <div id={classes.sliderItemWrapper}>
      <div className={classes.sliderItem}>
        <div className={classes.sliderImg}>
          <Link to="/">
            <img src={item.posterImg} alt="Slider Item" />
            <div className={classes.watchlistIconWrapper}>
              <Watchlist id={classes.watchlistIcon} />
              <Plus id={classes.watchlistPlus} />
            </div>
          </Link>
        </div>
        <div className={classes.rating}>
          <div className={classes.currentRating}>
            <GoldStar id={classes.goldStar} />
            <span>{item.rating ? item.rating : 0}</span>
          </div>
          <div className={classes.rate}><BlueStar /></div>
        </div>
        <Link to="/" className={classes.slideText}>{item.name}</Link>
        <div className={classes.watchlistWrapper}>
          <Link to="/" className={classes.watchlistBtn}><Plus /><span>Watchlist</span></Link>
        </div>
        <div className={classes.trailerWrapper}>
          <Link to={`/${item.trailer}`} className={classes.trailerBtn}><Play /><span>Trailer</span></Link>
        </div>
      </div>
    </div>
  )
}

export default TitleSliderItem
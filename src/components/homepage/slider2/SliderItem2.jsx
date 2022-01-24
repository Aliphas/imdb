// import { ReactComponent as Play } from '../../../images/playButton.svg'
// import { ReactComponent as Photos } from '../../../images/featuredToday/photosIcon.svg'
// import { ReactComponent as List } from '../../../images/featuredToday/listIcon.svg'
import { ReactComponent as Watchlist } from '../../../images/watchlistIconBlack.svg';
import { ReactComponent as GoldStar } from '../../../images/goldStar.svg';
import { ReactComponent as BlueStar } from '../../../images/blueStar.svg';
import { ReactComponent as Plus } from '../../../images/plusIcon.svg';
import { ReactComponent as Play } from '../../../images/playButton2.svg';

const SliderItem2 = ({ item, classes }) => {

  const addWatchlist = (e, item) => {
    e.preventDefault()
    item.watchlist = true
    console.log(item)
  }

  return (
    <div id={classes.sliderItemWrapper}>
      <div id={classes.sliderItem}>
        <div className={classes.sliderImg}>
          <a href="#">
            <img src={item.url} alt="Slider Item" />
            <div className={classes.watchlistIconWrapper} onClick={e => addWatchlist(e, item)}>
              <Watchlist id={classes.watchlistIcon} />
              <Plus id={classes.watchlistPlus} />
            </div>
              
            

          </a>

        </div>
        <div className={classes.rating}>
          <div className={classes.currentRating}>
            <GoldStar id={classes.goldStar} />
            <span>{item.rating}</span>
          </div>
          <div className={classes.rate}><BlueStar /></div>
        </div>
        <a href="#" className={classes.slideText}>{item.title}</a>
        <div className={classes.watchlistWrapper}>
          <a className={classes.watchlistBtn}><Plus /><span>Watchlist</span></a>
        </div>
        <div className={classes.trailerWrapper}>
          <a href={item.trailer} className={classes.trailerBtn}><Play /><span>Trailer</span></a>
        </div>

      </div>
    </div>

  )
}
export default SliderItem2
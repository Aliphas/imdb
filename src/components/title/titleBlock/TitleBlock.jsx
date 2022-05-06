import classes from './TitleBlock.module.css'
import { ReactComponent as GoldStar } from '../../../images/goldStar.svg'
import { ReactComponent as BlueStar } from '../../../images/blueStar.svg'
import { ReactComponent as Popularity } from '../../../images/popularityIcon.svg'

const TitleBlock = ({ title }) => {
  const ToK = (number) => {
    let formatter = Intl.NumberFormat('en', { notation: 'compact' })
    return formatter.format(number) 
  }
  const ToMinutes = (number) => {
    const min = Math.floor(number / 60)
    const sec = number % 60
    return `${min}:${sec}`
  }
  return (
    <div className={classes.titleTopBar}>
      <div className={classes.title}>
        <h1>{title.name}</h1>
        <span>{title.year}</span>
        <span className={classes.dotted}>{title.MPAA}</span>
        {title.comingSoon ? null : <span className={classes.dotted}>{ToMinutes(title.videos[0].duration)}</span>}
      </div>
      <div className={classes.ratingContainer}>
        {title.rating ?
          <>
            <div className={classes.imdbRating}>
              <div>IMDb RATING</div>
              <div className={classes.ratingValue}>
                <div className={classes.ratingIcon}><GoldStar color="rgb(245 197 24)" /></div>
                <div>
                  <div><span className={classes.ratingWhite}>{title.rating}</span>/10</div>
                  <div className={classes.votes}>{ToK(title.votes)}</div>
                </div>
              </div>
            </div>
            <div className={classes.yourRating}>
              <div>YOUR RATING</div>
              <div className={classes.ratingValue}>
                <div className={classes.ratingIcon}><BlueStar color="rgb(87 153 239)" /></div>
                <div className={classes.ratingText}>Rate</div>
              </div>
            </div>
          </>
          : null}
        <div className={classes.popularity}>
          <div>POPULARITY</div>
          <div className={classes.ratingValue}>
            <div className={classes.ratingIcon}><Popularity color="rgb(103 173 75)" /></div>
            <div className={classes.ratingText}>{title.popularity}&nbsp; +{title.popularityChange}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleBlock
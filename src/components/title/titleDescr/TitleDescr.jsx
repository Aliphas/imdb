import { Link } from 'react-router-dom'
import classes from './TitleDescr.module.css'
import { ReactComponent as DownArrow } from '../../../images/downArrow.svg'
import { ReactComponent as RightArrow } from '../../../images/rightArrow.svg'
import { ReactComponent as ImdbPro } from '../../../images/titleImdbProIcon.svg'

const TitleDescr = (props) => {
  const { title } = props
  return (
    <div className={classes.titleDescr}>
      <div className={classes.left}>
        <div className={classes.genres}>
          {title.genres.map((genre, index) => (
            <Link to={`/genre/${genre}`} className={classes.genre} key={index}><span>{genre}</span></Link>
          ))}
        </div>
        <div className={classes.descr}>{title.videos[0].descr}</div>
        <div className={classes.cast}>
          {title.directors ? <div className={classes.castBlock}>
            <h3>Directors</h3>
            <div>
              {title.directors.map((director, index) => (
                <Link to={director.url} className={classes.person} key={index}><span>{director.name}</span></Link>
              ))}
            </div>
          </div>
            : null}
          {title.creators ? <div className={classes.castBlock}>
            <h3>Creators</h3>
            <div>
              {title.creators.map((creator, index) => (
                <Link to={creator.url} className={classes.person} key={index}><span>{creator.name}</span></Link>
              ))}
            </div>
          </div>
            : null}
          {title.writers ? <div className={classes.castBlock}>
            <h3>Writers</h3>
            <div>
              {title.writers.map((writer, index) => (
                <div className={classes.person}>
                  <Link to={writer.url} key={index}><span>{writer.name}</span></Link>
                  {writer.info ? `(${writer.info})` : null}
                </div>
              ))}
            </div>
          </div>
            : null}
          <div className={classes.castBlock}>
            <Link to="/">
              <h3>Stars</h3>
              <div>
                {title.stars.map((star, index) => (
                  <Link to={star.url} className={classes.person} key={index}><span>{star.name}</span></Link>
                ))}
              </div>
              <RightArrow id={classes.rightArrow} />
            </Link>
          </div>
          <div className={classes.imdbPro}>
            <ImdbPro />
            <span>See production, box office &amp; company info</span>
          </div>
        </div>
      </div>

      <div className={classes.right}>
        <div>
          {title.comingSoon ?
            <div className={classes.comingSoon}>
              <h4>COMING SOON</h4>
              <span>Releases {title.comingSoon}</span>
            </div>
            : null}
          <div className={classes.watchlistContainer}>
            <div className={classes.watchlist}><span>+</span> Add to Watchlist</div>
            <div className={classes.watchlistPopupArrow}><DownArrow /></div>
          </div>
          <div className={classes.reviews}>
            {title.userReviewUrl ? <Link to={`userreview/${title.id}`}>
              <span className={classes.reviewsValue}>{title.userReviewCount}</span>
              User reviews</Link> : null}
            {title.criticReviewUrl ? <Link to={`criticreview/${title.id}`}>
              <span className={classes.reviewsValue}>{title.criticReviewCount}</span>
              Critic reviews</Link> : null}
            {title.metascore ? <Link to={`metascore/${title.id}`} className={classes.metascoreWrapper}>
              <div className={classes.metascore}>{title.metascore}</div>
              <span>Metascore</span>
            </Link> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleDescr
import { Link } from 'react-router-dom'
import classes from './TitleDescr.module.css'
import { ReactComponent as DownArrow } from '../../../images/downArrow.svg'
import { ReactComponent as RightArrow } from '../../../images/rightArrow.svg'
import { ReactComponent as ImdbPro } from '../../../images/titleImdbProIcon.svg'

const TitleDescr = (props) => {
  const {title} = props
  return (
    <div className={classes.titleDescr}>
      <div className={classes.left}>
        <div className={classes.genres}>
          {title.genres.map((genre, index) => (
            <Link to={`/genre/${genre}`} className={classes.genre}><span key={index}>{genre}</span></Link>
          ))}
        </div>
        <div className={classes.descr}>{title.videos[0].descr}</div>
        <div className={classes.cast}>
          <div className={classes.castBlock}>
            <h3>Directors</h3>
            <div>
              {title.directors.map((director, index) => (
                <a href={director.url} className={classes.person} key={index}><span>{director.name}</span></a>  
              ))}   
            </div>
          </div>
          <div className={classes.castBlock}>
            <h3>Writers</h3>
            <div>
              {title.writers.map((writer, index) => (
                <div className={classes.person}><a href={writer.url} key={index}><span>{writer.name}</span></a>({writer.info})</div>  
              ))}  
            </div>       
          </div>
          <div className={classes.castBlock}>
            <a href="#">
              <h3>Stars</h3>
              <div>
                {title.stars.map((star, index) => (
                  <div className={classes.person}><a href={star.url} key={index}><span>{star.name}</span></a></div>  
                ))}  
              </div> 
              <RightArrow id={classes.rightArrow}/> 
            </a>
          </div>
          <div className={classes.imdbPro}>
            <ImdbPro />
            <span>See production, box office &amp; company info</span>
          </div>
        </div>
      </div>




      <div className={classes.right}>
        <div>
          <div className={classes.watchlistContainer}>
            <div className={classes.watchlist}><span>+</span> Add to Watchlist</div>  
            <div className={classes.watchlistPopupArrow}><DownArrow /></div>
          </div>
          <div className={classes.reviews}>
            <a href={title.userReviewUrl}><span className={classes.reviewsValue}>{title.userReviewCount}</span>  User reviews</a>
            <a href={title.criticReviewUrl}><span className={classes.reviewsValue}>{title.criticReviewCount}</span> Critic reviews</a>
            <a href={title.metascoreUrl} className={classes.metascoreWrapper}>
              <div className={classes.metascore}>{title.metascore}</div>  
              <span>Metascore</span>
            </a>
          </div>  
        </div>
        
          
        
      </div>
    </div>
  )
}

export default TitleDescr
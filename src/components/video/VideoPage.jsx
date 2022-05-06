import { Link } from 'react-router-dom'
import classes from './VideoPage.module.css'
import { useNavigate } from "react-router-dom";
import { ReactComponent as Share } from '../../images/shareIcon.svg';
import { ReactComponent as BackArrow } from '../../images/leftBackArrow.svg';
import NotFound from '../NotFound';

const VideoPage = (props) => {
  const { title, videoId } = props
  let navigate = useNavigate();

  return (<div className={classes.wrapper}>
    {title.videos[videoId] ?
      <>
        <div className={classes.main}>
          <div className={classes.videoContainer}>
            <div className={classes.vidTopMenu}>
              <div className={classes.backBtn} onClick={() => navigate(-1)}>
                <BackArrow className={classes.backArrow} />
                <span>Back</span>
              </div>
              <div className={classes.share}><Share /></div>
            </div>
            <div className={classes.video}>
              {/* <video autoPlay src={title.videos[videoId].url}></video> */}
              {/* Image instead of video */}
              <img src={title.videos[videoId].img} alt="" />
            </div>
          </div>
          <div className={classes.descrContainer}>
            <div className={classes.descrTitle}>
              <Link to={`/title/${title.id}`} className={classes.poster}><img src={title.posterImg} alt="" /></Link>
              <div className={classes.name}>
                <Link to={`/title/${title.id}`} >
                  <div>
                    <h3>{title.name} {title.year ? (title.year) : null}</h3>
                    <div className={classes.genres}>{title.MPAA} | {title.genres.map((genre, index) => (<span key={index}>{genre}, &nbsp;</span>))}</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className={classes.descrContent}>
              <h2>{title.videos[videoId].title}</h2>
              <span>{title.videos[videoId].descr}</span>
            </div>
          </div>
        </div>
        <div className={classes.related}>
          <h2>Related Videos</h2>
          <div>
            {title.videos.filter(video => video.vId != videoId).map((video, index) => (
              <Link to={`/video/${title.id}/${video.vId}`}><img src={video.img} alt="" key={index} /></Link>
            ))}
          </div>
        </div>
      </>
      : <NotFound />}
  </div >
  )
}

export default VideoPage
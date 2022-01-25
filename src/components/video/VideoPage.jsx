import { useParams } from 'react-router-dom'
import classes from './VideoPage.module.css'
import titles from '../../titles'
import NotFound from '../NotFound'
import { useNavigate } from "react-router-dom";
import { ReactComponent as Share } from '../../images/shareIcon.svg';
import { ReactComponent as BackArrow } from '../../images/leftBackArrow.svg';

const VideoPage = () => {
  let params = useParams()
  const title = titles[params.titleId]
  const videoId = params.videoId

  let navigate = useNavigate();
  return (
    <>
      {title.videos[videoId] ?
        <div className={classes.wrapper}>
          <div className={classes.main}>
            <div className={classes.videoContainer}>

              <div className={classes.vidTopMenu}>
                <div className={classes.backBtn} onClick={() => navigate(-1)}>
                  <BackArrow className={classes.backArrow}/>
                  <span>Back</span>
                </div>
                <div className={classes.share}><Share /></div>
              </div>

              <div className={classes.video}>
                <video src={title.videos[videoId].url}></video>
              </div>
              
            </div>

            <div className={classes.descrContainer}></div>
          </div>
          <div className={classes.related}></div>
        </div>



        : <NotFound />
      }
    </>
  )
}
export default VideoPage
import { useParams } from 'react-router-dom'
import classes from './VideoPage.module.css'
import titles from '../../titles'

const VideoPage = () => {
  let params = useParams() 
  const title = titles[params.titleId]
  const id = params.videoId
  return (
    <div className={classes.videoWrapper}>
      {/* {id ? */}
        <>
          <div className={classes.videoContent}>
            <div className={classes.videoContainer}>
              <div className={classes.videoButtons}>
                <button>back</button>
                <button>share</button>
              </div>
              <div className={classes.video}>video/{title}/{id}
                <video src={'https://youtu.be/nRwLyKIBNU8'} autoPlay></video>
                {/* <video src={item.url}></video> */}
              </div>
            </div>

            <div className={classes.descrContainer}>
              <div className={classes.videoTitleContainer}>
                <div className={classes.videoImg}>
                  {/* <img src={item.img} alt="" /> */}
                </div>
                <div className={classes.videoTitle}>
                  {/* <h3>{item.title}</h3> */}
                  {/* <span>{item.genge}</span> */}
                </div>
                <div className={classes.toTitlePage}></div>
              </div>
              <div className={classes.separator}></div>
              <div className={classes.descr}>
                {/* <h2>{item.descrTitle}</h2>
          <p>{item.descr}</p> */}
              </div>
            </div>

          </div>
          <div className={classes.originalContent}>
            <h2>Original content</h2>
            {/* <Slider1 /> */}
          </div>
          <div className={classes.relatedVideo}>
            <h2>Related videos</h2>
            {/* <Slider1 /> */}
          </div>
        </>


        {/* : <div> {console.log(params.titleId + ', ' + id)}error</div> */}

      {/* } */}

    </div>
  )
}
export default VideoPage
import { useParams } from 'react-router-dom'
import classes from './VideoPage.module.css'
import NotFound from '../NotFound'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import VideoPage from './VideoPage';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { activeTitle } from '../../store';

const VideoPageContainer = (props) => {
  const [title, setTitle] = useRecoilState(activeTitle)
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  let params = useParams()
  const videoId = params.videoId
  const titleId = params.titleId

  useEffect(() => {
    fetch(`http://localhost:8000/titles/${titleId}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setTitle(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [titleId])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className={classes.videoPage}>
        <Header />
        {title ? <VideoPage title={title} videoId={videoId}/> : <NotFound /> }
        <Footer />
      </div>
    )
  }
}

export default VideoPageContainer
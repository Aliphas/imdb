import { useParams } from 'react-router-dom'
import classes from './VideoGallery.module.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import NotFound from '../NotFound'
import { useEffect, useState } from 'react'
import VideoGallery from './VideoGallery'
import { useRecoilState } from 'recoil'
import { activeTitle } from '../../store'

const VideoGalleryContainer = (props) => {
  const [title, setTitle] = useRecoilState(activeTitle)
  const [error, setError] = useState(null)
  const [videoIsLoaded, setVideoIsLoaded] = useState(false)

  let params = useParams()
  const titleId = params.titleId

  useEffect(() => {
    fetch(`http://localhost:8000/titles/${titleId}`)
      .then(res => res.json())
      .then(
        (result) => {
          setVideoIsLoaded(true)
          setTitle(result)
        },
        (error) => {
          setVideoIsLoaded(true)
          setError(error)
        }
      )
  }, [titleId])
  
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!videoIsLoaded) {
    return <div>Loading...</div>
  } else {  
    return (
      <div className={classes.VideoGallery}>
        <Header />
        { title ? <VideoGallery title={title}/> : <NotFound /> }
        <Footer />
      </div>
    )
  }
}

export default VideoGalleryContainer
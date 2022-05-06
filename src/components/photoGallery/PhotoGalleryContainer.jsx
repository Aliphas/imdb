import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../header/Header'
import NotFound from '../NotFound'
import PhotoGallery from './PhotoGallery'
import classes from './PhotoGallery.module.css'

const PhotoGalleryContainer = (props) => {
  const { isDesktop, isAuthorized, userName } = props
  let params = useParams()
  const titleId = params.titleId

  const [error, setError] = useState(null)
  const [title, setTitle] = useState(null)
  const [photoIsLoaded, setPhotoIsLoaded] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:8000/titles/${titleId}`)
      .then(res => res.json())
      .then(
        (result) => {
          setPhotoIsLoaded(true)
          setTitle(result)
        },
        (error) => {
          setPhotoIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!photoIsLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className={classes.PhotoGallery}>
        <Header isDesktop={isDesktop} isAuthorized={isAuthorized} userName={userName} />
        { title ? <PhotoGallery title={title}/> : <NotFound /> }
      </div>
    )
  }
}

export default PhotoGalleryContainer
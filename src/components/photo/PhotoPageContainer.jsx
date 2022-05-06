import PhotoPage from "./PhotoPage"
import NotFound from "../NotFound"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const PhotoPageContainer = () => {
  let params = useParams()
  const titleId = params.titleId
  const photoId = params.photoId
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
      <>
        {title ?
          <PhotoPage title={title} photoId={photoId}/>
          : <NotFound />
        }
      </>
    )
  }
}

export default PhotoPageContainer
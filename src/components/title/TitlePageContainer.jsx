import classes from './TitlePage.module.css'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import TitlePage from './TitlePage'
import { useEffect, useState } from 'react'

const TitlePageContainer = () => {
  let params = useParams()
  const titleId = params.titleId
  const [error, setError] = useState(null)
  const [title, setTitle] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

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

  return (
    <div className={classes.titlePage}>
      <Header />
      {!isLoaded && !error ?
        <div>Loading...</div>
        : title && !error ?
          <TitlePage title={title} />
          : <NotFound />
      }
      <Footer />
    </div>
  )
}

export default TitlePageContainer
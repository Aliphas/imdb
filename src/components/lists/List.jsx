import { useParams } from "react-router-dom"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import classes from './List.module.css'

const List = () => {
  let params = useParams()
  const listId = params.listId
  return (
    <div>
      <Header />
      <div className={classes.list}>
        <p>List page</p>
        <p>Link /list/{listId}</p>  
      </div>
      
      <Footer />
    </div>
  )
}

export default List
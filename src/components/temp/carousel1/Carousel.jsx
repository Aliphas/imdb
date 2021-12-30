import { Children, cloneElement, useEffect, useState } from 'react'
import classes from './Carousel.module.css'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const PAGE_WIDTH = 450

const Carousel = ({children}) => {
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)

  const handleLeftArrowClick = () => {
    console.log('handleLeftArrowClick')

    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH
      return Math.min(newOffset, 0)
    })
  }
  const handleRightArrowClick = () => {
    console.log('handleRightArrowClick')

    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH

      const maxOffset = -(PAGE_WIDTH*(pages.length - 1))
      return Math.max(newOffset, maxOffset)
    })
  }


  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            maxWidth: `${PAGE_WIDTH}px`,
            minWidth: `${PAGE_WIDTH}px`
          }
        })
      })
    )
  }, [])


  return (
    <div className={classes.mainContainer}>
      <FaChevronLeft className={classes.arrow} onClick={handleLeftArrowClick}/>
      <div className={classes.window}>
        <div className={classes.allPagesContainer}
        style={{
          transform: `translateX(${offset}px)`
        }}
        >{pages}</div>
      </div>
      <FaChevronRight className={classes.arrow} onClick={handleRightArrowClick}/>

    </div>
  )
}
export default Carousel
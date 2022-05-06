import { useEffect, useState } from "react";
import classes from './SideSlider.module.css'
import SideSliderContent from "./SideSliderContent";
import { Link } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { mainSlideIndex } from "../../../store";

const SideSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useRecoilState(mainSlideIndex)
  const [error, setError] = useState(null)
  const [titles, setTitles] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:8000/titles`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setTitles(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [activeSlideIndex])

  useEffect(() => {
    const interval = titles ? setInterval(() => {
      setActiveSlideIndex(activeSlideIndex === titles.length - 1 ? 0 : activeSlideIndex + 1)
    }, 5000) : null
    return () => clearInterval(interval)
  }, [activeSlideIndex])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className={classes.sideSliderContainer}>
        <div className={classes.upNext}><h2>Up next</h2></div>
        {titles ?
          <div className={classes.slidesWindow}>
            <section>
              {titles.map((title, index) => (
                <div key={index}
                  className={
                    (activeSlideIndex === titles.length - 3 && (index === titles.length - 2 || index === titles.length - 1))
                      || (activeSlideIndex === titles.length - 2 && (index === titles.length - 1))
                      ? `${classes.slide} ${classes.active}` : classes.inactive}
                >
                  <SideSliderContent title={title} classes={classes} />
                </div>))
              }
            </section>
            <section>
              {titles.map((title, index) => (
                <div key={index}
                  className={(
                    (index === activeSlideIndex + 1 || index === activeSlideIndex + 2 || index === activeSlideIndex + 3)
                    && activeSlideIndex < titles.length - 2)
                    || (activeSlideIndex === titles.length - 3 && (index === 0))
                    || (activeSlideIndex === titles.length - 2 && (index === 0 || index === 1))
                    || (activeSlideIndex === titles.length - 1 && (index === 0 || index === 1 || index === 2))
                    ? `${classes.slide} ${classes.active}` : classes.inactive}
                >
                  <SideSliderContent title={title} classes={classes} />
                </div>))
              }
            </section>
          </div>
          : null}
        <div className={classes.browse}><Link to="/"><h2>Browse trailers &#10095;</h2></Link></div>
      </div>
    )
  }
}

export default SideSlider
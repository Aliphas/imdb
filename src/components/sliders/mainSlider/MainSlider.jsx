import SliderContent from "./SliderContent";
import { useEffect, useState } from "react";
import Arrows from "../Arrows";
import classes from './Slider.module.css'
import { useRecoilState } from "recoil";
import { mainSlideIndex, mainSliderTitles } from "../../../store";
import { Link } from "react-router-dom";

const MainSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useRecoilState(mainSlideIndex)
  const [titles, setTitles] = useRecoilState(mainSliderTitles)
  const [error, setError] = useState(null)
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
      <div className={classes.sliderContainer}>
        {titles ?
        <Link to={`/title/${titles[activeSlideIndex].id}`} className={classes.poster}>
          <SliderContent activeSlideIndex={activeSlideIndex}
            imageSlider={titles}
            poster={titles[activeSlideIndex].posterImg}
            classes={classes}
          /></Link>
          : null}
        <Arrows
          prevSlide={() =>
            setActiveSlideIndex(activeSlideIndex < 1 ? titles.length - 1 : activeSlideIndex - 1)
          }
          nextSlide={() =>
            setActiveSlideIndex(activeSlideIndex === titles.length - 1 ? 0 : activeSlideIndex + 1)
          }
          loop={true}
        />
      </div>
    )
  }
}

export default MainSlider
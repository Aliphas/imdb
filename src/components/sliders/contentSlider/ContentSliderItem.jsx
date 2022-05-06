import { ReactComponent as Play } from '../../../images/sliders/playButton.svg'
import { ReactComponent as Photos } from '../../../images/sliders/category/photosIcon.svg'
import { ReactComponent as List } from '../../../images/sliders/category/listIcon.svg'
import { Link } from 'react-router-dom'

const ContentSliderItem = ({ item, classes }) => {
  return (
    <div id={classes.sliderItemWrapper}>
      <div className={classes.sliderItem}>
        <div className={classes.sliderImg}>
          <Link to="/">
            <img src={item.img} alt={`Slide`} />
            {item.type ?
              <div className={classes.sliderIcon}>
                {item.type === 'Photos' ? <Photos />
                  : item.type === 'List' ? <List />
                    : item.type === 'Play' ? <Play />
                      : 'Icon Error'
                }
                <span className={classes.iconType}>{item.type}</span>
              </div>
              : null}
            {item.duration ?
              <div className={classes.duration}>
                <Play className={classes.durationIcon} />
                <span>{item.duration}</span>
              </div>
              : null
            }
          </Link>
        </div>
        {item.title ? <Link to="/" className={classes.slideText}>{item.title}</Link> : null}
      </div>
    </div>
  )
}

export default ContentSliderItem
import { ReactComponent as Play } from '../../../images/playButton.svg'
import { ReactComponent as Photos } from '../../../images/featuredToday/photosIcon.svg'
import { ReactComponent as List } from '../../../images/featuredToday/listIcon.svg'

const FeaturedItem = ({ item, classes }) => {
  return (
    <div className={classes.sliderItem}>
      <div className={classes.sliderImg}>
        <a href="#">
          <img src={item.url} alt="Slider Item" />
          <div className={classes.sliderIcon}>
            {item.type === 'Photos' ? <Photos />
              : item.type === 'List' ? <List />
                : item.type === 'Play' ? <Play />
                  : 'Icon Error'
            }
            <span className={classes.iconType}>{item.type}</span>
          </div>
        </a>

      </div>
      <a href="#" className={classes.slideText}>{item.title}</a>
    </div>
  )
}
export default FeaturedItem
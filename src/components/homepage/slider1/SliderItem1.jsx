import { ReactComponent as Play } from '../../../images/playButton.svg'
import { ReactComponent as Photos } from '../../../images/featuredToday/photosIcon.svg'
import { ReactComponent as List } from '../../../images/featuredToday/listIcon.svg'

const SliderItem1 = ({ item, classes }) => {

  return (
    <div id={classes.sliderItem}>
      <div className={classes.sliderImg}>
        <a href="#">
          <img src={item.url} alt="Slider Item" />
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
                <Play className={classes.durationIcon}/>
                <span>{item.duration}</span>
              </div>
              :null
            }
        </a>

      </div>
      <a href="#" className={classes.slideText}>{item.title}</a>
    </div>
  )
}
export default SliderItem1
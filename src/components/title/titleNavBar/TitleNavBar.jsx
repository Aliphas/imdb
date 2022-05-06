import classes from './TitleNavBar.module.css'
import { ReactComponent as Share } from '../../../images/shareIcon.svg'
import { ReactComponent as AllTopics } from '../../../images/allTopics.svg'

const TitleNavBar = () => {
  return (
    <div className={classes.titleTopBar}>
      <div className={classes.item}>Cast &amp; Crew</div>
      <div className={classes.item}>User reviews</div>
      <div className={classes.item}>Trivia</div>
      <div className={classes.item}>IMDbPro</div>
      <div className={classes.allTopics}><AllTopics />All topics</div>
      <div className={classes.share}><Share /></div>
    </div>
  )
}

export default TitleNavBar
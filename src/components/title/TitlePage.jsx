import classes from './TitlePage.module.css'
import TitleTrailer from './trailer/TitleTrailer'
import TitleDescr from './titleDescr/TitleDescr'
import TitleLeft from './titleInfo/left/TitleLeft'
import TitleRight from './titleInfo/right/TitleRight'
import TitleBlock from './titleBlock/TitleBlock'
import TitleNavBar from './titleNavBar/TitleNavBar'
import NotFound from '../NotFound'

const TitlePage = (props) => {
  const { title } = props

  return (
    <>
    {title? 
    <div>
      <div className={classes.block1Wrapper}>
        <div className={classes.block1}>
          <TitleBlock title={title} />
          <TitleNavBar title={title} />
          <TitleTrailer title={title} />
          <TitleDescr title={title} />
        </div>
      </div>
      <div className={classes.block2Wrapper}>
        <div className={classes.block2}>
          <TitleLeft title={title} />
          <TitleRight title={title} />
        </div>
      </div>
    </div>
    : <NotFound />
  }
    </>
  )
}

export default TitlePage
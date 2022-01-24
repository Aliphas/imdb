import classes from './TitlePage.module.css'
import TitleTopBar1 from './topBar1/TitleTopBar1'
import TitleTopBar2 from './topBar2/TitleTopBar2'
import TitleTrailer from './trailer/TitleTrailer'
import TitleDescr from './titleDescr/TitleDescr'
import TitleLeft from './title2/left/TitleLeft'
import TitleRight from './title2/right/TitleRight'
import { useParams } from 'react-router-dom'
import titles from '../../titles'
import NotFound from '../NotFound'


const TitlePage = () => {
  let params = useParams() 
  const title = titles[params.titleId]
  return (
    <div className={classes.titlePage}>
      {title?
      <>
        <div className={classes.block1Wrapper}>
          <div className={classes.block1}>
            <TitleTopBar1 title={title} />
            <TitleTopBar2 title={title} />
            <TitleTrailer title={title} />
            <TitleDescr title={title} />  
          </div>
        </div>
        <div className={classes.block2Wrapper}>
          <div className={classes.block2}>
            <TitleLeft title={title}/>
            <TitleRight title={title}/>
          </div>
        </div>
      </>
      : <NotFound />
      }
      

    </div>
  )
}
export default TitlePage
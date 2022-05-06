import { Link } from 'react-router-dom'
import classes from './RegFooter.module.css'

const RegFooter = () => {
  return (
    <div className={classes.regFooter}>
      <div className={classes.links}>
        <Link to=''>Help</Link>
        <Link to=''> Conditions of Use</Link>
        <Link to=''>Privacy Notice</Link>
      </div>
      <span>
        © 1996 - 2022, Amazon.com, Inc.or its affiliates
      </span>
    </div>
  )
}
export default RegFooter
import classes from './DesktopAuth.module.css'
import { ReactComponent as User } from '../../../images/user_icon.svg';
import { Link } from 'react-router-dom';
import '../../../styles/Buttons.css'
const DesktopAuth = () => {
  let isAuthorized = true;
  const userName = 'User'
  
  const toggleUserMenu = () => {
    document.getElementById(classes.userMenu).classList.toggle(classes.hide);
  }
  const hideUserMenu = (e) => {
      document.getElementById(classes.userMenu).classList.add(classes.hide);
  }
  return (
    <div className={classes.desktopAuth}>
      {isAuthorized ?
      <div className={`${classes.user} bButton`} onMouseLeave={hideUserMenu}>
        <div className={classes.userName} onClick={toggleUserMenu} >
          <User id={classes.userIcon}/><span>{userName}</span>
        </div>
        <div className={classes.hide} id={classes.userMenu}>
          <a href="#">Your activity</a>
          <a href="#">Your watchlist</a>
          <a href="#">Your rating</a>
          <a href="#">Your list</a>
          <a href="#">Account settings</a>
          <a href="#">Sign out</a>
        </div>  
      </div>
      
      // :<div className={classes.signIn}>Sign In</div>
      :<Link to="/registration" className={classes.signIn}>Sign In</Link>
    }

    </div>
  )
}

export default DesktopAuth
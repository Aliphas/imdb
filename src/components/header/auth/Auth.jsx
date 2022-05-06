import classes from './Auth.module.css'
import { ReactComponent as User } from '../../../images/user_icon.svg';
import { Link } from 'react-router-dom';
import '../../../styles/Buttons.css'
import { useRecoilState, useRecoilValue } from 'recoil';
import { authorized, user } from '../../../store'

const Auth = (props) => {
  const [isAuthorized, setIsAuthorized] = useRecoilState(authorized)
  const userName = useRecoilValue(user)

  const toggleUserMenu = () => {
    document.getElementById(classes.userMenu).classList.toggle(classes.hide)
  }
  const hideUserMenu = (e) => {
    document.getElementById(classes.userMenu).classList.add(classes.hide)
  }
  const signOut = () => {
    setIsAuthorized(false)
  }

  return (
    <div className={classes.desktopAuth}>
      {isAuthorized ?
        <div className={`${classes.user} bButton`} onMouseLeave={hideUserMenu}>
          <div className={classes.userName} onClick={toggleUserMenu} >
            <User id={classes.userIcon} /><span>{userName}</span>
          </div>
          <div className={classes.hide} id={classes.userMenu}>
            <Link to="/">Your activity</Link>
            <Link to="/">Your watchlist</Link>
            <Link to="/">Your rating</Link>
            <Link to="/">Your list</Link>
            <Link to="/">Account settings</Link>
            <Link to="/" onClick={signOut}>Sign out</Link>
          </div>
        </div>
        : <Link to="/signin" className={classes.signIn}>Sign In</Link>
      }
    </div>
  )
}

export default Auth
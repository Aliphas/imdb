import classes from './Registration.module.css'
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import RegFooter from './RegFooter';

const Registration = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.registration}>
        <Link to="/" ><Logo id={classes.logoIcon} /></Link>
        <div className={classes.form}>
          <h2>Create account</h2>
          <form>
            <div>
              <label>Your name<input type='text' /> </label>
            </div>
            <div>
              <label>Email<input type='email' /> </label>
            </div>
            <div>
              <label>Password<input type='password' /><span>Passwords must be at least 8 characters.</span></label>
            </div>
            <div>
              <label>Re-enter password <input type='password' /> </label>
            </div>
            <button type='submit'>Create your IMDb account</button>
          </form>
          <div className={classes.signIn}>Already have an account? <Link to="/sign-imdb" className={classes.link}><span>Sign In</span> </Link></div>
        </div>
      </div>
      <RegFooter />
    </div>
  )
}

export default Registration
import { Link } from 'react-router-dom'
import classes from './Authorization.module.css'

const Authorization = () => {
  return (
    <div className={classes.authWrapper}>
      <div className={classes.authorization}>
        <div className={classes.signIn}>
          <div className={classes.title}><h2>Sign in</h2></div>
          <div className={classes.buttons}>
            <div className={classes.button}>Sign in with IMDb</div>
            <div className={classes.button}>Sign in with Amazon</div>
            <div className={classes.button}>Sign in with Facebook</div>
            <div className={classes.button}>Sign in with Google</div>
            <div className={classes.button}>Sign in with Apple</div>  
          </div>
          <div className={classes.or}><span>or</span></div>
          <Link to="/registration" className={`${classes.button} ${classes.new}`}>Create a New Account</Link>
          <div className={classes.policy}>
            By signing in, you agree to IMDb's <a href="">Conditions of Use</a> and <a href="">Privacy Policy</a>.
          </div> 
        </div>

        <div className={classes.benefitsWrapper}>
          <div className={classes.benefits}>
            <h2>Benefits of your free IMDb account</h2>
            <h3>Personalized Recommendations</h3>
            <span>Discover shows you'll love.</span>
            <h3>Your Watchlist</h3>
            <span>Track everything you want to watch and receive e-mail when movies open in theaters.</span>
            <h3>Your Ratings</h3>
            <span>Rate and remember everything you've seen.</span>
            <h3>Contribute to IMDb</h3>
            <span>Add data that will be seen by millions of people and get cool badges.</span>  
          </div>
          
        </div>
      </div>
    </div>
  )
}
export default Authorization
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import classes from './SignIn.module.css'

const SignIn = () => {
  return (
    <div className={classes.authWrapper}>
      <Header />
      <div className={classes.authorization}>
        <div className={classes.signIn}>
          <div className={classes.title}><h2>Sign in</h2></div>
          <div className={classes.buttons}>
            <Link to='/sign-imdb' className={classes.button}><button>Sign in with IMDb</button></Link>
            <Link to='/sign-amazon' className={classes.button}><button>Sign in with Amazon</button></Link>
            <Link to='/sign-facebook' className={classes.button}><button>Sign in with Facebook</button></Link>
            <Link to='/sign-google' className={classes.button}><button>Sign in with Google</button></Link>
            <Link to='/sign-apple' className={classes.button}><button>Sign in with Apple</button></Link> 
          </div>
          <div className={classes.or}><span>or</span></div>
          <Link to="/registration" className={`${classes.button} ${classes.new}`}><button>Create a New Account</button></Link>
          <div className={classes.policy}>
            By signing in, you agree to IMDb's <Link to="/">Conditions of Use</Link> and <Link to="/">Privacy Policy</Link>.
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
      <Footer />
    </div>
  )
}

export default SignIn
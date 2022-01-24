import classes from './Registration.module.css'
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const SignInForm = () => {
  return (
    <div className={classes.formWrapper}>
      <Logo id={classes.logoIcon}/>
      <div className={classes.form}>
        <h2>Create account</h2>
        <form> 
          <div>
            <label>Email<input type='email'/> </label>  
          </div>
          <div>
            <label>
              Password 
              <Link to="/autorisation" className={`${classes.link} ${classes.forgotPass}`}>Forgot your password?</Link>
              <input type='password'/>
            </label>  
          </div> 
          <button type='submit'>Sign In</button>
        </form>
        <div className={classes.signed}>
          <input type="checkbox"/>
          <span>Keep me signed in.</span>
        </div>
        <div className={classes.linkButton}>
          <Link to="/registration" className={classes.link}>Create your IMDB account</Link>
        </div>
        
        
      </div>
    </div>
  )
}

export default SignInForm
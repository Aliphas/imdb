import classes from './SignIMDb.module.css'
import { ReactComponent as Logo } from '../../../images/logo.svg';
import { Link } from 'react-router-dom';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

const SignIMDb = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Logo id={classes.logoIcon} />
      <div className={classes.signIn}>
        <h1>Sign In</h1>
        <form action="" className={classes.signInForm}>
          <label for="email">Email</label>
          <input type="email" name='email'/>
          <label for="password">Password</label>
          <input type="password" name='password'/>
          <input type='submit' value='Sign-In' id={classes.submit} /> 
        </form>
        <div className={classes.checkboxContainer}>
          <input type="checkbox" name='checkbox' id={classes.checkbox}/>
          <label for="checkbox" id={classes.checkboxLabel}>Keep me signed in.</label>  
          <span className={classes.details}>Details</span>
        </div>
        <div className={classes.new}><span>New to IMDb?</span> </div>
        <Link to='/registration' className={classes.create}><button>Create your IMDb account</button></Link>
        
      </div>
      <Footer />
    </div>
  )
}

export default SignIMDb
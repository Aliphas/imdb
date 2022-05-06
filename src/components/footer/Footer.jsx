import classes from './Footer.module.css'
import { ReactComponent as Facebook } from '../../images/footer/fb.svg'
import { ReactComponent as Instagram } from '../../images/footer/inst.svg'
import { ReactComponent as Twitch } from '../../images/footer/twitch.svg'
import { ReactComponent as Twitter } from '../../images/footer/twitter.svg'
import { ReactComponent as Youtube } from '../../images/footer/youtube.svg'
import { ReactComponent as Icon } from '../../images/footer/linkIcon.svg'
import { ReactComponent as Logo } from '../../images/footer/footerLogo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes.socials}>
          <Link to="/" href="https://facebook.com/imdb"><Facebook /></Link>
          <Link to="/" href="https://instagram.com/imdb"><Instagram /></Link>
          <Link to="/" href="https://twitch.tv/IMDb"><Twitch /></Link>
          <Link to="/" href="https://twitter.com/imdb"><Twitter /></Link>
          <Link to="/" href="https://youtube.com/imdb/"><Youtube /></Link>
        </div> 
        <div className={classes.items}>
          <div className={classes.item}><Link to="/" >Get the IMDb App<Icon /></Link></div>
          <div className={classes.item}><Link to="/" >Help<Icon /></Link></div>
          <div className={classes.item}><Link to="/" >Site Index<Icon /></Link></div>
          <div className={classes.item}><Link to="/" >IMDb Pro<Icon /></Link></div>
          <div className={classes.item}><Link to="/" >Box Office Mojo<Icon /></Link></div>
          <div className={classes.item}><Link to="/" >IBDb Developer<Icon /></Link></div>

          <div className={classes.item}><Link to="/" >Press Room<Icon /></Link></div>
          <div className={classes.item}><Link to="/" >Advertising<Icon /></Link></div>
          <div className={classes.item}><Link to="/" >Jobs<Icon /></Link></div>
          <div className={classes.item}><Link to="/" >Condition of Use<Icon /></Link></div>
          <div className={classes.item}><Link to="/" >Privacy Policy<Icon /></Link></div>
          <div className={classes.item}><Link to="/" >Interest-Based Ads<Icon /></Link></div> 
        </div>
        <div className={classes.logo}><Logo /></div>
        <div className={classes.copyright}>© 1990-2022 by IMDb.com, Inc.</div>
      </div>
    </footer>
  )
}
export default Footer
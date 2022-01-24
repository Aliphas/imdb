import classes from './Footer.module.css'
import { ReactComponent as Facebook } from '../../images/footer/fb.svg'
import { ReactComponent as Instagram } from '../../images/footer/inst.svg'
import { ReactComponent as Twitch } from '../../images/footer/twitch.svg'
import { ReactComponent as Twitter } from '../../images/footer/twitter.svg'
import { ReactComponent as Youtube } from '../../images/footer/youtube.svg'
import { ReactComponent as Icon } from '../../images/footer/linkIcon.svg'
import { ReactComponent as Logo } from '../../images/footer/footerLogo.svg'

const Footer = () => {
  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes.socials}>
          <Facebook />
          <Instagram />
          <Twitch />
          <Twitter />
          <Youtube />
        </div> 
        <div className={classes.items}>
          <div className={classes.item}><a href="">Get the IMDb App<Icon /></a></div>
          <div className={classes.item}><a href="">Help<Icon /></a></div>
          <div className={classes.item}><a href="">Site Index<Icon /></a></div>
          <div className={classes.item}><a href="">IMDb Pro<Icon /></a></div>
          <div className={classes.item}><a href="">Box Office Mojo<Icon /></a></div>
          <div className={classes.item}><a href="">IBDb Developer<Icon /></a></div>

          <div className={classes.item}><a href="">Press Room<Icon /></a></div>
          <div className={classes.item}><a href="">Advertising<Icon /></a></div>
          <div className={classes.item}><a href="">Jobs<Icon /></a></div>
          <div className={classes.item}><a href="">Condition of Use<Icon /></a></div>
          <div className={classes.item}><a href="">Privacy Policy<Icon /></a></div>
          <div className={classes.item}><a href="">Interest-Based Ads<Icon /></a></div> 
        </div>
        <div className={classes.logo}><Logo /></div>
        <div className={classes.copyright}>© 1990-2022 by IMDb.com, Inc.</div>
      </div>
    </footer>
  )
}
export default Footer
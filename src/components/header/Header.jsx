import DesktopAuth from './desktopauth/DesktopAuth'
import classes from './Header.module.css'
import ImdbPro from './imdbpro/ImdbPro'
import MenuPopup from './menupopup/MenuPopup'
import DesktopMenu from './menu/desktopMenu/DesktopMenu'
import Search from './search/Search'
import Watchlist from './watchlist/Watchlist'

const Header = (props) => {
  const { isDesktop, isAuthorized, username } = props
  const togglePopupMenu = () => {
    document.getElementById(classes.menuPopupWrapper).classList.toggle(classes.openPopupMenu)
  }
  return (
    <>
      <header>
        <div className={classes.headerContainer}>
          {isDesktop?
            <>
              
              <DesktopMenu togglePopupMenu={togglePopupMenu}/>
              <Search />
              <ImdbPro />
              <Watchlist />
              <DesktopAuth isAuthorized={isAuthorized} username={username}/>
              
            </>
            :<>
              {/* <MobileMenu /> */}
            </>
          }
          
        </div> 
      </header>
    <div id={classes.menuPopupWrapper}>
    <MenuPopup togglePopupMenu={ togglePopupMenu } /> 
  </div> 
  </>
  )
}

export default Header
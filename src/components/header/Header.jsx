import Auth from './auth/Auth'
import classes from './Header.module.css'
import ImdbPro from './imdbpro/ImdbPro'
import MenuPopup from './menupopup/MenuPopup'
import Menu from './menu/desktopMenu/Menu'
import Search from './search/Search'
import Watchlist from './watchlist/Watchlist'
import { useRecoilValue } from 'recoil'
import { desktop } from '../../store'

const Header = () => {
  const isDesktop = useRecoilValue(desktop)

  const togglePopupMenu = () => {
    document.getElementById(classes.menuPopupWrapper).classList.toggle(classes.openPopupMenu)
  }

  return (
    <>
      <header>
        <div className={classes.headerContainer}>
          {isDesktop ?
            <>
              <Menu togglePopupMenu={togglePopupMenu} />
              <Search />
              <ImdbPro />
              <Watchlist />
              <Auth />
            </>
            : <>
              {/* <MobileMenu /> */}
            </>
          }
        </div>
      </header>
      <div id={classes.menuPopupWrapper}>
        <MenuPopup togglePopupMenu={togglePopupMenu} />
      </div>
    </>
  )
}

export default Header
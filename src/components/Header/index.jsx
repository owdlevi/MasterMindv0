/** @jsx jsx */
import { ThemeProvider, jsx, Container } from 'theme-ui'
import UserStatus from '../User/UserStatus'
// import SwitchColorMode from '../components/SwitchColorMode'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div
      sx={{
        flexGrow: 1
      }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1
            }}>
            <Link
              to="/"
              sx={{
                variant: 'styles.navlink',
                fontSize: '24px',
                color: 'whitesmoke'
              }}>
              MasterMind 0.1
            </Link>
          </Typography>
          <UserStatus />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header

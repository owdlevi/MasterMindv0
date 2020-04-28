/** @jsx jsx */
import { ThemeProvider, jsx, Container } from 'theme-ui'
import theme from './../theme'
import Header from '../components/Header'
import UserStatus from '../components/User/UserStatus'
// import SwitchColorMode from '../components/SwitchColorMode'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Layout = ({ children, title = 'Master Mind 0.1' }) => (
  <ThemeProvider theme={theme}>
    <Router>
      {/* <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head> */}
      <div
        sx={{
          fontSize: '15px',
          fontFamily: "'Open Sans', sans-serif",
          // backgroundColor: 'background',
          background: 'colors.background',

          margin: 0,
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden'
        }}>
        <Header />
        <Container>{children}</Container>
      </div>
    </Router>
  </ThemeProvider>
)

export default Layout

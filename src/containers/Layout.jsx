/** @jsx jsx */
import { ThemeProvider, jsx, Container } from 'theme-ui'
import theme from './../theme'
import UserStatus from '../components/User/UserStatus'
// import SwitchColorMode from '../components/SwitchColorMode'

const Layout = ({ children, title = 'Master Mind 0.1' }) => (
  <ThemeProvider theme={theme}>
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
      <header
        sx={{
          variant: 'styles.header',
          boxShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)',
          background: 'whitesmoke',
          color: 'colors.background'
        }}>
        <Container
          py={1}
          px={3}
          sx={{
            maxWidth: '100%',
            mx: 'auto',
            display: 'flex',
            alignItems: 'baseline'
          }}>
          <a
            sx={{
              variant: 'styles.navlink',
              fontSize: 5,
              color: 'colors.background',
              py: 2
            }}>
            MasterMind 0.1
          </a>

          <div sx={{ mx: 'auto' }} />
          {/* <SwitchColorMode
            sx={{
              variant: 'styles.button',
              ml: 3,
              py: 2
            }}
          /> */}
          <div
            sx={{
              ml: 3,
              py: 2
            }}>
            <UserStatus />
          </div>
        </Container>
      </header>
      <Container>{children}</Container>
    </div>
  </ThemeProvider>
)

export default Layout

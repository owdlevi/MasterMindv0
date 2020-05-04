/** @jsx jsx */
import React from 'react'
import { ThemeProvider, jsx, Container } from 'theme-ui'
import { Helmet } from 'react-helmet'
import theme from './../theme'
import Header from '../components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { useFirebaseAuth } from '../utils/auth/hooks'
import { createAuthUserInfo } from '../utils/auth/user'

const Layout = ({ children, title = 'Master Mind 0.1' }) => {
  const { initializing, user } = useFirebaseAuth()
  const AuthUserInfoContext = React.createContext(createAuthUserInfo())
  return (
    <ThemeProvider theme={theme}>
      <AuthUserInfoContext.Provider value={{ user }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
        </Helmet>
        <Router>
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
      </AuthUserInfoContext.Provider>
    </ThemeProvider>
  )
}

export default Layout

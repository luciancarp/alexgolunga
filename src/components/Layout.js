import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// import Footer from './footer'
import ThemeSwitcher from '../components/ThemeSwitcher'
import Navigation from './Navigation'

import { spaces } from '../style/global'

const Layout = ({ children }) => {
  return (
    <>
      <ThemeSwitcher />
      <Container>
        <Navigation />
        <>
          <Content>{children}</Content>
          {/* <Footer /> */}
        </>
      </Container>
    </>
  )
}

const Container = styled.div`
  margin: 0 auto;
  /* max-width: 1024px; */
  padding: 1rem;
  padding-top: 0;
  padding-bottom: 0;
`

const Content = styled.main`
  max-width: 1024px;
  margin-top: 30vh;
  margin-left: ${spaces.widthNav};
  padding: ${spaces.wide};
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

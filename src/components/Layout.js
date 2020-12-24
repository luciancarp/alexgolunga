import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'

// import Footer from './footer'
import ThemeSwitcher from '../components/ThemeSwitcher'
import Navigation from './Navigation'

import { spaces } from '../style/global'

const Layout = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  })

  return (
    <>
      <ThemeSwitcher />
      <Container>
        {isDesktopOrLaptop && <Navigation />}
        <>
          <Content isDesktopOrLaptop>{children}</Content>
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

  margin-top: 2.5vh;
  margin-left: 0;
  @media (min-width: 1224px) {
    margin-left: ${spaces.widthNav};
  }
  padding: ${spaces.wide};
  padding-top: 0;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

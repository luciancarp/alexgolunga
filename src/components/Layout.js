import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'

import Footer from './Footer'
import ThemeSwitcher from './ThemeSwitcher'
import Navigation from './Navigation'
import Lissajous from './Lissajous'
import About from './About'

import { spaces, screenSizes } from '../style/global'

const isWorkInProgress = true

const Layout = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${screenSizes.laptopL})`,
  })

  return (
    <>
      <Container>
        <ThemeSwitcher />
        {isDesktopOrLaptop && !isWorkInProgress && <Navigation />}
        <>
          <About />
          <Content>
            {children}
            <Footer />
          </Content>
        </>
      </Container>
      <LissajousContainer>
        <Lissajous />
      </LissajousContainer>
    </>
  )
}

const Container = styled.div`
  margin: 0 auto;
  padding: 1rem;
  padding-top: 0;
  padding-bottom: 0;

  position: relative;
  z-index: 10;
`

const Content = styled.main`
  max-width: 900px;

  @media (min-width: ${screenSizes.desktopS}) {
    max-width: 1024px;
  }

  @media (min-width: ${screenSizes.desktop}) {
    max-width: 1440px;
  }

  margin: 0 auto;

  padding: ${spaces.narrow};
  padding-top: 0;
`

const LissajousContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  z-index: 0;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

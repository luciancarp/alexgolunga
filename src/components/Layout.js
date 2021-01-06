import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'

import Footer from './Footer'
import ThemeSwitcher from './ThemeSwitcher'
import Navigation from './Navigation'
import Lissajous from './Lissajous'

import { spaces, screenSizes } from '../style/global'

const Layout = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${screenSizes.laptopL})`,
  })

  return (
    <>
      <Container>
        <ThemeSwitcher />
        {isDesktopOrLaptop && <Navigation />}
        <>
          <Content>{children}</Content>
          <Footer />
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
  /* max-width: 1024px; */
  padding: 1rem;
  padding-top: 0;
  padding-bottom: 0;

  position: relative;
  z-index: 10;
`

const Content = styled.main`
  max-width: 900px;

  /* margin-top: 0; */
  /* margin-left: 0; */
  margin: 0 auto;
  @media (min-width: ${screenSizes.laptop}) {
    /* margin-left: ${spaces.widthNav}; */
  }
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

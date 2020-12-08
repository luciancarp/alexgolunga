import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// import Footer from './footer'
import ThemeSwitcher from '../components/ThemeSwitcher'

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <ThemeSwitcher />
        <Content>{children}</Content>
        {/* <Footer /> */}
      </Container>
    </>
  )
}

const Container = styled.div`
  /* margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
  padding-top: 0;
  padding-bottom: 0;

  display: flex;
  flex-direction: column;
  min-height: 100vh; */
`

const Content = styled.main`
  /* flex-grow: 1;
  max-width: 600px; */
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

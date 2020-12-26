import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'

// import Footer from './footer'
import ThemeSwitcher from '../components/ThemeSwitcher'
import Navigation from './Navigation'

import { spaces, screenSizes } from '../style/global'

const Layout = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${screenSizes.laptopL})`,
  })

  return (
    <>
      <ThemeSwitcher />
      <Container>
        {isDesktopOrLaptop && <Navigation />}
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

  -webkit-animation: fadein 1s ease-in-out;
  -moz-animation: fadein 1s ease-in-out;
  -ms-animation: fadein 1s ease-in-out;
  -o-animation: fadein 1s ease-in-out;
  animation: fadein 1s ease-in-out;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import { spaces, screenSizes } from '../style/global'

const id = 'reel'
const title = 'Game Audio Reel'

const Reel = () => {
  const isMobileOrTablet = useMediaQuery({
    query: `(max-width: ${screenSizes.laptop})`,
  })

  return (
    <Container id={id} isMobileOrTablet={isMobileOrTablet}>
      <Title>{title}</Title>
      <StyledIframe
        title='Game Audio Reel'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        frameBorder='0'
        loading='lazy'
        webkitallowfullscreen='true'
        mozallowfullscreen='true'
        allowFullScreen
        // width="600"
        // height="337"
        isMobileOrTablet={isMobileOrTablet}
        src='https://www.youtube.com/embed/I2N-Hweo3vE?autoplay=1'
      />
    </Container>
  )
}

const StyledIframe = styled.iframe`
  display: block;
  width: 100%;
  height: ${(props) => (props.isMobileOrTablet ? 'calc(100vw * 0.5)' : '60vh')};

  border-style: solid;
  border-color: ${(props) => props.theme.text};
  border-width: 2px;
`

const Title = styled.h1`
  margin-bottom: ${spaces.regular};
  font-size: 1.75rem;
`

const Container = styled.div`
  height: ${(props) => (props.isMobileOrTablet ? '100%' : '65vh')};
  margin-bottom: ${(props) =>
    props.isMobileOrTablet ? `${spaces.wide}` : '10vh'};

  -webkit-animation: fadein 1.5s ease-in-out;
  -moz-animation: fadein 1.5s ease-in-out;
  -ms-animation: fadein 1.5s ease-in-out;
  -o-animation: fadein 1.5s ease-in-out;
  animation: fadein 1.5s ease-in-out;

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

export default Reel

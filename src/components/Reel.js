import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import { Opacity, Translate } from './Animations'
import { spaces, screenSizes } from '../style/global'

const id = 'reel'
const title = 'Game Audio Reel'

const Reel = () => {
  const isMobileOrTablet = useMediaQuery({
    query: `(max-width: ${screenSizes.laptop})`,
  })

  const [isRendered, setIsRendered] = useState(false)

  useEffect(() => {
    setTimeout(function () {
      setIsRendered(true)
    }, 500)
  }, [])

  return (
    <Container id={id} isMobileOrTablet={isMobileOrTablet}>
      {isRendered && (
        <Translate>
          <Opacity>
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
              src='https://www.youtube.com/embed/I2N-Hweo3vE'
            />
          </Opacity>
        </Translate>
      )}
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
`

export default Reel

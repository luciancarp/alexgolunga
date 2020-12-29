import React, { useRef } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import { Opacity, Translate } from './Animations'
import { useHasBeenPartlyVisible } from '../hooks/useVisibility'
import { spaces, screenSizes } from '../style/global'

const id = 'wwise'
const title = 'Wwise Unity Integration'

const Wwise = () => {
  const halfPage = useRef()
  const hasScrolled = useHasBeenPartlyVisible(halfPage, 0.1)

  const isMobileOrTablet = useMediaQuery({
    query: `(max-width: ${screenSizes.laptop})`,
  })

  return (
    <Container id={id} ref={halfPage}>
      {hasScrolled ? (
        <Opacity>
          <Translate>
            <Title>{title}</Title>
            <p>
              Burgundy is a demo I created to demonstrate my proficiency with
              some Wwise and Unity integration features.
            </p>
            <p>
              The sound design is original, and most of the systems created
              using Wwise are described in the walkthrough below. All of the
              scripts shown are written by me as well.
            </p>

            <StyledIframe
              title='Game Audio Reel'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              frameBorder='0'
              loading='lazy'
              webkitallowfullscreen='true'
              mozallowfullscreen='true'
              allowFullScreen
              src='https://www.youtube.com/embed/710vanhhe08'
              isMobileOrTablet={isMobileOrTablet}
            />
          </Translate>
        </Opacity>
      ) : (
        <Placeholder />
      )}
    </Container>
  )
}

const Placeholder = styled.div`
  height: 100vh;
`

const Title = styled.h1`
  margin-bottom: ${spaces.regular};
`

const Container = styled.div`
  margin-bottom: ${spaces.spacer};
`

const StyledIframe = styled.iframe`
  display: block;
  width: 100%;
  height: ${(props) => (props.isMobileOrTablet ? 'calc(100vw * 0.5)' : '60vh')};
  border-style: solid;
  border-color: ${(props) => props.theme.text};
  border-width: 2px;

  margin-top: ${spaces.wide};
`

export default Wwise

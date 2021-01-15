import React, { useRef } from 'react'
import styled from 'styled-components'

import { Opacity } from './Animations'
import { useHasBeenPartlyVisible } from '../hooks/useVisibility'
import { spaces } from '../style/global'

import recmixreel from '../assets/audio/recmixreel.wav'

const id = 'recording'
const title = 'Recording / Mix'

const Recording = () => {
  const halfPage = useRef()
  const hasScrolled = useHasBeenPartlyVisible(halfPage, 0.1)
  return (
    <Container id={id} ref={halfPage}>
      {hasScrolled ? (
        <Opacity>
          <Title>{title}</Title>
          <p>
            A short reel consisting of some music projects to which I
            contributed with recording and/or mixing.
          </p>
          <StyledAudio controls preload='none'>
            <source src={recmixreel} type='audio/wav' />
          </StyledAudio>
        </Opacity>
      ) : (
        <Placeholder />
      )}
    </Container>
  )
}

const StyledAudio = styled.audio`
  margin-bottom: ${spaces.narrow};
`

const Placeholder = styled.div`
  height: 100vh;
`

const Title = styled.h1`
  margin-bottom: ${spaces.wide};
`

const Container = styled.div`
  margin-bottom: ${spaces.spacer};
`

export default Recording

import React, { useRef } from 'react'
import styled from 'styled-components'

import { Opacity, Translate } from './Animations'
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
          <Translate>
            <Title>{title}</Title>
            <p>
              A short reel consisting of some music projects to which I
              contributed with recording and/or mixing.
            </p>
            <audio controls>
              <source src={recmixreel} type='audio/wav' />
            </audio>
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
  margin-bottom: ${spaces.wide};
`

export default Recording

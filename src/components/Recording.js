import React from 'react'
import styled from 'styled-components'

import { Opacity } from './Animations'
import { spaces } from '../style/global'

import recmixreelMp3 from '../assets/audio/recmixreel.mp3'

const id = 'recording'
const title = 'Recording / Mix'

const Recording = () => {
  return (
    <Container id={id}>
      <Opacity>
        <Title>{title}</Title>
        <p>
          A short reel consisting of some music projects to which I contributed
          with recording and/or mixing.
        </p>
        <AudioContainer>
          <StyledAudio controls preload='none'>
            <source src={recmixreelMp3} type='audio/mp3' />
          </StyledAudio>
        </AudioContainer>
      </Opacity>
    </Container>
  )
}

const AudioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledAudio = styled.audio`
  margin-top: ${spaces.regular};
  margin-bottom: ${spaces.regular};
  width: 70%;

  font-family: inherit;
  font-size: inherit;
`

const Title = styled.h1`
  margin-bottom: ${spaces.wide};
`

const Container = styled.div`
  margin-bottom: ${spaces.spacer};
`

export default Recording

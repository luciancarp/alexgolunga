import React from 'react'
import styled from 'styled-components'

import { spaces } from '../style/global'

const title = 'Alex Golunga'
const description =
  'Sound designer and audio engineer. MaxMSP programmer. Passionate about game audio implementation and DSP.'

const About = () => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 6rem;
`

const Title = styled.h1`
  margin-bottom: ${spaces.wide};
`

const Description = styled.h3``

export default About

import React from 'react'
import styled from 'styled-components'

import { spaces } from '../style/global'

const id = 'reel'
const title = 'Game Audio Reel'

const Reel = () => {
  return (
    <Container id={id}>
      <Title>{title}</Title>
      <StyledIframe
        src='https://www.youtube.com/embed/I2N-Hweo3vE'
        title='Game Audio Reel'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        frameBorder='0'
        webkitallowfullscreen='true'
        mozallowfullscreen='true'
        allowFullScreen
        // width="600"
        // height="337"
      />
    </Container>
  )
}

const StyledIframe = styled.iframe`
  display: block;
  width: 100%;
  height: 60vh;

  /* @media (min-width: 425px) {
    height: 275px;
  }

  @media (min-width: 600px) {
    height: 337px;
  } */

  border-style: solid;
  border-color: #fff;
  border-width: 2px;
`

const Title = styled.h1`
  margin-bottom: ${spaces.regular};
  font-size: 1.75rem;
`

const Container = styled.div`
  height: 65vh;
  margin-bottom: 10vh;
`

export default Reel

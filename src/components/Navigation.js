import React from 'react'
import styled from 'styled-components'

import { spaces } from '../style/global'

let navlinks = [
  'Sound Design Reel',
  'Wwise Unity Integration',
  'MaxMSP/Gen/Jitter',
  'Haptic Design',
  'Sound Installation: beating.',
]

const Navigation = () => {
  return (
    <Container>
      {navlinks.map((link) => (
        <h2>{link}</h2>
      ))}
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;

  padding: ${spaces.wide};
`

export default Navigation

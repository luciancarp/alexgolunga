import React from 'react'
import styled from 'styled-components'

let navlinks = [
  'Sound Design Reel',
  'Wwise Unity Integration',
  'MaxMSP/Gen/Jitter',
  'Haptic Design',
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

const Container = styled.div``

export default Navigation

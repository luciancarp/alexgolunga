import React from 'react'
import styled from 'styled-components'
import { fontSizes } from '../style/global'

const Footer = () => {
  return (
    <Container>
      <Center>Made by Lucian Carp © {new Date().getFullYear()}</Center>
    </Container>
  )
}

const Center = styled.div`
  font-size: ${fontSizes.small};
`

const Container = styled.footer`
  min-height: 10vh;
  /* max-width: 600px; */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export default Footer

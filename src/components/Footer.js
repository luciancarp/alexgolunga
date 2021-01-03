import React from 'react'
import styled from 'styled-components'
import { fontSizes } from '../style/global'

const Footer = () => {
  return (
    <Container>
      <Center>
        Made by{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={'https://www.luciancarp.com/'}
        >
          Lucian Carp
        </a>{' '}
        © {new Date().getFullYear()}
      </Center>
    </Container>
  )
}

const Center = styled.div`
  font-size: ${fontSizes.small};
`

const Container = styled.footer`
  min-height: 6rem;
  /* max-width: 600px; */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export default Footer

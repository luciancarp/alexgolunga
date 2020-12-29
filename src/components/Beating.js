import React, { useRef } from 'react'
import styled from 'styled-components'

import { Opacity, Translate } from './Animations'
import { useHasBeenPartlyVisible } from '../hooks/useVisibility'
import { spaces } from '../style/global'

const id = 'beating'
const title = 'beating.'
const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur, leo vel porta dapibus, lorem tortor placerat nulla, at gravida ligula lorem auctor lorem. Nulla maximus condimentum ornare. Duis iaculis nibh nec nisi commodo, vel tincidunt mi venenatis. Cras at velit pretium, finibus augue vel, consequat mi. Sed cursus neque id aliquet hendrerit. Vivamus massa metus, pulvinar eget turpis at, dictum placerat libero. Suspendisse potenti. Cras eu tincidunt nunc. Ut quis orci nibh. Nam el'

const Beating = () => {
  const halfPage = useRef()
  const hasScrolled = useHasBeenPartlyVisible(halfPage, 0.1)
  return (
    <Container id={id} ref={halfPage}>
      {hasScrolled ? (
        <Opacity>
          <Translate>
            <Title>{title}</Title>
            <p>{content}</p>
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

export default Beating

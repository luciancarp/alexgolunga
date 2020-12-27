import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { spaces } from '../style/global'

const id = 'maxmsp'
const title = 'MaxMSP'
const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur, leo vel porta dapibus, lorem tortor placerat nulla, at gravida ligula lorem auctor lorem. Nulla maximus condimentum ornare. Duis iaculis nibh nec nisi commodo, vel tincidunt mi venenatis. Cras at velit pretium, finibus augue vel, consequat mi. Sed cursus neque id aliquet hendrerit. Vivamus massa metus, pulvinar eget turpis at, dictum placerat libero. Suspendisse potenti. Cras eu tincidunt nunc. Ut quis orci nibh. Nam el'

const Maxmsp = () => {
  const data = graphql`
    query MyQuery {
      file(relativePath: { eq: "images/AG_Tremolo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 600, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
  return (
    <Container id={id}>
      <Title>{title}</Title>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt='A corgi smiling happily'
      />
      <p>{content}</p>
    </Container>
  )
}

const Title = styled.h1`
  margin-bottom: ${spaces.regular};
`

const Container = styled.div`
  margin-bottom: ${spaces.wide};
`

export default Maxmsp

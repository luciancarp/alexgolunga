import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { spaces } from '../style/global'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAbout {
        edges {
          node {
            title
            description
          }
        }
      }
    }
  `)

  const { title, description } = data.allContentfulAbout.edges[0].node

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

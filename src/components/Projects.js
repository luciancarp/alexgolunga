import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Project from './Project'

import { spaces } from '../style/global'

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            title
            body {
              raw
            }
          }
        }
      }
    }
  `)

  const projectList = data.allContentfulProject.edges.map((edge) => (
    <ProjectContainer>
      <Project title={edge.node.title} body={edge.node.body} />
    </ProjectContainer>
  ))

  return <Container>{projectList}</Container>
}

const Container = styled.div``
const ProjectContainer = styled.div`
  margin-top: ${spaces.wide};
  margin-bottom: ${spaces.wide};
`

export default Projects

import React from 'react'
import styled from 'styled-components'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import { spaces } from '../style/global'

const Bold = ({ children }) => <span className='bold'>{children}</span>
const Text = ({ children }) => <p className='align-center'>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}

const Project = ({ title, body }) => {
  return (
    <Container id={title}>
      <Title>{title}</Title>
      <p> {renderRichText(body, options)}</p>
    </Container>
  )
}

const Title = styled.h1`
  margin-bottom: ${spaces.regular};
`

const Container = styled.div``

export default Project

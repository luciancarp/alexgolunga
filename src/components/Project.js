import React from 'react'
import styled from 'styled-components'

import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

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
    <Container>
      <h3>{title}</h3>
      <p> {renderRichText(body, options)}</p>
    </Container>
  )
}

const Container = styled.div``

export default Project

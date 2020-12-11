import * as React from 'react'

import Layout from '../components/Layout'
import Projects from '../components/Projects'
import About from '../components/About'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <About />
      <Projects />
    </Layout>
  )
}

export default IndexPage

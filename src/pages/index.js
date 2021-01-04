import * as React from 'react'

import Layout from '../components/Layout'
import About from '../components/About'

import Reel from '../components/Reel'
import Wwise from '../components/Wwise'
import Maxmsp from '../components/Maxmsp'
import Haptic from '../components/Haptic'
import Recording from '../components/Recording'
import Beating from '../components/Beating'

import SEO from '../components/SEO'

const IndexPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <About />
        <Reel />
        <Wwise />
        <Maxmsp />
        <Haptic />
        <Recording />
        <Beating />
      </Layout>
    </>
  )
}

export default IndexPage

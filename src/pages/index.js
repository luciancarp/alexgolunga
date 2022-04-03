import * as React from 'react'

import Layout from '../components/Layout'

import Reel from '../components/Reel'
import Wwise from '../components/Wwise'
import Maxmsp from '../components/Maxmsp'
import Haptic from '../components/Haptic'
import Recording from '../components/Recording'
import Beating from '../components/Beating'
import WorkInProgress from '../components/WorkInProgress'

import Seo from '../components/SEO'

const isWorkInProgress = true

const IndexPage = () => {
  return (
    <>
      <Seo />
      <Layout isWorkInProgress>
        {isWorkInProgress ? (
          <WorkInProgress />
        ) : (
          <>
            <Reel />
            <Wwise />
            <Maxmsp />
            <Haptic />
            <Recording />
            <Beating />
          </>
        )}
      </Layout>
    </>
  )
}

export default IndexPage

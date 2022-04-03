import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import { Opacity, Translate } from './Animations'
import useIsClient from '../hooks/useIsClient'
import { spaces, screenSizes } from '../style/global'

// import ReelMp4 from '../assets/videos/reel.mp4'
// import ReelPoster from '../reel-preview.jpg'

const id = 'reel'
const title = 'Work in progress.\nUpdate coming soon.'

const WorkInProgress = () => {
  const isMobileOrTablet = useMediaQuery({
    query: `(max-width: ${screenSizes.laptop})`,
  })

  const [isRendered, setIsRendered] = useState(false)

  useEffect(() => {
    // setTimeout(function () {
    //   setIsRendered(true)
    // }, 500)
    setIsRendered(true)
  }, [])

  const { isClient, key } = useIsClient()

  if (!isClient) return <Placeholder />

  return (
    <>
      {!isMobileOrTablet && <Spacer />}

      <Container id={id} isMobileOrTablet={isMobileOrTablet} key={key}>
        {isRendered ? (
          <Translate>
            <Opacity>
              <VideoContaier>
                <Title>Work in progress.</Title>
                <Title>Update coming soon.</Title>
              </VideoContaier>
            </Opacity>
          </Translate>
        ) : (
          <Placeholder />
        )}
      </Container>
    </>
  )
}

const Placeholder = styled.div`
  height: 75vh;
`

const ReelContainer = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  /* padding-top: 56.25%; // 16/9 ratio */
  padding-top: 51%;
  @media (max-width: ${screenSizes.laptop}) {
    padding-top: 56.25%;
  }

  width: 90%;
  @media (max-width: ${screenSizes.laptop}) {
    width: 100%;
  }

  margin: auto;
`

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  border-style: solid;
  border-color: ${(props) => props.theme.text};
  border-width: 2px;

  padding: 0;
`

// const StyledVideo = styled.video`
//   display: block;
//   width: ${(props) => (props.isMobileOrTablet ? '100%' : '90%')};

//   border-style: solid;
//   border-color: ${(props) => props.theme.text};
//   border-width: 2px;

//   margin: auto;
// `

const Title = styled.h1`
  margin-bottom: ${spaces.wide};
  text-align: center;
`

const VideoContaier = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`

const Container = styled.div`
  height: ${(props) => (props.isMobileOrTablet ? '100%' : '80vh')};
  margin-bottom: ${(props) =>
    props.isMobileOrTablet ? `${spaces.spacer}` : `${spaces.spacer}`};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Spacer = styled.div`
  height: 20vh;
`

export default WorkInProgress

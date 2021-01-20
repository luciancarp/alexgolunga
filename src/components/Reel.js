import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import { Opacity, Translate } from './Animations'
import useIsClient from '../hooks/useIsClient'
import { spaces, screenSizes } from '../style/global'

import ReelMp4 from '../assets/videos/reel.mp4'
import ReelPoster from '../reel-preview.jpg'

const id = 'reel'
const title = 'Game Audio Reel'

const Reel = () => {
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
                <Title>{title}</Title>
                {/* <StyledIframe
              title='Game Audio Reel'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              frameBorder='0'
              loading='lazy'
              webkitallowfullscreen='true'
              mozallowfullscreen='true'
              allowFullScreen
              // width="600"
              // height="337"
              isMobileOrTablet={isMobileOrTablet}
              src='https://www.youtube.com/embed/I2N-Hweo3vE'
            /> */}

                <StyledVideo
                  controls
                  preload='none'
                  poster={ReelPoster}
                  isMobileOrTablet={isMobileOrTablet}
                >
                  <source src={ReelMp4} type='video/mp4' />
                  <track />
                </StyledVideo>
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

// const StyledIframe = styled.iframe`
//   display: block;
//   width: 100%;
//   height: ${(props) => (props.isMobileOrTablet ? 'calc(100vw * 0.5)' : '60vh')};

//   border-style: solid;
//   border-color: ${(props) => props.theme.text};
//   border-width: 2px;
// `

const StyledVideo = styled.video`
  display: block;
  /* width: 90%; */
  width: ${(props) => (props.isMobileOrTablet ? '100%' : '90%')};
  /* height: ${(props) =>
    props.isMobileOrTablet ? 'calc(100vw * 0.5)' : '60vh'}; */

  border-style: solid;
  border-color: ${(props) => props.theme.text};
  border-width: 2px;

  margin: auto;
`

const Title = styled.h1`
  margin-bottom: ${spaces.wide};
  text-align: left;
`

const VideoContaier = styled.div``

const Container = styled.div`
  height: ${(props) => (props.isMobileOrTablet ? '100%' : '80vh')};
  margin-bottom: ${(props) =>
    props.isMobileOrTablet ? `${spaces.spacer}` : `${spaces.wide}`};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Spacer = styled.div`
  height: 20vh;
`

export default Reel

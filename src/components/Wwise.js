import React, { useRef } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import { Opacity } from './Animations'
import { useHasBeenPartlyVisible } from '../hooks/useVisibility'
import { spaces, screenSizes } from '../style/global'

import WwiseMp4 from '../assets/videos/Wwise.mp4'
import WwisePoster from '../Wwise-preview.jpg'

const id = 'wwise'
const title = 'Wwise Unity Integration'

const Wwise = () => {
  const halfPage = useRef()
  const hasScrolled = useHasBeenPartlyVisible(halfPage, 0.1)

  const isMobileOrTablet = useMediaQuery({
    query: `(max-width: ${screenSizes.laptop})`,
  })

  return (
    <Container id={id} ref={halfPage}>
      {hasScrolled ? (
        <Opacity>
          <Title>{title}</Title>
          <GridContainer>
            <GridItem col={'1'} row={1}>
              <p>
                Burgundy is a demo I created to demonstrate my proficiency with
                some Wwise and Unity integration features.
              </p>
              <p>
                The sound design is original, and most of the systems created
                using Wwise are described in the walkthrough below. All of the
                scripts shown are written by me as well.
              </p>
            </GridItem>
            <GridItem col={'2'} row={1}>
              {/* <StyledIframe
                  title='Game Audio Reel'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  frameBorder='0'
                  loading='lazy'
                  webkitallowfullscreen='true'
                  mozallowfullscreen='true'
                  allowFullScreen
                  src='https://www.youtube.com/embed/K7sFteN4OB0'
                  isMobileOrTablet={isMobileOrTablet}
                /> */}
              <StyledVideo
                controls
                preload='none'
                poster={WwisePoster}
                isMobileOrTablet={isMobileOrTablet}
              >
                <source src={WwiseMp4} type='video/mp4' />
                <track />
              </StyledVideo>
            </GridItem>
          </GridContainer>
        </Opacity>
      ) : (
        <Placeholder />
      )}
    </Container>
  )
}

const GridItem = styled.div`
  grid-column: ${(props) => (props.col ? props.col : '1 / 2')};
  grid-row: ${(props) => (props.row ? `${props.row}` : '1')};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const GridContainer = styled.div`
  margin-top: ${spaces.wide};

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: ${spaces.wide};
  row-gap: ${spaces.wide};
`

const Placeholder = styled.div`
  height: 100vh;
`

const Title = styled.h1`
  margin-bottom: ${spaces.wide};
`

const Container = styled.div`
  margin-bottom: ${spaces.spacer};
`

const StyledVideo = styled.video`
  display: block;
  width: 100%;

  border-style: solid;
  border-color: ${(props) => props.theme.text};
  border-width: 2px;

  margin: auto;
`

// const StyledIframe = styled.iframe`
//   display: block;
//   width: 100%;
//   /* height: ${(props) =>
//     props.isMobileOrTablet ? 'calc(100vw * 0.5)' : '60vh'}; */
//   height: 200px;
//   border-style: solid;
//   border-color: ${(props) => props.theme.text};
//   border-width: 2px;

//   /* margin-top: ${spaces.wide}; */
// `

export default Wwise

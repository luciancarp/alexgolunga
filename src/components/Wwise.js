import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import { Opacity } from './Animations'
import useIsClient from '../hooks/useIsClient'
import { spaces, screenSizes } from '../style/global'

import WwiseMp4 from '../assets/videos/Wwise.mp4'
import WwisePoster from '../Wwise-preview.jpg'

const id = 'wwise'
const title = 'Wwise Unity Integration'

const content = (
  <>
    <p>
      Burgundy is a demo I created to demonstrate my proficiency with some Wwise
      and Unity integration features.
    </p>
    <p>
      The sound design is original, and most of the systems created using Wwise
      are described in the following walkthrough. All of the scripts shown are
      written by me as well.
    </p>
  </>
)

const StyledVideo = styled.video`
  display: block;
  width: 100%;

  border-style: solid;
  border-color: ${(props) => props.theme.text};
  border-width: 2px;

  margin: auto;
`
const WwiseVideo = ({ isMobileOrTablet }) => (
  <>
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
  </>
)

const Wwise = () => {
  const isMobileOrTablet = useMediaQuery({
    query: `(max-width: ${screenSizes.laptop})`,
  })

  const { isClient, key } = useIsClient()

  if (!isClient) return <Placeholder />

  return (
    <Container id={id} key={key}>
      <Opacity>
        <Title>{title}</Title>
        <GridContainer>
          {isMobileOrTablet ? (
            <>
              <GridItem col={'1 / span 2'} row={1}>
                {content}
              </GridItem>
              <GridItem col={'1 / span 2'} row={2}>
                <WwiseVideo isMobileOrTablet={isMobileOrTablet} />
              </GridItem>
            </>
          ) : (
            <>
              <GridItem col={'1'} row={1}>
                {content}
              </GridItem>
              <GridItem col={'2'} row={1}>
                <WwiseVideo isMobileOrTablet={isMobileOrTablet} />
              </GridItem>
            </>
          )}{' '}
        </GridContainer>
      </Opacity>
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

const Title = styled.h1`
  margin-bottom: ${spaces.wide};
`

const Container = styled.div`
  margin-bottom: ${spaces.spacer};
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

const Placeholder = styled.div`
  height: 75vh;
`

export default Wwise

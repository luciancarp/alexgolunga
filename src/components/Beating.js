import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useMediaQuery } from 'react-responsive'

import { Opacity } from './Animations'
import useIsClient from '../hooks/useIsClient'
import { spaces, screenSizes } from '../style/global'

import ImmenvdemovidMp4 from '../assets/videos/Immenvdemovid.mp4'
import ImmenvdemovidWebm from '../assets/videos/Immenvdemovid.webm'
import ImmenvdemovidPoster from '../Immenvdemovid-preview.jpg'

const id = 'beating'
const title = 'beating.'

export const Image = graphql`
  fragment Image on File {
    childImageSharp {
      fluid(maxWidth: 600, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const RenderImage = graphql`
  fragment RenderImage on File {
    childImageSharp {
      fluid(maxWidth: 600, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

const Beating = () => {
  const query = useStaticQuery(graphql`
    query {
      render: file(relativePath: { eq: "render.png" }) {
        ...RenderImage
      }
      lissajous1: file(relativePath: { eq: "Lissajous1.png" }) {
        ...Image
      }
      lissajous2: file(relativePath: { eq: "Lissajous2.png" }) {
        ...Image
      }
      lissajous3: file(relativePath: { eq: "Lissajous3.png" }) {
        ...Image
      }
      lissajous4: file(relativePath: { eq: "Lissajous4.png" }) {
        ...Image
      }
    }
  `)

  const content1 = (
    <>
      <p>
        <i>beating.</i> is a sound installation.
      </p>
      <p>
        An exploration of sine waves, the fundamental building blocks of sound.
      </p>
      <p>
        A showcase of the beating effect and the physicality of sound through an
        immersive composition.
      </p>
      <p>
        Accompanied by a visual analogue in the form of audio-reactive 3D
        Lissajous curves.
      </p>
    </>
  )

  const content2 = (
    <>
      <p>
        The listener will create their own perception of the piece by moving
        around the space and discovering pockets of rhythm, dissonance, and pure
        sine tone.
      </p>
      <p>
        The decision to remain static and explore the temporal dimension of the
        composition is encouraged as well.
      </p>
      <p>
        The relationship between the individual sound objects is expressed
        through the visuals. The audio signals are used as modulating inputs to
        produce a unified visual output.
      </p>
    </>
  )

  const Lissajous1 = () => (
    <ImageContainer>
      <StyledImg fluid={query.lissajous1.childImageSharp.fluid} />
    </ImageContainer>
  )

  const Lissajous2 = () => (
    <ImageContainer>
      <StyledImg fluid={query.lissajous2.childImageSharp.fluid} />
    </ImageContainer>
  )

  const Lissajous3 = () => (
    <ImageContainer>
      <StyledImg fluid={query.lissajous3.childImageSharp.fluid} />
    </ImageContainer>
  )

  const Lissajous4 = () => (
    <ImageContainer>
      <StyledImg fluid={query.lissajous4.childImageSharp.fluid} />
    </ImageContainer>
  )

  const QuadraphonicImg = () => (
    <ImageContainer>
      <h3 style={{ textAlign: 'center' }}>
        The installation would ideally be arranged in an empty cuboid room and
        use an Ambisonic setup.
      </h3>
      <StyledImgCaption
        imgStyle={{ objectFit: 'contain' }}
        fluid={query.render.childImageSharp.fluid}
      />
      <Caption>Quadraphonic system in a 7m x 7m x 5m room.</Caption>
    </ImageContainer>
  )

  const DemoVideo = ({ customWidth = '50%' }) => (
    <VideoContainer customWidth={customWidth}>
      <h3 style={{ textAlign: 'center' }}>
        Audiovisual Demo (Headphones Recommended)
      </h3>
      <StyledVideo controls preload='none' poster={ImmenvdemovidPoster}>
        <source src={ImmenvdemovidWebm} type='video/webm' />
        <source src={ImmenvdemovidMp4} type='video/mp4' />
        <track />
      </StyledVideo>
      <Caption>
        Apologies for the dropped frames towards the end, this is due to
        hardware limitations.
      </Caption>
    </VideoContainer>
  )

  const Link = () => (
    <p style={{ textAlign: 'center' }}>
      More info available{' '}
      <StyledLink
        target='_blank'
        rel='noopener noreferrer'
        href={
          'https://drive.google.com/file/d/1taV9MUO9aaK7DFGrPHO48WjaAL5Yn7kg/view?usp=sharing'
        }
      >
        here
      </StyledLink>
    </p>
  )

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
              <GridItem col={'1'} row={'1'}>
                <Lissajous2 />
              </GridItem>

              <GridItem col={'2 / span 3'} row={'1'}>
                <Lissajous4 />
              </GridItem>

              <GridItem col={'1 / span 3'} row={'2'}>
                {content1}
              </GridItem>

              <GridItem col={'1'} row={'3'}>
                <Lissajous1 />
              </GridItem>

              <GridItem col={'2 / span 3'} row={'3'}>
                <Lissajous3 />
              </GridItem>

              <GridItem col={'1 / span 3'} row={'4'}>
                {content2}
              </GridItem>

              <GridItem col={'1 / span 3'} row={'5'}>
                <QuadraphonicImg />
              </GridItem>

              <GridItem col={'1 / span 3'} row={'6'}>
                <DemoVideo customWidth={'70%'} />
              </GridItem>

              <GridItem col={'1 /span 3'} row={'7'}>
                <Link />
              </GridItem>
            </>
          ) : (
            <>
              <GridItem col={'1'} row={'1'}>
                {content1}
              </GridItem>
              <GridItem col={'1'} row={'2'}>
                {content2}
              </GridItem>

              <GridItem col={'2'} row={'1'}>
                <Lissajous2 />
              </GridItem>

              <GridItem col={'2'} row={'2'}>
                <Lissajous4 />
              </GridItem>

              <GridItem col={'3'} row={'1'}>
                <Lissajous1 />
              </GridItem>

              <GridItem col={'3'} row={'2'}>
                <Lissajous3 />
              </GridItem>

              <GridItem col={'1 / span 3'} row={'4'}>
                <InnerGridConteiner>
                  <GridItem col={'2'} row={'4'}>
                    <QuadraphonicImg />
                  </GridItem>

                  <GridItem col={'1'} row={'4'}>
                    <DemoVideo customWidth={'100%'} />
                  </GridItem>
                </InnerGridConteiner>
              </GridItem>

              <GridItem col={'1 /span 3'} row={'5'}>
                <Link />
              </GridItem>
            </>
          )}
        </GridContainer>
      </Opacity>
    </Container>
  )
}

const Placeholder = styled.div`
  height: 75vh;
`

const StyledLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
`

const Caption = styled.figcaption`
  opacity: 0.75;
  text-align: center;
`

const VideoContainer = styled.div`
  max-width: ${(props) =>
    props.customWidth ? `${props.customWidth}` : '100%'};
  margin-left: auto;
  margin-right: auto;
`

const ImageContainer = styled.div`
  max-width: ${(props) =>
    props.customWidth ? `${props.customWidth}` : '100%'};
  margin-left: auto;
  margin-right: auto;
`

const StyledImg = styled(Img)``

const StyledImgCaption = styled(Img)`
  margin-bottom: ${spaces.narrow};
  border-style: solid;
  border-color: ${(props) => props.theme.text};
  border-width: 2px;

  height: 100%;
  width: 100%;
`

const StyledVideo = styled.video`
  width: 100%;

  border-style: solid;
  border-color: ${(props) => props.theme.text};
  border-width: 2px;

  margin-bottom: ${spaces.narrow};
`

const GridItem = styled.div`
  grid-column: ${(props) => (props.col ? props.col : '1 / 2')};
  grid-row: ${(props) => (props.row ? props.row : '1')};

  margin-top: auto;
  margin-bottom: auto;
`

const GridContainer = styled.div`
  margin-top: ${spaces.wide};

  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  column-gap: ${spaces.wide};
  row-gap: ${spaces.wide};
`

const InnerGridConteiner = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  column-gap: ${spaces.wide};
  row-gap: 0;
`

const Title = styled.h1`
  margin-bottom: ${spaces.wide};
`

const Container = styled.div`
  margin-bottom: ${spaces.spacer};
`

export default Beating

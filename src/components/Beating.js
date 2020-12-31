import React, { useRef } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Opacity, Translate } from './Animations'
import { useHasBeenPartlyVisible } from '../hooks/useVisibility'
import { spaces } from '../style/global'

import ImmenvdemovidMp4 from '../assets/videos/Immenvdemovid.mp4'
import ImmenvdemovidWebm from '../assets/videos/Immenvdemovid.webm'

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

const Beating = () => {
  const query = useStaticQuery(graphql`
    query {
      render: file(relativePath: { eq: "render.png" }) {
        ...Image
      }
      render1: file(relativePath: { eq: "render1.png" }) {
        ...Image
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

  const halfPage = useRef()
  const hasScrolled = useHasBeenPartlyVisible(halfPage, 0.1)
  return (
    <Container id={id} ref={halfPage}>
      {hasScrolled ? (
        <Opacity>
          <Translate>
            <Title>{title}</Title>
            <GridContainer>
              <GridItem col={'1'} row={'1'}>
                <p>
                  An exploration of sine waves, the fundamental building blocks
                  of sound.
                </p>
                <p>
                  A showcase of the beating effect and the physicality of sound
                  through an immersive composition.
                </p>
                <p>
                  Accompanied by a visual analogue in the form of audio-reactive
                  3D Lissajous curves (pictured right).
                </p>
              </GridItem>
              <GridItem col={'1'} row={'2'}>
                <p>
                  The listener will create their own perception of the piece by
                  moving around the space and discovering pockets of rhythm,
                  dissonance, and pure sine tone.
                </p>
                <p>
                  The decision to remain static and explore the temporal
                  dimension of the composition is encouraged as well.
                </p>
                <p>
                  The relationship between the individual sound objects is
                  expressed through the visuals. The audio signals are used as
                  modulating inputs to produce a unified visual output.
                </p>
              </GridItem>

              <GridItem col={'2'} row={'1'}>
                <ImageContainer>
                  <StyledImg fluid={query.lissajous2.childImageSharp.fluid} />
                </ImageContainer>
              </GridItem>

              <GridItem col={'2'} row={'2'}>
                <ImageContainer>
                  <StyledImg fluid={query.lissajous4.childImageSharp.fluid} />
                </ImageContainer>
              </GridItem>

              <GridItem col={'3'} row={'1'}>
                <ImageContainer>
                  <StyledImg fluid={query.lissajous1.childImageSharp.fluid} />
                </ImageContainer>
              </GridItem>

              <GridItem col={'3'} row={'2'}>
                <ImageContainer>
                  <StyledImg fluid={query.lissajous3.childImageSharp.fluid} />
                </ImageContainer>
              </GridItem>

              <GridItem col={'2/ span 3'} row={'4'}>
                <p>
                  Symmetry is generally used as a constraining factor, but in
                  this case it provides homogeneity for the whole space, thus
                  communicating the importance of individual perception and
                  liberating one from the idea of an optimal listening position.
                </p>
                <p>
                  This provides an adequate canvas for the visuals as well,
                  which are represented in a 1:1 aspect ratio. They would be
                  projected on the ceiling of the space.
                </p>
                <p>
                  The room would be acoustically analysed beforehand to identify
                  room modes — information that will be used for tuning the
                  experience or enhancing it by using the harmonics inherent to
                  the space.
                </p>
              </GridItem>

              <GridItem col={'1'} row={'4'}>
                <ImageContainer>
                  <h3 style={{ textAlign: 'center' }}>
                    The installation would ideally be arranged in an empty
                    cuboid room and use a Quadraphonic or Ambisonic setup.
                  </h3>
                  <StyledImgCaption
                    fluid={query.render.childImageSharp.fluid}
                  />
                  <Caption style={{ textAlign: 'center' }}>
                    Quadraphonic system in a 7m x 7m x 5m room.
                  </Caption>
                </ImageContainer>
              </GridItem>

              <GridItem col={'1'} row={'6'}>
                <p>
                  Attached you will also find an audiovisual demo emulating a
                  Quad setup using the Ambisonics format (headphone use is
                  recommended). It showcases some spatial choreography and the
                  use of the beating effect, along with a direct feed from the
                  visual engine.
                </p>
                <p>
                  The software used in the installation consists of custom
                  patches built using Max/MSP and Jitter and their respective
                  Max4Live ports.
                </p>
              </GridItem>

              <GridItem col={'2/ span 3'} row={'6'}>
                <ImageContainer>
                  <StyledImgBorder
                    fluid={query.render1.childImageSharp.fluid}
                  />
                </ImageContainer>
              </GridItem>

              <GridItem col={'1/ span 3'} row={'8'}>
                <VideoContainer customWidth={'50%'}>
                  <h3>Audiovisual Demo (Headphones Recommended)</h3>
                  <StyledVideo controls>
                    <source src={ImmenvdemovidWebm} type='video/webm' />
                    <source src={ImmenvdemovidMp4} type='video/mp4' />
                    <track />
                  </StyledVideo>
                  <Caption>
                    Apologies for the dropped frames towards the end, this is
                    due to hardware limitations.
                  </Caption>
                </VideoContainer>
              </GridItem>
            </GridContainer>
          </Translate>
        </Opacity>
      ) : (
        <Placeholder />
      )}
    </Container>
  )
}

const Caption = styled.figcaption`
  opacity: 0.75;
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
`

const StyledImgBorder = styled(Img)`
  border-style: solid;
  border-color: ${(props) => props.theme.text};
  border-width: 2px;
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
  /* grid-auto-rows: minmax(100px, auto); */
`

const Placeholder = styled.div`
  height: 100vh;
`

const Title = styled.h1`
  margin-bottom: ${spaces.wide};
`

const Container = styled.div`
  margin-bottom: ${spaces.wide};
`

export default Beating

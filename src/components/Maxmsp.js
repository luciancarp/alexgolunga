import React, { useRef } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Opacity, Translate } from './Animations'
import { spaces } from '../style/global'
import { useHasBeenPartlyVisible } from '../hooks/useVisibility'

import JitdemoMp4 from '../assets/videos/Jitdemo720.mp4'
import JitdemoWebm from '../assets/videos/Jitdemo720.webm'
import MfeditMp4 from '../assets/videos/Mfedit.mp4'
import MfeditWebm from '../assets/videos/Mfedit.webm'
import NotionparticlesconvertedMp4 from '../assets/videos/Notionparticlesconverted.mp4'
import NotionparticlesconvertedWebm from '../assets/videos/Notionparticlesconverted.webm'

const id = 'maxmsp'
const title = 'MaxMSP'

export const Image = graphql`
  fragment Image on File {
    childImageSharp {
      fluid(maxWidth: 600, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

const Maxmsp = () => {
  const query = useStaticQuery(graphql`
    query {
      tremolo: file(relativePath: { eq: "AG_Tremolo.png" }) {
        ...Image
      }
      envGenSynth: file(relativePath: { eq: "AG_EnvGenSynth.png" }) {
        ...Image
      }
      FFTFX: file(relativePath: { eq: "AG_FFTFX.png" }) {
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
                  I program custom audio devices such as flexible samplers,
                  basic reverbs, audio spatialisation devices (using binaural
                  and ambisonic externals), synths and utilities.
                </p>

                <p>
                  These allow me to shape my workflows efficiently and integrate
                  features that might not be present in other plugins.
                </p>
              </GridItem>
              <GridItem col={'2'} row={'1'}>
                <ImageContainer>
                  <StyledImg
                    fluid={query.tremolo.childImageSharp.fluid}
                    alt='Tremolo'
                  />

                  <Caption>
                    Tremolo with switchable waveforms and smoothing
                  </Caption>
                </ImageContainer>
              </GridItem>
              <GridItem col={'1'} row={'2'}>
                <ImageContainer>
                  <StyledImg
                    fluid={query.envGenSynth.childImageSharp.fluid}
                    alt='EnvGenSynth'
                  />
                  <Caption>
                    Single-oscillator synth with multiple waveform/noise options
                    and multi-stage envelope generator; also saves a bank of
                    user-generated presets
                  </Caption>
                </ImageContainer>
              </GridItem>
              <GridItem col={'2'} row={'2'}>
                <ImageContainer>
                  <StyledImg
                    fluid={query.FFTFX.childImageSharp.fluid}
                    alt='FFTFX'
                  />
                  <Caption>
                    Effects unit that comprises multiple stages; essentially,
                    signal is fed into a running buffer (written in gen~), which
                    in turn feeds a buffer with a blend factor, creating
                    wavetables for a modulated oscillator. This latest signal is
                    then convolved (amplitude-only) with the original signal,
                    and the result is passed to the filtering/overdrive stage.
                  </Caption>
                </ImageContainer>
              </GridItem>

              <GridItem col={'1 / span 2'} row={'3'}>
                <VideoContainer>
                  <StyledVideo controls>
                    <source src={MfeditWebm} type='video/webm' />
                    <source src={MfeditMp4} type='video/mp4' />
                    <track />
                  </StyledVideo>
                  <Caption>
                    Millefeuille: an 8-voice sound layering tool with per-voice
                    multi-stage amplitude envelopes and non-linear playback
                    functions
                  </Caption>
                </VideoContainer>
              </GridItem>
              <GridItem col={'1 / span 2'} row={'4'}>
                <InnerGridConteiner>
                  <GridItem col={'1 / span 2'} row={'1'}>
                    <h2
                      style={{
                        textAlign: 'center',
                        marginBottom: spaces.wide,
                      }}
                    >
                      I also create minimalist visuals using Jitter:
                    </h2>
                  </GridItem>

                  <GridItem col={'1'} row={'2'}>
                    <VideoContainer>
                      <StyledVideo controls>
                        <source src={JitdemoWebm} type='video/webm' />
                        <source src={JitdemoMp4} type='video/mp4' />
                        <track />
                      </StyledVideo>
                      <Caption>
                        Oscillator waveforms are switched stochastically using a
                        table of weighted probabilities and the audio morph is
                        smoothed with gen~
                      </Caption>
                    </VideoContainer>
                  </GridItem>
                  <GridItem col={'2'} row={'2'}>
                    <VideoContainer>
                      <StyledVideo controls>
                        <source
                          src={NotionparticlesconvertedWebm}
                          type='video/webm'
                        />
                        <source
                          src={NotionparticlesconvertedMp4}
                          type='video/mp4'
                        />
                        <track />
                      </StyledVideo>
                      <Caption>
                        Particle system written with jit.gen and some openGL
                        Jitter modules. The background is actually displaying
                        the lifetimes of the particles.
                      </Caption>
                    </VideoContainer>
                  </GridItem>
                </InnerGridConteiner>
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

const StyledImg = styled(Img)`
  margin-bottom: ${spaces.narrow};
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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const GridContainer = styled.div`
  margin-top: ${spaces.wide};

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-columns: auto auto; */
  /* grid-template-rows: 80px auto 80px; */
  column-gap: ${spaces.wide};
  row-gap: 3rem;
  /* grid-auto-rows: minmax(100px, auto); */
`

const InnerGridConteiner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: ${spaces.wide};
  row-gap: 0;
`

const Placeholder = styled.div`
  height: 100vh;
`

const Title = styled.h1`
  margin-bottom: ${spaces.wide};
`

const Caption = styled.figcaption`
  opacity: 0.75;
`

const Container = styled.div`
  margin-bottom: ${spaces.spacer};
`

export default Maxmsp

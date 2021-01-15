import React, { useRef } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Opacity } from './Animations'
import { useHasBeenPartlyVisible } from '../hooks/useVisibility'
import { spaces } from '../style/global'

const id = 'haptic'
const title = 'Haptic Design'

export const Image = graphql`
  fragment Image on File {
    childImageSharp {
      fluid(maxWidth: 600, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

const Haptic = () => {
  const query = useStaticQuery(graphql`
    query {
      weaponLaunchImpact: file(
        relativePath: { eq: "Weapon_Launch_Impact.png" }
      ) {
        ...Image
      }
      particlesHaptic: file(relativePath: { eq: "ParticlesHaptic.png" }) {
        ...Image
      }
      superhotReworkHaptic: file(
        relativePath: { eq: "SuperhotReworkHaptic.png" }
      ) {
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
          <Title>{title}</Title>
          <p>
            If you have an iPhone with iOS 13.0 or later, you can download the
            Lofelt Studio app and scan these QR codes to experience the haptics
            I designed for a few sounds. Make sure your phone is not in Silent
            Mode in order to hear the audio.
          </p>
          <GridContainer>
            <GridItem col={'1'} row={1}>
              <StyledImg
                fluid={query.superhotReworkHaptic.childImageSharp.fluid}
              />
              <p>Section from SUPERHOT: MCD trailer Re-Sound Design</p>
            </GridItem>
            <GridItem col={'2'} row={1}>
              <StyledImg fluid={query.particlesHaptic.childImageSharp.fluid} />
              <p>Jitter Particles Animation</p>
            </GridItem>
            <GridItem col={'3'} row={1}>
              <StyledImg
                fluid={query.weaponLaunchImpact.childImageSharp.fluid}
              />
              <p>Weapon Launch / Impact</p>
            </GridItem>
          </GridContainer>
        </Opacity>
      ) : (
        <Placeholder />
      )}
    </Container>
  )
}

const StyledImg = styled(Img)`
  margin-bottom: ${spaces.narrow};
  border-style: solid;
  border-color: ${(props) => props.theme.text};
  border-width: 2px;
`

const GridItem = styled.div`
  grid-column: ${(props) => (props.col ? props.col : '1 / 2')};
  grid-row: ${(props) => (props.row ? `${props.row}` : '1')};
`

const GridContainer = styled.div`
  margin-top: ${spaces.wide};

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${spaces.wide};
  row-gap: ${spaces.wide};
  grid-auto-rows: minmax(100px, auto);
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

export default Haptic

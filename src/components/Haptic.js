// import React from 'react'
// import styled from 'styled-components'
// import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'

// import { Opacity } from './Animations'
// import { spaces, screenSizes } from '../style/global'

// const id = 'haptic'
// const title = 'Haptic Design'

// export const Image = graphql`
//   fragment Image on File {
//     childImageSharp {
//       fluid(maxWidth: 600, quality: 90) {
//         ...GatsbyImageSharpFluid_withWebp
//       }
//     }
//   }
// `

// const Haptic = () => {
//   const query = useStaticQuery(graphql`
//     query {
//       weaponLaunchImpact: file(
//         relativePath: { eq: "Weapon_Launch_Impact.png" }
//       ) {
//         ...Image
//       }
//       particlesHaptic: file(relativePath: { eq: "ParticlesHaptic.png" }) {
//         ...Image
//       }
//       superhotReworkHaptic: file(
//         relativePath: { eq: "SuperhotReworkHaptic.png" }
//       ) {
//         ...Image
//       }
//     }
//   `)

//   return (
//     <Container id={id}>
//       <Opacity>
//         <Title>{title}</Title>
//         <p>
//           If you have an iPhone with iOS 13.0 or later, you can download the
//           Lofelt Studio app and scan these QR codes to experience the haptics I
//           designed for a few sounds. Make sure your phone is not in Silent Mode
//           in order to hear the audio.
//         </p>
//         <GridContainer>
//           <GridItem col={'1'} row={1}>
//             <StyledImg
//               fluid={query.superhotReworkHaptic.childImageSharp.fluid}
//             />
//             <Caption>
//               Section from SUPERHOT: MCD trailer Re-Sound Design
//             </Caption>
//           </GridItem>
//           <GridItem col={'2'} row={1}>
//             <StyledImg fluid={query.particlesHaptic.childImageSharp.fluid} />
//             <Caption>Jitter Particles Animation</Caption>
//           </GridItem>
//           <GridItem col={'3'} row={1}>
//             <StyledImg fluid={query.weaponLaunchImpact.childImageSharp.fluid} />
//             <Caption>Weapon Launch / Impact</Caption>
//           </GridItem>
//         </GridContainer>
//       </Opacity>
//     </Container>
//   )
// }

// const Caption = styled.figcaption`
//   opacity: 0.75;
//   text-align: center;
// `

// const StyledImg = styled(Img)`
//   margin-bottom: ${spaces.narrow};
//   border-style: solid;
//   border-color: ${(props) => props.theme.text};
//   border-width: 2px;
// `

// const GridItem = styled.div`
//   grid-column: ${(props) => (props.col ? props.col : '1 / 2')};
//   grid-row: ${(props) => (props.row ? `${props.row}` : '1')};
// `

// const GridContainer = styled.div`
//   @media (min-width: ${screenSizes.laptop}) {
//     width: 70%;
//     margin: auto;
//   }

//   margin-top: ${spaces.wide};

//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   column-gap: ${spaces.wide};
//   row-gap: ${spaces.wide};
//   grid-auto-rows: minmax(100px, auto);
// `

// const Title = styled.h1`
//   margin-bottom: ${spaces.wide};
// `

// const Container = styled.div`
//   margin-bottom: ${spaces.spacer};
// `

// export default Haptic

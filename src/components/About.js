import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import LinkedinSvg from '../assets/svg/linkedin.svg'
import TwitterSvg from '../assets/svg/twitter.svg'

import {
  TranslateDynamic,
  OpacityDynamic,
  ScaleDynamic,
  Translate,
  Opacity,
} from './Animations'
import { spaces, screenSizes } from '../style/global'
import useIsClient from '../hooks/useIsClient'

const title = 'Alex Golunga'
const description =
  'Hi, my name is Alex.\nSound designer and audio engineer.\nMaxMSP programmer.\nPassionate about game audio implementation and DSP.'

const About = () => {
  const [scrolled, setScrolled] = useState(false)
  const [showDescription, setShowDescription] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setScrolled(currentScrollY > 15)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  useEffect(() => {
    if (scrolled) {
      setTimeout(function () {
        setShowDescription(false)
      }, 200)
    } else {
      setShowDescription(true)
    }
  }, [scrolled])

  const isMobileOrTablet = useMediaQuery({
    query: `(max-width: ${screenSizes.laptop})`,
  })

  const animate = scrolled

  const MobileTabletAbout = () => (
    <MContainer>
      <Translate>
        <Opacity>
          <MInfo>
            <Title>{title}</Title>
            <Contact>
              <Email>agolunga@gmail.com</Email>

              <Styleda
                target='_blank'
                rel='noopener noreferrer'
                href={'http://twitter.com/'}
              >
                <Twitter />
              </Styleda>
              <Styleda
                target='_blank'
                rel='noopener noreferrer'
                href={'http://linkedin.com/'}
              >
                <Linkedin />
              </Styleda>
            </Contact>
          </MInfo>
          <MDescription>
            {description.split('\n').map((item, key) => (
              <DescriptionLine key={key}>
                {item}
                <br />
              </DescriptionLine>
            ))}
            <CV>
              You can find my CV <CVLink>here</CVLink>.
            </CV>
          </MDescription>
        </Opacity>
      </Translate>
    </MContainer>
  )

  const { isClient, key } = useIsClient()

  if (!isClient) return <Placeholder />

  return (
    <>
      {!isMobileOrTablet && (
        <Container state={animate} key={key}>
          <Translate>
            <Opacity>
              <Header>
                <TranslateDynamic
                  state={animate}
                  endX={25}
                  endY={0}
                  duration={'transform 0.2s ease-out'}
                >
                  <ScaleDynamic
                    state={animate}
                    end={0.75}
                    duration={'transform 0.2s ease-out'}
                  >
                    <Info state={animate}>
                      <Title>{title}</Title>
                      <Contact>
                        <Email>agolunga@gmail.com</Email>

                        <Styleda
                          target='_blank'
                          rel='noopener noreferrer'
                          href={'http://twitter.com/'}
                        >
                          <Twitter />
                        </Styleda>
                        <Styleda
                          target='_blank'
                          rel='noopener noreferrer'
                          href={'http://linkedin.com/'}
                        >
                          <Linkedin />
                        </Styleda>
                      </Contact>
                    </Info>
                  </ScaleDynamic>
                </TranslateDynamic>

                {showDescription && (
                  <OpacityDynamic state={animate}>
                    <Description>
                      {description.split('\n').map((item, key) => (
                        <DescriptionLine key={key}>
                          {item}
                          <br />
                        </DescriptionLine>
                      ))}
                      <CV>
                        You can find my CV <CVLink>here</CVLink>.
                      </CV>
                    </Description>
                  </OpacityDynamic>
                )}
              </Header>
            </Opacity>
          </Translate>
        </Container>
      )}
      {isMobileOrTablet && <MobileTabletAbout key={key} />}
    </>
  )
}

const Placeholder = styled.div`
  height: 30vh;
`

const Container = styled('div').attrs(
  ({
    state,
    duration = 'height 0.2s, padding-top 0.2s, position 0.2s',
    start = '20vh',
    end = '6rem',
  }) => ({
    style: {
      transition: duration,
      height: `${!state ? start : end}`,
      paddingTop: `${!state ? '5vh' : '0.50rem'}`,
    },
  })
)`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;

  margin-bottom: 5vh;
  /* padding-top: ${spaces.narrow}; */
  padding-bottom: ${spaces.narrow};
  /* height: 20vh; */
  margin-left: -${spaces.wide};
  margin-right: -${spaces.wide};
  padding-left: ${spaces.wide};
  padding-right: ${spaces.wide};

  background-color: ${(props) => props.theme.background};

  @supports (backdrop-filter: none) {
    background-color: ${(props) => props.theme.backgroundTransp};
    backdrop-filter: blur(5px);
  }

  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; */
`

const Header = styled.div`
  position: relative;
`

const Info = styled.div`
  padding-right: ${spaces.wide};

  position: absolute;
  left: 0;
  /* top: 50%; */

  transition: transform 0.2s ease-in-out;
`
const Contact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Email = styled.h3``

const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 3rem;
`

const Description = styled.div`
  position: absolute;
  right: 0;
  top: 50%;

  /* transition: transform 0.2s ease-in-out; */

  padding-left: ${spaces.wide};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
`

const DescriptionLine = styled.p`
  margin-bottom: 0.1rem;
`

const CV = styled.p`
  margin-top: ${spaces.narrow};
`

const CVLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
`

const Styleda = styled.a`
  margin-left: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

const SvgStyle = css`
  height: 35px;
  width: 35px;

  fill: ${(props) => props.theme.text};
`

const Linkedin = styled(LinkedinSvg)`
  ${SvgStyle}
  padding: 0.25rem;
  padding-right: 0;
`

const Twitter = styled(TwitterSvg)`
  ${SvgStyle}
`

const MContainer = styled.div`
  top: 0;

  margin-bottom: ${spaces.wide};

  padding-top: ${spaces.wide};

  background-color: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const MInfo = styled.div`
  padding-right: ${spaces.wide};
  margin-bottom: ${spaces.wide};
`

const MDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export default About

import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import LinkedinSvg from '../assets/svg/linkedin.svg'
import TwitterSvg from '../assets/svg/twitter.svg'

import {
  TranslateDynamic,
  ScaleDynamic,
  OpacityDynamic,
  Translate,
  Opacity,
} from './Animations'
import { spaces, screenSizes } from '../style/global'
import ThemeContext from '../style/Theme'
import useIsClient from '../hooks/useIsClient'

const title = 'Alex Golunga'
const description =
  'Hi, my name is Alex.\nSound designer and audio engineer.\nMaxMSP programmer.\nPassionate about game audio implementation and DSP.'

const About = () => {
  const [scrolled, setScrolled] = useState(false)
  const [showSticky, setShowSticky] = useState(false)
  const [showDescription, setShowDescription] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setScrolled(currentScrollY > 15)
      setShowSticky(currentScrollY > 100)
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

  const regularSize = useMediaQuery({
    query: `(min-width: ${screenSizes.desktopS})`,
  })

  const largeSize = useMediaQuery({
    query: `(min-width: ${screenSizes.desktop})`,
  })

  const largeOffsetX = 25.5
  const regularOffsetX = 16
  const smallOffsetX = 13

  const largeOffsetY = 10
  const regularOffsetY = 5
  const smallOffsetY = 2.75

  let offsetTitleX = smallOffsetX
  let offsetHeaderY = smallOffsetY

  if (regularSize) {
    offsetTitleX = regularOffsetX
    offsetHeaderY = regularOffsetY
  }
  if (largeSize) {
    offsetTitleX = largeOffsetX
    offsetHeaderY = largeOffsetY
  }

  const animate = scrolled

  const MInfoSticky = () => (
    <MInfoStickyContainer>
      <MInfoStickyContent>
        <Title customMargin={'0.4rem'} customFontSize={'1.7rem'}>
          {title}
        </Title>
        <Contact>
          <Email>agolunga@gmail.com</Email>

          <Styleda
            target='_blank'
            rel='noopener noreferrer'
            href={'https://twitter.com/alexgolunga'}
          >
            <Twitter />
          </Styleda>
          <Styleda
            target='_blank'
            rel='noopener noreferrer'
            href={'https://www.linkedin.com/in/alexgolunga/'}
          >
            <Linkedin />
          </Styleda>
        </Contact>
      </MInfoStickyContent>
    </MInfoStickyContainer>
  )

  const MobileTabletAbout = () => (
    <MContainer>
      <MInfo>
        <Title>{title}</Title>
        <Contact>
          <Email>agolunga@gmail.com</Email>

          <Styleda
            target='_blank'
            rel='noopener noreferrer'
            href={'https://twitter.com/alexgolunga'}
          >
            <Twitter />
          </Styleda>
          <Styleda
            target='_blank'
            rel='noopener noreferrer'
            href={'https://www.linkedin.com/in/alexgolunga/'}
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
          You can find my CV{' '}
          <CVLink
            target='_blank'
            rel='noopener noreferrer'
            href={
              'https://drive.google.com/file/d/1totDAVHHHuLGrO3vw9Z72syk-2GdUE3m/view'
            }
          >
            here
          </CVLink>
          .
        </CV>
      </MDescription>
    </MContainer>
  )

  const { isClient, key } = useIsClient()

  if (!isClient) return <Placeholder />

  return (
    <>
      {!isMobileOrTablet && (
        <ThemeContext.Consumer>
          {(theme) => (
            <Container
              state={animate}
              key={key}
              background={
                theme.name === 'dark'
                  ? 'rgba(0, 0, 0, 0.5)'
                  : 'rgba(238, 238, 238, 0.5)'
              }
              shadow={
                theme.name === 'dark'
                  ? '12px -20px 20px 0px rgba(0, 0, 0, 0.8), -12px -20px 20px 0px rgba(0, 0, 0, 0.8)'
                  : '12px -20px 20px 0px rgba(238, 238, 238, 0.8), -12px -20px 20px 0px rgba(238, 238, 238, 0.8)'
              }
              startY={offsetHeaderY}
            >
              <Translate>
                <Opacity>
                  <Header>
                    <TranslateDynamic
                      state={animate}
                      endX={offsetTitleX}
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
                              href={'https://twitter.com/alexgolunga'}
                            >
                              <Twitter />
                            </Styleda>
                            <Styleda
                              target='_blank'
                              rel='noopener noreferrer'
                              href={'https://www.linkedin.com/in/alexgolunga/'}
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
                            You can find my CV{' '}
                            <CVLink
                              target='_blank'
                              rel='noopener noreferrer'
                              href={
                                'https://drive.google.com/file/d/1totDAVHHHuLGrO3vw9Z72syk-2GdUE3m/view'
                              }
                            >
                              here
                            </CVLink>
                            .
                          </CV>
                        </Description>
                      </OpacityDynamic>
                    )}
                  </Header>
                </Opacity>
              </Translate>
            </Container>
          )}
        </ThemeContext.Consumer>
      )}
      {isMobileOrTablet && (
        <>
          <Translate>
            <Opacity>
              <MobileTabletAbout key={key} />
            </Opacity>
          </Translate>
          {scrolled && (
            <OpacityDynamic state={showSticky} start={0} end={1}>
              <MInfoSticky />
            </OpacityDynamic>
          )}
        </>
      )}
    </>
  )
}

const Placeholder = styled.div`
  height: 30vh;
`

const Container = styled('div').attrs(
  ({
    state,
    duration = 'height 0.2s, padding-top 0.2s, position 0.2s, background-color 0.2s, -webkit-backdrop-filter 0.2s, backdrop-filter 0.2s, -webkit-box-shadow 0.2s, box-shadow 0.2s, -webkit-transform 0.2s ease-out, transform 0.2s ease-out',
    background = 'rgba(0, 0, 0, 0.5)',
    shadow = '0px 0px 0px 0px rgba(0, 0, 0, 0)',
    startScale = 1,
    endScale = 1,
    startX = 0,
    endX = 0,
    startY = 2,
    endY = 0,
  }) => ({
    style: {
      WebkitTransition: duration,
      transition: duration,
      backgroundColor: `${!state ? 'rgba(0, 0, 0, 0)' : background}`,
      WebkitBackdropFilter: `${!state ? 'blur(0)' : `blur(10px)`}`,
      backdropFilter: `${!state ? 'blur(0)' : `blur(10px)`}`,
      WebkitBoxShadow: `${
        !state ? '0px 0px 0px 0px rgba(0, 0, 0, 0)' : shadow
      }`,
      boxShadow: `${!state ? '0px 0px 0px 0px rgba(0, 0, 0, 0)' : shadow}`,
      WebkitTransform: `scale(${!state ? startScale : endScale}) translate(${
        !state ? startX : endX
      }rem, ${!state ? startY : endY}rem) perspective(1px) translateX(-50%)`,
      transform: `scale(${!state ? startScale : endScale}) translate(${
        !state ? startX : endX
      }rem, ${!state ? startY : endY}rem) perspective(1px) translateX(-50%)`,
    },
  })
)`
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 2;

  height: 6rem;

  padding-top: 0.5rem;
  padding-bottom: ${spaces.narrow};

  width: 1000px;

  @media (min-width: ${screenSizes.desktopS}) {
    width: 1124px;
  }

  @media (min-width: ${screenSizes.desktop}) {
    width: 1540px;
  }

  padding-left: calc(50px + 0.75rem);
  padding-right: calc(50px + 0.75rem);
`

const Header = styled.div`
  position: relative;
`

const Info = styled.div`
  padding-right: ${spaces.wide};

  position: absolute;
  left: 0;

  -webkit-transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
`
const Contact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Email = styled.h3`
  margin: 0;
`

const Title = styled.h1`
  margin-bottom: ${(props) =>
    props.customMargin ? `${props.customMargin}` : '0.5rem'};
  font-size: ${(props) =>
    props.customFontSize ? `${props.customFontSize}` : '3rem'};
`

const Description = styled.div`
  position: absolute;
  right: 0;
  top: 50%;

  padding-left: ${spaces.wide};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  padding-right: ${spaces.narrow};
  padding-left: ${spaces.narrow};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const MInfo = styled.div`
  padding-right: ${spaces.wide};
  margin-bottom: ${spaces.wide};
`

const MInfoStickyContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;

  background-color: ${(props) => props.theme.background};

  @supports (backdrop-filter: none) {
    background-color: ${(props) => props.theme.backgroundTransp};
    -webkit-backdrop-filter: blur(${(props) => props.theme.blur});
    backdrop-filter: blur(${(props) => props.theme.blur});
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`

const MInfoStickyContent = styled.div`
  display: inline-block;
`

const MDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export default About

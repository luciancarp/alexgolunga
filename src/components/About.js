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
            >
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
                            You can find my CV{' '}
                            <CVLink
                              target='_blank'
                              rel='noopener noreferrer'
                              href={
                                'https://drive.google.com/file/d/1ZaE4Q1xFWWhXAM-ZUVd4rZuQOZJxQrHu/view'
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
    duration = 'height 0.2s, padding-top 0.2s, position 0.2s, background-color 0.2s, backdropFilter 0.2s,WebkitBackdropFilter 0.2s, box-shadow 0.2s',
    start = '20vh',
    end = '6rem',
    background = 'rgba(0, 0, 0, 0.5)',
    shadow = '0px 0px 0px 0px rgba(0, 0, 0, 0)',
  }) => ({
    style: {
      transition: duration,
      height: `${!state ? start : end}`,
      paddingTop: `${!state ? '5vh' : '0.50rem'}`,
      backgroundColor: `${!state ? 'rgba(0, 0, 0, 0)' : background}`,
      backdropFilter: `${!state ? 'blur(0)' : `blur(10px)`}`,
      WebkitBackdropFilter: `${!state ? 'blur(0)' : `blur(10px)`}`,
      boxShadow: `${!state ? '0px 0px 0px 0px rgba(0, 0, 0, 0)' : shadow}`,
    },
  })
)`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;

  margin-bottom: 5vh;
  padding-bottom: ${spaces.narrow};
  margin-left: -${spaces.wide};
  margin-right: -${spaces.wide};
  padding-left: ${spaces.wide};
  padding-right: ${spaces.wide};

  /* background-color: ${(props) => props.theme.background};

  @supports (backdrop-filter: none) {
    background-color: ${(props) => props.theme.backgroundTransp};
    backdrop-filter: blur(${(props) => props.theme.blur});
  } */

  /* box-shadow: 0px 0px 10px 6px; */
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
  /* margin-bottom: 0.5rem;
  font-size: 3rem; */
  margin-bottom: ${(props) =>
    props.customMargin ? `${props.customMargin}` : '0.5rem'};
  font-size: ${(props) =>
    props.customFontSize ? `${props.customFontSize}` : '3rem'};
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

  /* background-color: ${(props) => props.theme.background}; */

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
  /* position: -webkit-sticky;
  position: sticky; */

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;

  background-color: ${(props) => props.theme.background};

  @supports (backdrop-filter: none) {
    background-color: ${(props) => props.theme.backgroundTransp};
    backdrop-filter: blur(${(props) => props.theme.blur});
  }

  /* box-shadow: 0px 0px 10px 5px ${(props) => props.theme.backgroundTransp}; */

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

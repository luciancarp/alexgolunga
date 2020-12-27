import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import LinkedinSvg from '../assets/svg/linkedin.svg'
import TwitterSvg from '../assets/svg/twitter.svg'

import { spaces, screenSizes } from '../style/global'

const title = 'Alex Golunga'
const description =
  'Hi, my name is Alex.\nSound designer and audio engineer.\nMaxMSP programmer.\nPassionate about game audio implementation and DSP.'

const About = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setScrolled(currentScrollY > 15)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const isShort = useMediaQuery({
    query: '(max-height: 700px)',
  })

  const isMobileOrTablet = useMediaQuery({
    query: `(max-width: ${screenSizes.laptop})`,
  })

  const animate = !isShort && scrolled

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

  return (
    <>
      {!isMobileOrTablet && (
        <Container state={animate} sticky={!isShort}>
          <Header>
            <Translate
              state={animate}
              endX={25}
              endY={0}
              duration={'transform 0.2s ease-out'}
            >
              <Scale
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
              </Scale>
            </Translate>
            <Opacity state={animate}>
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
            </Opacity>
          </Header>
        </Container>
      )}
      {isMobileOrTablet && <MobileTabletAbout />}
    </>
  )
}

const Container = styled('div').attrs(
  ({
    state,
    sticky,
    duration = 'height 0.2s, padding-top 0.2s, position 0.2s',
    start = '20vh',
    end = '12vh',
  }) => ({
    style: {
      transition: duration,
      height: `${!state ? start : end}`,
      paddingTop: `${!state ? '5vh' : '0.50rem'}`,
      position: `${sticky ? 'sticky' : 'static'}`,
    },
  })
)`
  /* position: -webkit-sticky;
  position: sticky; */
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

const DescriptionLine = styled.p``

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

const Translate = styled('div').attrs(
  ({
    state,
    duration = 'transform 0.2s',
    startX = 0,
    endX = 50,
    startY = 0,
    endY = 50,
  }) => ({
    style: {
      transition: duration,
      transform: `translate(${!state ? startX : endX}%, ${
        !state ? startY : endY
      }%)`,
    },
  })
)``

const Opacity = styled('div').attrs(
  ({ state, duration = 'opacity 0.2s', start = 100, end = 0 }) => ({
    style: {
      transition: duration,
      opacity: `${state ? end : start}%`,
    },
  })
)``

const Scale = styled('div').attrs(
  ({ state, duration = '0.2s', start = 1, end = 0.5 }) => ({
    style: {
      transition: duration,
      transform: `scale(${!state ? start : end})`,
    },
  })
)``

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

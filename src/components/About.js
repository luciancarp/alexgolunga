import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import LinkedinSvg from '../assets/svg/linkedin.svg'
import TwitterSvg from '../assets/svg/twitter.svg'

import { spaces } from '../style/global'

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

  return (
    <Container state={scrolled}>
      <Header>
        <Info state={scrolled}>
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
        <Description state={scrolled}>
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
      </Header>
    </Container>
  )
}

const Container = styled('div').attrs(
  ({ state, duration = '0.2s', start = 1, end = 0.75 }) => ({
    style: {
      transition: duration,
      transform: `scale(${!state ? start : end})`,
    },
  })
)`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  /* z-index: 1; */

  margin-bottom: 5vh;
  padding-top: ${spaces.narrow};
  padding-bottom: ${spaces.narrow};
  min-height: 20vh;

  transition: background-color 0.2s;
  -webkit-transition: background-color 0.2s;
  transition-timing-function: ease-out;

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

const Info = styled('div').attrs(
  ({ state, duration = '0.2s', start = 0, end = 100 }) => ({
    style: {
      transition: duration,
      transform: `translate(${!state ? start : end}%, 0%)`,
    },
  })
)`
  padding-right: ${spaces.wide};

  position: absolute;
  left: 0;
  top: 50%;

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
  margin-bottom: ${spaces.wide};
  font-size: 3rem;
`

const Description = styled('div').attrs(
  ({ state, duration = '0.2s', start = 100, end = 0 }) => ({
    style: {
      transition: duration,
      opacity: `${state ? end : start}%`,
    },
  })
)`
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
  transition: fill 0.2s;
  -webkit-transition: fill 0.2s;
  transition-timing-function: ease-out;
`

const Linkedin = styled(LinkedinSvg)`
  ${SvgStyle}
`

const Twitter = styled(TwitterSvg)`
  ${SvgStyle}
`

export default About

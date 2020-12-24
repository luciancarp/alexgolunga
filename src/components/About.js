import React from 'react'
import styled, { css } from 'styled-components'

import LinkedinSvg from '../assets/svg/linkedin.svg'
import TwitterSvg from '../assets/svg/twitter.svg'

import { spaces } from '../style/global'

const title = 'Alex Golunga'
const description =
  'Hi, my name is Alex.\nSound designer and audio engineer.\nMaxMSP programmer.\nPassionate about game audio implementation and DSP.'

const About = () => {
  return (
    <Container>
      <Info>
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
    </Container>
  )
}

const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;

  margin-bottom: 6rem;
  padding-top: ${spaces.regular};
  padding-bottom: ${spaces.regular};
  min-height: 10vh;

  transition: background-color 0.2s;
  -webkit-transition: background-color 0.2s;
  transition-timing-function: ease-out;

  background-color: ${(props) => props.theme.background};

  @supports (backdrop-filter: none) {
    background-color: ${(props) => props.theme.backgroundTransp};
    backdrop-filter: blur(5px);
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Info = styled.div`
  padding-right: ${spaces.wide};
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

const Description = styled.div`
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

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import Scrollspy from 'react-scrollspy'

import { spaces } from '../style/global'

const navLinks = [
  { id: 'reel', title: 'Game Audio Reel' },
  { id: 'wwise', title: 'Wwise Unity Integration' },
  { id: 'maxmsp', title: 'MaxMSP' },
  { id: 'haptic', title: 'Haptic Design' },
  { id: 'recording', title: 'Recording / Mix' },
  { id: 'beating', title: 'beating.' },
]

const linkIds = navLinks.map((link) => link.id)

const Navigation = () => {
  return (
    <Container>
      <NavMenu>
        <NavList
          items={linkIds}
          currentClassName='is-current'
          scrolledPastClassName='is-past'
          offset={-20}
        >
          {navLinks.map((link) => (
            <NavItem>
              <Link
                activeClass='active'
                to={link.id}
                spy={true}
                smooth={true}
                offset={-50}
                duration={300}
              >
                <h2>{link.title}</h2>
              </Link>
            </NavItem>
          ))}
        </NavList>
      </NavMenu>
    </Container>
  )
}

const NavItem = styled.li`
  width: 7rem;
  height: 7rem;

  padding-left: ${spaces.narrow};
  padding-right: ${spaces.narrow};

  opacity: 0.5;

  h2 {
    font-size: 0.75rem;
  }

  transform-origin: left;
  /* transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -webkit-transform: rotate(90deg); */
  transform: rotate(90deg);

  transition: transform 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NavList = styled(Scrollspy)`
  height: 100%;

  margin-top: -3rem;
  margin-left: ${spaces.regular};

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`

const NavMenu = styled.nav`
  .is-current {
    /* color: ${(props) => props.theme.primary}; */

    opacity: 1;

    transform-origin: left;
    transform: translate(0%, 50%) rotate(0) scale(2);

    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

    /* height: 1rem; */
    /* margin: 1rem; */
  }

  /* .is-past {
    transform: translate(0%, 50%) rotate(90deg);
  } */

  height: 100%;
`

const Container = styled.header`
  height: 100%;
  width: ${spaces.widthNav};
  position: fixed;
  z-index: 1;
  top: 0;
  /* left: 0; */
  overflow: visible;

  /* padding: ${spaces.wide}; */
`

export default Navigation

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import Scrollspy from 'react-scrollspy'
import { useStaticQuery, graphql } from 'gatsby'

import { spaces } from '../style/global'

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  const navLinks = data.allContentfulProject.edges.map(
    (edge) => edge.node.title
  )

  return (
    <Container>
      <NavMenu>
        <NavList
          items={navLinks}
          currentClassName='is-current'
          scrolledPastClassName='is-past'
          offset={-20}
        >
          {navLinks.map((link) => (
            <NavItem>
              <Link
                activeClass='active'
                to={link}
                spy={true}
                smooth={true}
                offset={-50}
                duration={300}
              >
                <h2>{link}</h2>
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

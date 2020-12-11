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
        <NavList items={navLinks} currentClassName='is-current' offset={-20}>
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
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100px;

  h2 {
    font-size: 0.6rem;
  }

  transform-origin: left;
  transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);

  -webkit-transition: -webkit-transform 0.2s ease-in-out;
  -ms-transition: -ms-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
`

const NavList = styled(Scrollspy)`
  height: 100%;

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`

const NavMenu = styled.nav`
  .is-current {
    color: ${(props) => props.theme.primary};

    transform-origin: left;
    transform: scale(2) translate(0px, 25px) rotate(0deg);
    -ms-transform: scale(2) translate(0px, 25px) rotate(0deg);
    -webkit-transform: scale(2) translate(0px, 25px) rotate(0deg);

    -webkit-transition: -webkit-transform 0.2s ease-in-out;
    -ms-transition: -ms-transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
  }

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

  padding: ${spaces.wide};
`

export default Navigation

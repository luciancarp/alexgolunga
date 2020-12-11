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

const NavItem = styled.li``

const NavList = styled(Scrollspy)``

const NavMenu = styled.nav`
  .is-current {
    color: ${(props) => props.theme.primary};
  }
`

const Container = styled.header`
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;

  padding: ${spaces.wide};
`

export default Navigation

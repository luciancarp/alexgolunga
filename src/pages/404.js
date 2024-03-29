import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Seo from '../components/SEO'

const NotFoundPage = () => (
  <Container>
    <Seo title='404: Not found' />
    <Title>NOT FOUND</Title>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <StyledLink to='/'>Main Page</StyledLink>
  </Container>
)

const StyledLink = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
`

const Title = styled.h1``

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default NotFoundPage

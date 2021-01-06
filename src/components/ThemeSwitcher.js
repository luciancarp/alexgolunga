import React from 'react'
import styled from 'styled-components'
import ThemeContext from '../style/Theme'
import Sun from '../assets/svg/sun.svg'
import Moon from '../assets/svg/moon.svg'
import { spaces, screenSizes } from '../style/global'

const ThemeSwitcher = () => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <ThemeSwitcherContainer onClick={theme.switchTheme}>
          {theme.name === 'dark' && <StyledSun />}
          {theme.name === 'light' && <StyledMoon />}
        </ThemeSwitcherContainer>
      )}
    </ThemeContext.Consumer>
  )
}

const ThemeSwitcherContainer = styled.div`
  position: absolute;
  right: ${spaces.regular};
  top: ${spaces.regular};

  margin: 0;
  padding: ${spaces.narrow};

  z-index: 10;
`

const StyledSun = styled(Sun)`
  height: 1.8rem;
  width: 1.8rem;
  fill: rgba(204, 204, 204, 0.25);

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      fill: rgba(204, 204, 204, 1);
    }
  }
`

const StyledMoon = styled(Moon)`
  height: 1.8rem;
  width: 1.8rem;
  fill: rgba(26, 26, 26, 0.25);

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      fill: rgba(26, 26, 26, 1);
    }
  }
`

export default ThemeSwitcher

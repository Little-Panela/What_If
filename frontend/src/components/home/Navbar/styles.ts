import styled from 'styled-components'

interface MenuProps {
  isOpen: Boolean
}

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;

  width: 100vw;
  height: 4.6rem;
  padding-right: 5rem;
  padding-left: 5rem;

  background: ${(props) => props.theme['gray-800']};
  border-bottom: 1px ${(props) => props.theme['gray-600']} solid;

  @media (max-width: 720px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  /* 
  .active {
    color: red !important;
  } */
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;

  h1 {
    font-size: 2.25rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};

    span {
      font-size: 2.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['red-500']};
    }
  }

  > span {
    font-size: 0.9rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-300']};

    @media (max-width: 720px) {
      display: none;
    }
  }
`

export const Divider = styled.div`
  width: 5px;
  height: 33px;
  background-color: ${(props) => props.theme.white};

  @media (max-width: 720px) {
    display: none;
  }
`

export const Menu = styled.ul<MenuProps>`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  position: relative;

  .activeHome {
    color: ${(props) => props.theme.white};
    span {
      width: 100%;
    }
  }
  .activeAbout {
    color: ${(props) => props.theme.white};
    span {
      width: 100%;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-weight: 700;
    text-decoration: none;
    color: ${(props) => props.theme['gray-300']};

    transition: all 0.2s ease-in;

    span {
      width: 0;
      height: 2px;
      background-color: ${(props) => props.theme.white};
      transition: width 0.2s;
    }

    &:hover {
      color: ${(props) => props.theme.white};

      span {
        width: 80%;
      }
    }
  }

  @media (max-width: 1000px) {
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? '250px' : '0')};
    z-index: 999;
    flex-direction: column;

    background: ${(props) => props.theme['gray-800']};
    border-bottom: 1px ${(props) => props.theme['gray-600']} solid;

    position: absolute;
    left: 0;
    top: 72px;

    transition: height 0.3s ease-in;
  }
`

export const ButtonLogin = styled.button<MenuProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1.5rem;
  gap: 0.6rem;

  border: 1px ${(props) => props.theme['orange-500']} solid;
  border-radius: 4px;
  background: transparent;
  color: ${(props) => props.theme.white};

  transition: all 0.5s ease-in-out;

  span {
    font-size: 0.8rem;
    font-weight: 700;
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['red-500']};
  }

  &:hover {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme['gray-900']};
    box-shadow: 0 0 1em ${(props) => props.theme['orange-500']};
    border-color: none;

    svg {
      g {
        path {
          stroke: ${(props) => props.theme['gray-900']};
        }
      }
    }
  }

  &.mobile {
    display: none;
  }

  @media only screen and (max-width: 1000px) {
    &.desktop {
      display: none;
    }

    &.mobile {
      display: flex;
    }
  }
`

export const Hamburger = styled.span<MenuProps>`
  border-top: 2px solid;
  width: 1.5rem;

  transition: color 0.5s ease-in-out;

  &::after,
  &::before {
    content: '';
    display: block;
    width: 1.5rem;
    height: 0.125rem;
    background: currentColor;
    margin-top: 0.31rem;
    transition: 0.3s;
    position: relative;
  }

  &:hover {
    color: ${(props) => props.theme['orange-500']};
  }

  border-top-color: ${({ isOpen }) =>
    isOpen ? 'transparent' : 'currentColor'};

  ${({ isOpen }) => (isOpen ? '&::before{transform: rotate(135deg);}' : '')}
  ${({ isOpen }) =>
    isOpen ? '&::after{transform: rotate(-135deg); top: -7px;}' : ''}

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`

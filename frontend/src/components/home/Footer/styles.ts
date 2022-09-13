import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;

  margin-top: 80px;
  padding-right: 5rem;
  padding-left: 5rem;

  color: ${(props) => props.theme['gray-400']};
`

export const Divider = styled.div`
  height: 1px;
  width: 100%;

  background: ${(props) => props.theme['gray-500']};
`

export const TextField = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.6rem;
  padding-bottom: 1.25rem;

  @media only screen and (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`

export const Link = styled.a`
  color: ${(props) => props.theme['gray-300']};
  text-decoration: none;

  transition: all ease-in-out 0.3s;

  &:hover {
    color: ${(props) => props.theme['red-500']};
  }
`

import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12.5rem;

  padding: 3.8rem 3.1rem;
  margin-top: 4.3rem;
  /* height: 100vh; */
  margin-left: 5rem;
  margin-right: 5rem;
  border-radius: 16px;

  background-color: ${(props) => props.theme['gray-800']};

  @keyframes animShadow {
    from {
      filter: drop-shadow(0px 0px 0px ${(props) => props.theme['red-700']});
    }

    to {
      filter: drop-shadow(0px 0px 15px ${(props) => props.theme['red-700']});
    }
  }

  animation: animShadow 5s linear 5s infinite alternate;

  @media (max-width: 720px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TextField = styled.div`
  max-width: 31.2rem;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.white};
    line-height: 3.7rem;
    word-wrap: normal;

    span {
      color: ${(props) => props.theme['gray-300']};
    }

    @media (max-width: 720px) {
      text-align: center;
      font-size: 2.5rem;
    }
  }

  p {
    line-height: 1.6rem;

    span:first-child {
      color: ${(props) => props.theme.white};
      margin-top: 0.62rem;
    }
    span:last-child {
      color: ${(props) => props.theme['orange-500']};
    }
  }

  @media (max-width: 720px) {
    font-size: 87.5%; // 14px
  }
`

export const ButtonNewSearch = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  padding: 0.7rem 1.5rem;
  margin-top: 3.3rem;
  border: none;
  border-radius: 4px;

  background: ${(props) => props.theme['orange-500']};
  color: ${(props) => props.theme['gray-900']};

  width: 15.1rem;

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
  }
`

export const RightContent = styled.div`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

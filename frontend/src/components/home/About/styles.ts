import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 8.3rem;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9.3rem;

  padding-left: calc(5rem + 3rem);

  height: 29.6rem;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    padding-left: 0;
    gap: 2rem;

    height: 40.6rem;
  }
`;

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 43rem;

  h2 {
    color: ${(props) => props.theme["gray-300"]};
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.5rem;
  }

  p {
    color: ${(props) => props.theme["gray-400"]};
    font-size: 1.12rem;
    line-height: 1.75rem;
    padding: 3px;
  }

  @media only screen and (max-width: 1000px) {
    margin: 0 2rem 0rem 2rem;
  }
`;

export const RightCard = styled.div`
  filter: drop-shadow(0px 0px 15px ${(props) => props.theme["red-700"]});
  background-color: white;

  border-radius: 15px;
  width: 90%;
  height: 29.6rem;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9.3rem;

  margin-top: 4rem;
  padding-right: calc(5rem + 3rem);

  height: 29.6rem;

  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    padding-right: 0;
    gap: 2rem;

    height: 40.6rem;
  }
`;

export const LeftCard = styled.div`
  filter: drop-shadow(0px 0px 15px ${(props) => props.theme["red-700"]});
  border-radius: 15px;
  background-color: white;

  width: 90%;
  height: 29.6rem;
`;

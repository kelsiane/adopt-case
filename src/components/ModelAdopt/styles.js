import styled from "styled-components";

export const DivModelAdopt = styled.div`
  width: 50%;
  height: 400px;
  border-radius: 8px;
  margin: 0 auto;
  text-align: center;
  background-color: var(--background);
  padding: 10px;
  h3 {
    text-align: center;
    color: var(--grey);
    font-weight: 500;
  }
  @media only screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const DivLottie = styled.div`
  margin: 20px 0;
  @media only screen and (min-width: 768px) {
    margin: 0px auto;
    width: 300px;
  }
`;

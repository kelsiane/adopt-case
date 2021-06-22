import styled from "styled-components";

export const DivList = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h3 {
    text-align: start;
  }
`;

export const DivCards = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: start;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

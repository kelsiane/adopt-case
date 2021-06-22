import styled from "styled-components";

export const UlStyled = styled.ul`
  border-radius: 8px;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background-color: var(--white);
  li {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  label {
    font-weight: bold;
    font-size: 14px;
  }
  p {
    color: var(--grey);
    font-size: 18px;
  }
  @media only screen and (min-width: 768px) {
    width: 48%;
  }
`;

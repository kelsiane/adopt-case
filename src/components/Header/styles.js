import styled from "styled-components";

export const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  div {
    display: flex;
    gap: 30px;
    flex-direction: row;
    align-items: center;
  }

  img {
    width: 150px;
  }
  svg {
    color: var(--green);
  }
  .menu-burguer {
    font-size: 20px;
    background-color: var(--white);
    border-radius: 12px;
  }
  .menu {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    .menu {
      display: block;
      display: flex;
      gap: 20px;
    }
    .menu-burguer {
      display: none;
    }
  }
`;

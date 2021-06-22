import styled from "styled-components";

export const ImageLogin = styled.img`
  width: 380px;
`;

export const Logo = styled.img`
  width: 250px;
`;

export const DivGeral = styled.div`
  display: flex;
  padding: 70px 100px;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 30px;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  .link {
    color: var(--gray);
    text-decoration: none;
    font-weight: bold;
    display: flex;
    gap: 10px;
  }
`;

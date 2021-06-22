import styled from "styled-components";
export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Logo = styled.img`
  width: 250px;
`;

export const DivGeral = styled.div`
  display: flex;
  padding: 70px 180px;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 30px;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const DivCadastro = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  gap: 20px;
  p {
    color: var(--grey);
  }
  .link {
    color: var(--gray);
    text-decoration: none;
    font-weight: bold;
    display: flex;
    gap: 10px;
  }
  @media only screen and (min-width: 768px) {
    width: 40%;
    padding: 18px;
  }
`;

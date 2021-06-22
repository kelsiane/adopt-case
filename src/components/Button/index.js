import styled from "styled-components";

export const ButtonGreen = styled.button`
  background-color: var(--green);
  border: 1px solid var(--green);
  padding: 12px;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  &:hover {
    background-color: var(--transparent);
    color: var(--green);
  }
`;
export const ButtonTransparent = styled(ButtonGreen)`
  border: 1px solid var(--grey);
  color: var(--gray);
  background-color: var(--transparent);
`;

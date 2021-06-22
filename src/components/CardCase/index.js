import { ButtonTransparent } from "../Button";
import { UlStyled } from "./styles";

const CardCase = ({ cases, handlePopup }) => {
  const { casee, description, value } = cases;

  return (
    <UlStyled>
      <li>
        <label>CASO:</label>
        <p>{casee}</p>
      </li>
      <li>
        <label>DESCRIÇÃO:</label>
        <p>{description}</p>
      </li>
      <li>
        <label>VALOR:</label>
        <p>R$ {value} reais</p>
      </li>
      <li>
        <ButtonTransparent onClick={handlePopup}>Adotar</ButtonTransparent>
      </li>
    </UlStyled>
  );
};

export default CardCase;

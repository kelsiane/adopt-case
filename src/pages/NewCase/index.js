import { DivGeral, DivNovoCadastro, Logo } from "./styles";

import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { Input, InputTextArea } from "../../components/Input";
import { ButtonGreen, ButtonTransparent } from "../../components/Button";
import { DivForm, DivButtonsRow } from "./styles";

const NewCase = () => {
  return (
    <DivGeral>
      <DivNovoCadastro>
        <Logo src={logo} alt="logo-adoptCase" />

        <h3>Cadastrar novo caso</h3>
        <p>
          Descreva o caso detalhadamente para encontrar um herói para resolver
          isso.
        </p>
        <Link className="link" to="/">
          <FiLogIn fontSize="16px" />
          Voltar para home
        </Link>
      </DivNovoCadastro>
      <DivForm>
        <Input placeholder="Titulo do caso" />
        <InputTextArea placeholder="Descrição" />
        <Input placeholder="Valor em reais" />
        <DivButtonsRow>
          <ButtonTransparent>Cancelar</ButtonTransparent>
          <ButtonGreen>Cadastrar</ButtonGreen>
        </DivButtonsRow>
      </DivForm>
    </DivGeral>
  );
};

export default NewCase;

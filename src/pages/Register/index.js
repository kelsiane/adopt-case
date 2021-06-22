import { DivGeral, DivCadastro, Logo } from "./styles";

import logo from "../../assets/images/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { Input } from "../../components/Input";
import { ButtonGreen } from "../../components/Button";
import { DivForm } from "./styles";

const Register = () => {
  const history = useHistory();
  const handleTo = (path) => {
    history.push(path);
  };
  return (
    <DivGeral>
      <DivCadastro>
        <Logo src={logo} alt="logo-adoptCase" />

        <h3>Cadastro</h3>
        <p>
          Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
          os casos da sua ONG.
        </p>
        <Link className="link" to="/">
          <FiLogIn fontSize="16px" />
          Já possui cadastro? Login
        </Link>
      </DivCadastro>
      <DivForm>
        <Input placeholder="Nome da ONG" />
        <Input placeholder="E-mail" />
        <Input placeholder="WhatsApp" />
        <Input placeholder="Cidade" />
        <ButtonGreen onClick={() => handleTo("/")}>Cadastrar</ButtonGreen>
      </DivForm>
    </DivGeral>
  );
};

export default Register;

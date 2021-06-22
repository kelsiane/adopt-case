import logo from "../../assets/images/logo.svg";
import { Input } from "../../components/Input";
import { ButtonGreen } from "../../components/Button";
import { DivGeral, DivLogin, ImageLogin, Logo } from "./styles";
import imageLogin from "../../assets/images/home.svg";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const handleTo = (path) => {
    history.push(path);
  };
  return (
    <DivGeral>
      <DivLogin>
        <Logo src={logo} alt="logo-adoptCase" />

        <h3>Faça seu logon</h3>
        <Input placeholder="Sua ID" />
        <ButtonGreen onClick={() => handleTo("/list")}>Entrar</ButtonGreen>
        <Link className="link" to="/register">
          <FiLogIn fontSize="16px" />
          Não tenho cadastro
        </Link>
      </DivLogin>

      <ImageLogin src={imageLogin} alt="image-home" />
    </DivGeral>
  );
};

export default Login;

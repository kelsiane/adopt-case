import { FiPower } from "react-icons/fi";
import { ButtonGreen, ButtonTransparent } from "../Button";
import logo from "../../assets/images/logo.svg";
import { DivHeader } from "./styles";
import MenuBurguer from "../MenuBurguer";
import { Link, useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  const handleToPage = (to) => {
    history.push(to);
  };

  return (
    <DivHeader>
      <div>
        <Link to="/">
          <img src={logo} alt="logo-adoptCase" />
        </Link>
        <p>Bem vinda, Kelsiane</p>
      </div>
      <div className="menu-burguer">
        <MenuBurguer />
      </div>

      <div className="menu">
        <ButtonGreen onClick={() => handleToPage("/newcase")}>
          Cadastrar novos casos
        </ButtonGreen>
        <ButtonTransparent onClick={() => handleToPage("/")}>
          <FiPower />
        </ButtonTransparent>
      </div>
    </DivHeader>
  );
};

export default Header;

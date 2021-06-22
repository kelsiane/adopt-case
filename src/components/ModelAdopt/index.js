import { ButtonGreen } from "../Button";
import { DivModelAdopt, DivLottie } from "./styles";
import animationData from "../../assets/lotties/happydog.json";
import { useState } from "react";
import Lottie from "react-lottie";

const ModelAdopt = ({ handlePopup }) => {
  const [paused, setPaused] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <DivModelAdopt>
      <h3>Você adotou um caso, boa ação</h3>
      <DivLottie>
        <Lottie options={defaultOptions} isPaused={paused} />
      </DivLottie>
      <ButtonGreen onClick={handlePopup}>fechar</ButtonGreen>
    </DivModelAdopt>
  );
};

export default ModelAdopt;

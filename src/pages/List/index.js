import CardCase from "../../components/CardCase";
import Header from "../../components/Header";
import { DivList, DivCards } from "./styles";
import cases from "../../cases";
import ModelAdopt from "../../components/ModelAdopt";
import { useState } from "react";

const List = () => {
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup(!popup);
  };

  return (
    <DivList>
      <Header />
      {popup ? (
        <ModelAdopt handlePopup={handlePopup} />
      ) : (
        <>
          <h2>Casos Cadastrados</h2>
          <DivCards>
            {cases.map((el) => (
              <CardCase handlePopup={handlePopup} cases={el} />
            ))}
          </DivCards>
        </>
      )}
    </DivList>
  );
};

export default List;

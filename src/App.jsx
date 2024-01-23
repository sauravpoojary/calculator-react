import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  const [value, setValue] = useState("");
  const onButtonClick = (button) => {
    if (button === "C") {
      setValue("");
    }else if (button === "=") {
      setValue(eval(value));
    } else {
      setValue(value + button);
    }
  }
  return (
    <div className={styles.flex + " " + styles.fullView}>
      <div className={styles.calculator}>
        <Display value={value} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;

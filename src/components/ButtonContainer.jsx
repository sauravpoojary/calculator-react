import Button from "./Button";
import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} onClick={() => onButtonClick(name)}/>
      ))}
    </div>
  );
};

export default ButtonContainer;

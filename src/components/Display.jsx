import styles from "./Display.module.css";

const Display = ({ value }) => {
  return <input type="text" value={value} readOnly className={styles.display} />;
};

export default Display;

import styles from "./Form.module.css";

const Form = ({ value, onCreate, onChange, onKeyPress }) => {
  return (
    <div className={styles.form}>
      <input
        className={styles.formin}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <div className={styles.createbutton} onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;

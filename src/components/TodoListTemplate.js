import styles from "./TodoListTemplate.module.css";

const TodoListTemplate = ({ form, children, palette }) => {
  return (
    <main className={styles.todolisttemplate}>
      <div className={styles.title}>오늘 할 일</div>
      <section className={styles.formwrapper}>{form}</section>
      <section className={styles.todoswrapper}>{children}</section>
    </main>
  );
};

export default TodoListTemplate;

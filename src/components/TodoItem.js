import { Component } from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    console.log(id);
    return (
      <div className={styles.todoitem} onClick={() => onToggle(id)}>
        <div
          className={styles.remove}
          onClick={(e) => {
            e.stopPropagation();
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`{styles.todotext} ${checked && styles.checked}`}>
          <div>{text}</div>
        </div>
        {checked && <div className={styles.checkmark}>✓</div>}
      </div>
    );
  }
}

export default TodoItem;

import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import { Component } from "react";
import Calendar from "./components/Calender";

class App extends Component {
  id = 3;
  state = {
    input: "",
    todos: [
      { id: 0, text: "hello", checked: false },
      { id: 1, text: "react", checked: true },
      { id: 2, text: "hello", checked: false },
    ],
    color: "#343a40",
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color,
      }),
    });
  };

  handlekeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      todos: nextTodos,
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handlekeyPress,
      handleToggle,
      handleRemove,
    } = this;
    return (
      <div>
        <TodoListTemplate
          form={
            <Form
              value={input}
              onKeyPress={handlekeyPress}
              onChange={handleChange}
              onCreate={handleCreate}
              color={color}
            />
          }
        >
          <TodoItemList
            todos={todos}
            onToggle={handleToggle}
            onRemove={handleRemove}
          />
        </TodoListTemplate>
        <Calendar />
      </div>
    );
  }
}

export default App;

function Todo({ todo, onDelete, onToggle }) {
    return (
        <li>
            <input type="checkbox" checked={todo.checked} onChange={onToggle} />
            <span>Text</span>
            <button onClick={onDelete}> {todo.text} </button>
        </li>
    )
}

let id = 0;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                { id: 997, text: 'task one', checked: true },
                { id: 998, text: 'task two', checked: false },
                { id: 999, text: 'task three', checked: true },
            ]
        }
    }

    addTodo() {
        const text = prompt('add todo');
        this.setState({ todos: [...this.state.todos, { id, text }] })
        id++;
    }

    deteteTodo(id) {
        this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
    }

    toggleTodo(id) {
        this.setState({ todos: this.state.todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo) })
    }

    render() {
        return (
            <div>
                <h2>My ToDo App</h2>
                <p>Item count: {this.state.todos.length}</p>
                <p>Unchecked count: {this.state.todos.filter(todo => !todo.checked).length}</p>
                <button onClick={() => this.addTodo()}>New TODO</button>
                <ul>{
                    this.state.todos.map(todo => <Todo
                        todo={todo}
                        key={todo.id}
                        onDelete={() => this.deteteTodo(todo.id)}
                        onToggle={() => this.toggleTodo(todo.id)} />)
                }</ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('mydiv'))
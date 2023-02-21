import React from "react";
import './style.scss'
class ListTodo extends React.Component {
    state = {
        lisTodo: [
            { id: '1', title: 'test1' },
            { id: '3', title: 'test3' },
        ]
    }
    render() {
        const { lisTodo } = this.state;
        return (
            <div className="list-todo-container">
                <div className="list-todo">
                    <input type={'text'} />
                    <button type="button">Add</button>
                </div>
                <div className="list-todo-content">
                    {lisTodo?.map((item, index) => (
                        <div className="todo-child">
                            <span key={index}>{item.title}</span>
                            <button>Update</button>
                            <button>Delete</button>
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default ListTodo;
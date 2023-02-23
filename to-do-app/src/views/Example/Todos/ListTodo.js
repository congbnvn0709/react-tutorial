import React from "react";
import AddTodoComponent from "./AddTodo";
import './style.scss'
import { toast } from 'react-toastify';
class ListTodo extends React.Component {
    state = {
        lisTodo: [
            { id: 1, title: 'test' }
        ],
        editTodo: {}
    }
    handleAdd = (todo) => {
        this.setState({
            lisTodo: [...this.state.lisTodo, todo]
        })
        toast.success('Thêm mới thành công')
    }
    handleUpdate = (item) => {
        const { editTodo, lisTodo } = this.state;
        const isEmpty = Object.keys(editTodo).length === 0;
        //save
        if (!isEmpty && item.id === editTodo.id) {
            const index = lisTodo.findIndex(el => el.id === item.id)
            lisTodo[index].title = editTodo.title;
            this.setState({
                editTodo: {}
            })
            toast.success('Update success')
            return;
        }
        //edit
        this.setState({
            editTodo: item
        })
    }
    handleDelete = (item) => {
        const dataFilter = this.state.lisTodo.filter(el => el.id !== item.id)
        this.setState({
            lisTodo: dataFilter
        })
        toast.success('Xóa thành công')
    }
    editData = (event) => {
        const editCopy = { ...this.state.editTodo };
        editCopy.title = event.target.value;
        this.setState({
            editTodo: editCopy
        })
    }
    render() {
        const { lisTodo, editTodo } = this.state;
        const isEmpty = Object.keys(editTodo).length === 0;

        return (
            <div className="list-todo-container">
                <AddTodoComponent handleAdd={this.handleAdd} />
                <div className="list-todo-content">
                    {lisTodo?.map((item, index) => (
                        <div className="todo-child" key={index}>
                            {isEmpty ?
                                (<span >{item.title}</span>)
                                :
                                <>
                                    {
                                        editTodo.id === item.id ?
                                            (<input value={editTodo.title} onChange={(event) => this.editData(event)} />)
                                            :
                                            (<span >{item.title}</span>)
                                    }
                                </>
                            }

                            <button onClick={() => this.handleUpdate(item)}>
                                {!isEmpty && editTodo.id === item.id ?
                                    'Save' : 'Edit'
                                }
                            </button>
                            <button onClick={() => this.handleDelete(item)}>Delete</button>
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default ListTodo;
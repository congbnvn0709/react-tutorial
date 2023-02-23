import React from "react";
import { toast } from 'react-toastify';
class AddTodoComponent extends React.Component {
    state = {
        inputValue: ''
    }
    handleChangeInput = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    handleAdd = () => {
        if (!this.state.inputValue) {
            toast.warning('Vui lòng nhập input')
            return;
        }
        this.props.handleAdd({
            id: Math.floor(Math.random() * 100),
            title: this.state.inputValue
        })
        this.setState({
            inputValue: ''
        })
    }
    render() {
        return (
            <div className="list-todo">
                <input type={'text'} value={this.state.inputValue} onChange={(event) => this.handleChangeInput(event)} />
                <button type="button" onClick={() => this.handleAdd()}>Add</button>
            </div>
        )
    }
}
export default AddTodoComponent;

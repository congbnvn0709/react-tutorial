import React from "react";
class FormAdd extends React.Component {
    state = {
        firtName: '',
        lastName: '',
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.emitDataAdd(this.state)
        this.setState({
            firtName: '',
            lastName: ''
        })
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firtName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    render() {
        console.log('render1');
        return (
            <form>
                <label>First name</label><br />
                <input type='text' value={this.state.firtName} onChange={(event) => this.handleChangeFirstName(event)} /><br />
                <label>First name</label><br />
                <input type='text' value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)} /> <br />
                <button onClick={(event) => this.handleSubmit(event)}>Submit form</button>
            </form>
        )
    }
}
export default FormAdd;
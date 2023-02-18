import React from "react";

class Example extends React.Component {
    state = {
        firtName: '',
        lastName: ''
    }
    handleSubmit = () => {
        console.log(this.state);
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firtName: event.target.value
        })
    }
    render() {
        return <>
            <form>
                <label>First name</label><br />
                <input type='text' value={this.state.firtName} onChange={(event) => this.handleChangeFirstName(event)} /><br />
                <label>First name</label><br />
                <input type='text' value={this.state.lastName} /> <br />
                <button  onClick={this.handleSubmit}>Submit form</button>
            </form>
        </>
    }
}
export default Example
import React from "react";
import ChildComponent from "./ChildComponent";

class Example extends React.Component {
    state = {
        firtName: '',
        lastName: ''
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
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
        return <>
            <form>
                <label>First name</label><br />
                <input type='text' value={this.state.firtName} onChange={(event) => this.handleChangeFirstName(event)} /><br />
                <label>First name</label><br />
                <input type='text' value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)}/> <br />
                <button  onClick={(event)=>this.handleSubmit(event)}>Submit form</button>
            </form>
            <ChildComponent name={'one'}/>
        </>
    }
}
export default Example
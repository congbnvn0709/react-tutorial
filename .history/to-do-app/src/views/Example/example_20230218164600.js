import React from "react";

class Example extends React.Component {
    state = {
        firtName: '',
        lastName: ''
    }
    handleSubmit = () => {
        console.log(this.state);
    }
    render() {
        return <>
            <form>
                <label>First name</label><br />
                <input type='text' value={this.state.firtName} /><br />
                <label>First name</label><br />
                <input type='text' value={this.state.lastName} /> <br />
                <button type="submit" onClick={this.handleSubmit}>Submit form</button>
            </form>
        </>
    }
}
export default Example
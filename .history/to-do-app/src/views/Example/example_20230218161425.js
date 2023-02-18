import React from "react";

class Example extends React.Component {
    stateInput = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        console.log(this.state);
        return <>

            <input value={this.stateInput.value} onChange={(event) => this.handleChange(event)} />
        </>
    }
}
export default Example
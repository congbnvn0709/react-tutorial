import React from "react";

class Example extends React.Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        console.log(this.state.value);
        return <>

            <input value={this.state.value} onChange={(event) => this.handleChange(event)} />
        </>
    }
}
export default Example
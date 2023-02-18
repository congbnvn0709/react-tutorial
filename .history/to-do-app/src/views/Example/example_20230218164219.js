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
        return <>
            <input value={this.state.value} onChange={(event) => this.handleChange(event)} />
            <form>
                <label>First name</label><br />
                <input type='text' />
                <label>First name</label><br />
                <input type='text' />
                <button type="submit">Submit form</button>
            </form>
        </>
    }
}
export default Example
import React from "react";

class Example extends React.Component {
    state = {
        value: ''
    }

    render() {
        return <>
            <form>
                <label>First name</label><br />
                <input type='text' /><br />
                <label>First name</label><br />
                <input type='text' /> <br/>
                <button type="submit">Submit form</button>
            </form>
        </>
    }
}
export default Example
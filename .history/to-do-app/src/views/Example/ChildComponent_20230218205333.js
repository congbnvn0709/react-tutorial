import React from "react";

class ChildComponent extends React.Component {

    render() {
        return <>
            <h4>ChildComponent {this.props.name}</h4>
        </>
    }
}
export default ChildComponent
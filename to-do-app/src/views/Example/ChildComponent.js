import React from "react";

class ChildComponent extends React.Component {
    handleDelete = (item) => {
        const dataDelete = this.props.listPerson.filter(el => el.firtName !== item.firtName);
        console.log('data', dataDelete);
        this.props.deletePerson(dataDelete)
    }
    render() {
        console.log('render2');
        return <>
            <h4>ChildComponent {this.props.name}</h4>
            {this.props.listPerson.map((item, index) => (
                <div key={index}> firstName {item.firtName} , lastName {item.lastName} <button onClick={() => this.handleDelete(item)}>X</button></div>
            ))}
        </>
    }
}
export default ChildComponent
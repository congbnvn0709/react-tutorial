import React from "react";
import ChildComponent from "./ChildComponent";
import FormAdd from "./FormAdd";

class Example extends React.Component {
    state = {
        showChild: false,
        listPerson: [
            { firtName: 'chu', lastName: 'cong' },
            { firtName: 'nguyen', lastName: 'cong' },
            { firtName: 'das', lastName: 'cong' },
            { firtName: 'ggg', lastName: 'cong' },
        ]
    }
    addNewPerson = (person) => {
        this.setState({
            listPerson: [...this.state.listPerson, person]
        })
    }
    deletePerson = (persons) => {
        this.setState({
            listPerson: persons
        })
    }
    render() {
        return <>
            <FormAdd emitDataAdd={this.addNewPerson} />
            {this.state.showChild ? (
                <>
                    <ChildComponent listPerson={this.state.listPerson} deletePerson={this.deletePerson} />
                    <p><button onClick={() => this.setState({ showChild: false })}>Hide</button></p>
                </>

            ) : (
                <p><button onClick={() => this.setState({ showChild: true })}>Show</button></p>
            )}
        </>
    }
}
export default Example
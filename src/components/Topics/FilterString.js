import React, { Component } from "react";

class FilterString extends Component{
    constructor(){
        super();

        this.state = {
            names: ['Plum', 'Zeus', 'Epona', 'Capsian', 'Deenah', 'Eudora', 'Flynn', 'Aurora'],
            userInput: '',
            filteredArray: []
        }

        this.filterStrings = this.filterStrings.bind(this);
    }

    handleUserInput(value){
        this.setState({
            userInput: value
        })
    }

    filterStrings(){
        const { names, userInput } = this.state
        let filteredArray = names.filter((val) => val.includes(userInput))

        this.setState({
            filteredArray: filteredArray
        })
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                
                <h4>Filter String</h4>

                <span className="puzzleText">Names: { JSON.stringify(this.state.names) }</span>

                <input  className="inputLine" onChange={ (e) => this.handleUserInput(e.target.value) }></input>

                <button className="confirmationButton" onClick={ this.filterStrings }>Filter</button>

                <span className="resultsBox filterStringRB">Filtered Names: { JSON.stringify(this.state.filteredArray) }</span>

            </div>
        )
    }
}

export default FilterString;
import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            cats: [
                {
                  name: 'Luna Punk Pabst',
                  title: 'Your Majesty',
                  age: 6,
                },
                {
                  name: 'Wynter Squeaker Pabst',
                  age: 6.5,
                  coatColor: 'gray'
                },
                {
                  name: 'Linktimus Pabst I',
                  title: 'Buttmunchkin Supreme',
                }
              ],
            userInput: '',
            filteredArray: []
        }
    }


    handleUserInput(value){
        this.setState({
            userInput: value
        })
    }

    solution(){
        const { cats, userInput } = this.state
        let answer = [];

        for(var i = 0; i < cats.length; i++){
            if(cats[i][userInput]){
                answer.push(cats[i]);
            }
        }

        this.setState({
            filteredArray: answer
        })
    }
// filter out objects in the 'cats' array that don't have the property typed in from the user


    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.cats) }</span>
                <input className="inputLine" onChange={ e => this.handleUserInput(e.target.value) }></input>
                <button className="confirmationButton" onClick={ ()=> this.solution() }>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray) }</span>
            </div>
        )
    }
}

export default FilterObject;
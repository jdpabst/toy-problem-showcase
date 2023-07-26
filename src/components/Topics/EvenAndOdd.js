import React, { Component } from 'react';

class EvenAndOdd extends Component{
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }

        this.solution = this.solution.bind(this);
    }

    inputValue(value){
        this.setState({
            userInput: value
        })
    }
    solution(){
        let arr = this.state.userInput.split(',')
        let nums = arr.map((str) => parseInt(str));
        let even = nums.filter((num) => num % 2 === 0)
        let odd = nums.filter((num) => num % 2 !== 0)

        this.setState({
            evenArray: even,
            oddArray: odd
        })
    
    }
    

    render(){
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={(e)=> this.inputValue(e.target.value)} />
                <button className="confirmationButton" onClick={ this.solution }>Split</button>
                <span className='resultsBox'> Evens: [{ this.state.evenArray.join(',') }]</span>
                <span className='resultsBox'>Odds: [{ this.state.oddArray.join(',') }]</span>
            </div>
        )
    }
}

export default EvenAndOdd;
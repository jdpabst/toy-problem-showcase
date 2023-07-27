import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(){
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }


    handleUserInput(val){
        this.setState({
            userInput: val
        })
    }

    check(){
        const { userInput } = this.state;
        let reversed = userInput.split('').reverse().join('')

        if(userInput === reversed){
            this.setState({
                palindrome: true
            })
        } else {
            this.setState({
                palindrome: false
            })
        }

    }


    render(){
        return(
            <div className="puzzleBox filterStringPB">
                
                <h4>Palindrome</h4>

                <input className="inputLine" onChange={ (e) => this.handleUserInput(e.target.value)}></input>

                <button className="confirmationButton" onClick={ () => this.check() }>Check</button>

                <span className="resultsBox">Palindrome: { JSON.stringify(this.state.palindrome) } </span>

            </div>
        )
    }
}

export default Palindrome;
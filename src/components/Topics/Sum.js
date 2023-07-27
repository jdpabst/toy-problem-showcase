import React, {Component} from 'react';

class Sum extends Component{
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }

        this.sum = this.sum.bind(this);
    }

    handleChange1(val){
        this.setState({
            number1: val
        })
    }

    handleChange2(val){
        this.setState({
            number2: val
        })
    }

    sum(){
        const { number1, number2 } = this.state;
        let answer = parseInt(number1) + parseInt(number2);

        this.setState({
            sum: answer
        })
    }

    render(){
        return(
            <div className="puzzleBox sumPB">

                <h4>Sum</h4>

                <input className="inputLine" onChange={ (e) => this.handleChange1(e.target.value) }></input>

                <input className="inputLine" onChange={ (e) => this.handleChange2(e.target.value) }></input>

                <button className="confirmationButton" onClick= { this.sum }>Add</button>

                <span className="resultsBox">Sum: { JSON.stringify(this.state.sum) }</span>

            </div>
        )
    }
}

export default Sum;
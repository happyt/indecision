import React from 'react'

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handlePlus = this.handlePlus.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }
    handlePlus() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
        //      console.log(this)
    }
    handleMinus() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <span>Count: {this.state.count}</span>
                <button onClick={this.handlePlus}>+1</button>
                <button onClick={this.handleMinus}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

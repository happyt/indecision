import React from 'react'

export default class Action extends React.Component {
    constructor(props) {
        super(props)
        this.toggleIt = this.toggleIt.bind(this)
        this.state = {
            visibility: true
        }
    }
    toggleIt() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.toggleIt}
                    disabled={this.props.hasOptions}>
                    {this.state.visibility ? "Hide detail" : "Show detail"}
                </button>
                {this.state.visibility && (
                    <div>
                        {this.props.choice}
                    </div>
                ) }
            </div>
        )
    }
}

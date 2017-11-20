import React from 'react'

import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import Counter from './Counter'
import OptionModal from './OptionModal'

export default class Appn extends React.Component {
    state = {
            selected: "",
            optionz: ['One', 'Two', 'Three']
        }

    clearSelectedOption = () => {
        this.setState(() => {
            return {
                selected: ""
            }
        })
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ optionz: [] }))      // single line setState
    }

     handleDeleteIndividual = (chosen) => {
         this.setState((prevState) => ({
                optionz: prevState.optionz.filter((option) => {
                    return (chosen !== option)
                })
         }))
    }
    
    handleChooseOption = () => {
        const randomNumber = Math.floor(Math.random() * this.state.optionz.length)
        const option = this.state.optionz[randomNumber]
        this.setState(() => {
            return {
                selected: option
            }
        })
    }

    handleAddOption = (option) => {
        if (!option) {
            return "Enter valid option"
        } else if (this.state.optionz.indexOf(option) > -1) {
            return "This option exists already"
        } else {
            this.setState((prevState) => {
                return {
                    optionz: prevState.optionz.concat(option)
                }
            })
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('optionz')
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({ optionz:options }))
            }    
            
        } catch (e) {

        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.optionz.length !== this.state.optionz.length) {
            const json = JSON.stringify(this.state.optionz)
            localStorage.setItem('optionz', json)
        }
    }

    componentWillUnmount() {
        console.log('Component will unmount')
    }
    render() {
        return (
            <div>
                <Header title="Decisions" subtitle="Add options: Then ask what to do:"/>
                <Counter />
                <Action hasOptions={!(this.state.optionz.length > 0) }
                    choice = {this.state.selected}/>
                <Options options={this.state.optionz}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteIndividual={this.handleDeleteIndividual}
                    handleChooseOption={this.handleChooseOption}>
                </Options>
                <AddOption handleAddOption={this.handleAddOption}/>
                <OptionModal selectedOption={this.state.selected}
                        clearModal={this.clearSelectedOption}
                />
            </div>
        )
    }
}


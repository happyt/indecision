import React from 'react'
import Option from './Option'


const Options = (props) => (
    <div>
        <button onClick={props.handleChooseOption}>WHAT TO DO</button>
        <ul>
            {props.options.map((entry) => (
                <Option text={entry}
                    key={entry}
                    handleDeleteOption={props.handleDeleteIndividual}
                    />
            ))
            }
        </ul>
        <button onClick={props.handleDeleteOptions}>CLEAR ALL</button>

    </div>
)

export default Options
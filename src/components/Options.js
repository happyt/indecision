import React from 'react'
import Option from './Option'


const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title"> Title here</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}>CLEAR ALL</button>
        </div>
        <div className = "widget-body">
        <ul>
            {props.options.map((entry) => (
                <Option 
                    text={entry}
                    key={entry}
                    handleDeleteOption={props.handleDeleteIndividual}
                    />
            ))
            }
        </ul>
        </div>


    </div>
)

export default Options
import React from 'react'
import Option from './Option'


const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your options</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}>CLEAR ALL</button>
        </div>
        <div className = "widget-body">
        {props.options.length === 0 && <p className="widget__message">Add options to get started</p>}
        <ul>
            {props.options.map((entry, index) => (
                <Option 
                    text={entry}
                    key={entry}
                    count={index+1}
                    handleDeleteOption={props.handleDeleteIndividual}
                    />
            ))
            }
        </ul>
        </div>


    </div>
)

export default Options
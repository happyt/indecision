import React from 'react'

const Action = (props) => (
    <div className="mainButton">
        <button
            onClick={props.handlePickOption}
            disabled={props.hasOptions}
            >
            WHAT TO DO
        </button>
    </div>
)

export default Action
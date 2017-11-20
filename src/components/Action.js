import React from 'react'

const Action = (props) => (
    <div >
        <button className="main-button"
            onClick={props.handlePickOption}
            disabled={props.hasOptions}
            >
            WHAT TO DO
        </button>
    </div>
)

export default Action
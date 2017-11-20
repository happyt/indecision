import React from 'react'

const Option = (props) => {
    return (
        <div>
            <li>{props.text}
            <button onClick={(e) => {
                props.handleDeleteOption(props.text)
            }}>Remove</button>
            </li>
        </div>
    )
}

export default Option
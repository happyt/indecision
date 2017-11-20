import React from 'react'

const Option = (props) => (
        <div>
            <li>{props.text}
            <button onClick={(e) => {
                props.handleDeleteOption(props.text)
            }}>Remove</button>
            </li>
        </div>
    )

export default Option
import React from 'react'

const Option = (props) => (
    <div>
        <li className="option">
        <p className = "option__text">{props.count}. {props.text}</p>
            <button className="button button--link"
                onClick={(e) => {
                    props.handleDeleteOption(props.text)
                } }>Remove</button>
        </li>
    </div>
)

export default Option
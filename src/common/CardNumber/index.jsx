import React from 'react'
import './style.css'

const CardNumber = (props) => {
    return (
        <div className="ma-div-card">
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}

export default CardNumber
import React from 'react'
import './style.css'

const Container = (props) => {
    return (
        <div className="ma-div-container">
            {props.children}
        </div>
    )
}

export default Container
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './style.css'

const CardNumber = (props) => {
    return (
        <div className="ma-div-card">
            <h2>{props.title}</h2>
            <span>{props.value}</span>
            <FaSearch />
        </div>
    )
}

export default CardNumber
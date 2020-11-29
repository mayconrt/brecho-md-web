import React from 'react'

import './style.css'

const Content = (props) => {
    return (
        <div className="ma-div-content">
            {props.children}
        </div>
    )
}

export default Content
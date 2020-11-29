import React from 'react'

const Container = (props) => {
    return (
        <div className="ma-div-container">
            {props.children}
        </div>
    )
}

export default Container
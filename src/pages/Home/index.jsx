import React from 'react'
import CardNumber from '../../common/CardNumber'
import './style.css'

const Home = () =>{
    return(
        <div className="ma-div-home">
            <CardNumber title="Total Funcioários" value="40"/>
            <CardNumber title="H. visualizados" value="30"/>
            <CardNumber title="Férias" value="5"/>                      
        </div>
    )
}

export default Home
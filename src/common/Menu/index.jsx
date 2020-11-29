import React from 'react'
import { FaBookReader, FaHome, FaMoneyCheck, FaUmbrellaBeach, FaUsers } from 'react-icons/fa'
import './style.css'

const Menu = () => {
    return (
        <div className="ma-div-menu">
            <div className="ma-div-menu-items">
                <div className="ma-div-menu-home">
                    <FaHome title="Home" />
                    <span>HOME</span>
                </div>
                <div className="ma-div-menu-list">
                    <div className="ma-div-menu-icon">
                        <FaUsers title="Usuários" />
                        <span>Usuários</span>
                    </div>
                    <div className="ma-div-menu-icon">
                        <FaMoneyCheck title="Holerires" />
                        <span>Holerires</span>
                    </div>                    
                    <div className="ma-div-menu-icon">
                        <FaBookReader title="Controle de Ponto" />
                        <span>Controle de Ponto</span>
                    </div>                                        
                    <div className="ma-div-menu-icon">
                        <FaUmbrellaBeach title="Férias" />
                        <span>Férias</span>
                    </div>                               
                </div>
            </div>
        </div>
    )
}

export default Menu
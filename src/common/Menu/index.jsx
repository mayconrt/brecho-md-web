import React from 'react'
import { Link } from 'react-router-dom'

import { FaBookReader, FaHome, FaMoneyCheck, FaUmbrellaBeach, FaUserCheck, FaUsers } from 'react-icons/fa'
import './style.css'

const Menu = () => {
  return (
    <div className="ma-div-menu">
      <div className="ma-div-menu-items">

        <div className="ma-div-menu-home">
          <FaHome title="Home" />
          <span><Link to="/home">HOME</Link></span>
        </div>
        <div className="ma-div-menu-list">
          <div className="ma-div-menu-icon">
            <FaUserCheck title="Usuários" />
            <span><Link to="/user">Usuários</Link></span>
          </div>

          <div className="ma-div-menu-icon">
            <FaUsers title="Funcionários" />
            <span><Link to="/employee">Funcionários</Link></span>
          </div>
          <div className="ma-div-menu-icon">
            <FaMoneyCheck title="Holerires" />
            <span><Link to="/payslip">Holerires</Link></span>
          </div>
          <div className="ma-div-menu-icon">
            <FaBookReader title="Controle de Ponto" />
            <span><Link to="/punch-in">Controle de Ponto</Link></span>
          </div>
          <div className="ma-div-menu-icon">
            <FaUmbrellaBeach title="vaction" />
            <span><Link to="/vaction">Férias</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'

import { FaBookReader, FaHome, FaMoneyCheck, FaUmbrellaBeach, FaUsers } from 'react-icons/fa'
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
                        <FaUsers title="Usuários" />
                        <span><Link to="/user">Funcionários</Link></span>
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
=======
import React from "react";
import {
  FaBookReader,
  FaHome,
  FaMoneyCheck,
  FaUmbrellaBeach,
  FaUsers,
} from "react-icons/fa";
import "./style.css";

const Menu = () => {
  return (
    <div className="ma-div-menu">
      <div className="ma-div-menu-items">
        <div className="ma-div-menu-home">
          <FaHome title="Home" />
          <span>HOME</span>
>>>>>>> ad1edf2666316ad6594b098bd786dadc0eacf29a
        </div>

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
  );
};

export default Menu;

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
            <FaUserCheck title="Produtos" />
            <span><Link to="/product">Produtos</Link></span>
          </div>

          <div className="ma-div-menu-icon">
            <FaUsers title="Clientes" />
            <span><Link to="/client">Clientes</Link></span>
          </div>
          <div className="ma-div-menu-icon">
            <FaMoneyCheck title="Compra" />
            <span><Link to="/purchase-order">Pedido Compra</Link></span>
          </div>
          <div className="ma-div-menu-icon">
            <FaMoneyCheck title="Vendas" />
            <span><Link to="/sales-order">Pedido Venda</Link></span>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Menu;

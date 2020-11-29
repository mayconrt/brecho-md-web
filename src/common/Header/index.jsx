import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import logoWhite from '../../assets/logo-white.png'

import './style.css'

const Home = () => {

  const [logOut, setLogOut] = useState(false)

  function handleLogOut() {
    setLogOut(true)
  }

  if (logOut) {
    return <Redirect to='/authentication' />
  }

  return (
    <div className="ma-div-header">
      <div className="ma-div-header-logo">
        <img src={logoWhite} />
      </div>
      <div className="ma-div-header-info">
        <div className="ma-div-header-line"></div>
        <div className="ma-div-header-login">
          <FaUser title="Usuário" />
          <span>mayconrt</span>
          <FaSignOutAlt size="18px" title="Sair" onClick={handleLogOut} />
        </div>
      </div>
    </div>
  )
}

export default Home
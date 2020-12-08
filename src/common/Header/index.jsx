<<<<<<< HEAD
import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
=======
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
>>>>>>> ad1edf2666316ad6594b098bd786dadc0eacf29a

import { FaSignOutAlt, FaUser } from "react-icons/fa";
import logoWhite from "../../assets/logo-white.png";

import "./style.css";

const Home = () => {
  const [logOut, setLogOut] = useState(false);

  function handleLogOut() {
    setLogOut(true);
  }

  if (logOut) {
    return <Redirect to="/authentication" />;
  }

  return (
    <div className="ma-div-header">
      <div className="ma-div-header-logo">
        <img
          src={logoWhite}
          alt="Imagem do logo com o nome da empresa - GTA Serviços"
        />
      </div>
      <div className="ma-div-header-info">
        <div className="ma-div-header-login">
          <FaUser title="Usuário" />
          <span>mayconrt</span>
          <FaSignOutAlt size="18px" title="Sair" onClick={handleLogOut} />
        </div>
      </div>
    </div>
  );
};

export default Home;

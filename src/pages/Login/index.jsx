import React, { useState } from "react";

import CredentialsForm from "./credentials";
import ResetPasswordForm from "./reset-password";

import "./style.css";

import logo from "../../assets/logo.png";

const LoginForm = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="ma-div-login">
      <div>
        <img
          src={logo}
          alt="Imagem da logo da empresa, com o nome GTA Serviços"
        />
        {login && <CredentialsForm setLogin={setLogin} />}
        {!login && <ResetPasswordForm setLogin={setLogin} />}
      </div>
    </div>
  );
};

export default LoginForm;

import { React, useState, useEffect } from 'react';
import TopBar from '../TopBar/TopBar';

import './AuthForm.css';

function AuthForm({ register }) {
  const [registerFlag, setRegisterFlag] = useState(register);

  function handleRegisterFlag(){
    setRegisterFlag(!registerFlag);
  }

  return (
    <>
      <TopBar />
      <div className="form-content">
        {registerFlag ? (
          <>
          <input 
            className="form-input" 
            type="text" 
            value="" 
            name="username"
            placeholder="Mario Aiala"
            autocomplete="off">
          </input>
          <input
            className="form-input"
            type="text"
            value=""
            name="email"
            placeholder="marioaiala@gmail.com"
            autocomplete="off">
          </input>
          <input
            className="form-input"
            type="text"
            value=""
            name="password"
            placeholder="Senha..."
            autocomplete="off">
          </input>
          <input
            className="form-input"
            type="text"
            value=""
            name="phone"
            placeholder="+55 (49) 94321-5678"
            autocomplete="off">
          </input> 
          <button className="form-button">REGISTRAR</button>
          </>
        ) : (
          <>
            <input
              className="form-input"
              type="text"
              value=""
              name="username"
              placeholder="Mario Aiala"
              autocomplete="off">
            </input>
            <input
              className="form-input"
              type="text"
              value=""
              name="password"
              placeholder="Senha..."
              autocomplete="off">
            </input>
            <button className="form-button">LOGIN</button>
          </>
        )}
      </div>
      <div className="footer-info">
        {registerFlag ? (
          <span>Já tem uma conta? <button onClick={handleRegisterFlag}>Login</button></span>
        ) : (
          <span>Não tem uma conta? <button onClick={handleRegisterFlag}>Registre-se</button></span>
        )}
      </div>
    </>
  );
}

export default AuthForm;
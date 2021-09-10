import { React, useState } from 'react';

import './AuthForm.css';

function AuthForm({ register }) {
  const [registerFlag, setRegisterFlag] = useState(register);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [submitValidationMsg, setSubmitValidationMsg] = useState('');

  function handleRegisterFlag(){
    setRegisterFlag(!registerFlag);
  }

  function handleUserRegister(event){
    event.preventDefault();
    if(phone.length > 18){
      setSubmitValidationMsg("O número de telefone deve respeitar o formato +55 (49) 94321-5678");
      return;
    }
    console.log('alo');
  }

  function handleUserLogin(event){
    event.preventDefault();
    console.log('alo');
  }

  return (
    <>
      <div className="form-content">
        {registerFlag ? (
          <form onSubmit={handleUserRegister}>
            <input 
              className="form-input" 
              type="text" 
              value={username}
              name="username"
              placeholder="Mario Aiala"
              onChange={e => { setUsername(e.target.value) }}
              required
              autoComplete="off">
            </input>
            <input
              className="form-input"
              type="email"
              value={email}
              name="email"
              placeholder="marioaiala@gmail.com"
              onChange={e => { setEmail(e.target.value) }}
              required
              autoComplete="off">
            </input>
            <input
              className="form-input"
              type="password"
              value={password}
              name="password"
              placeholder="Senha..."
              onChange={e => { setPassword(e.target.value) }}
              required
              autoComplete="off">
            </input>
            <input
              className="form-input"
              type="text"
              value={phone}
              name="phone"
              placeholder="+55 (49) 94321-5678"
              onChange={e => { setPhone(e.target.value) }}
              autoComplete="off">
            </input> 
            <button className="form-button">REGISTRAR</button>
          </form>
        ) : (
          <form onSubmit={handleUserLogin}>
            <input
              className="form-input"
              type="text"
              value={username}
              name="username"
              placeholder="Mario Aiala"
              onChange={e => { setUsername(e.target.value) }}
              required
              autoComplete="off">
            </input>
            <input
              className="form-input"
              type="text"
              value={password}
              name="password"
              placeholder="Senha..."
              onChange={e => { setPassword(e.target.value) }}
              required
              autoComplete="off">
            </input>
            <button type="submit" className="form-button">LOGIN</button>
          </form>
        )}
        {submitValidationMsg !== '' && (
          <div className="submit-message">{submitValidationMsg}</div>
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
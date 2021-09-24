import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { login } from '../../services/auth';

import './AuthForm.css';

function AuthForm({ register }) {
  const [registerFlag, setRegisterFlag] = useState(register);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [submitValidationMsg, setSubmitValidationMsg] = useState('');

  const history = useHistory();

  function handleRegisterFlag(){
    setRegisterFlag(!registerFlag);
  }

  function handleUserRegister(event){
    event.preventDefault();
    if(phone.length > 20){
      setSubmitValidationMsg("O número de telefone deve respeitar o formato +55 (49) 94321-5678");
      return;
    }

    const DATA = {
      "username":username,
      "email":email,
      "password":password,
      "phone":phone
    }

    api.post('/user/0', DATA)
      .then((response) => {
        /* IMPLEMENTAR DIRECT LOGIN E REDIRECIONAMENTO */
        const LOGIN_DATA = {
          "username": username,
          "password": password,
        }

        api.post('/user/auth', LOGIN_DATA)
          .then((response) => {
            login(response.data.token, LOGIN_DATA["username"], response.data.id);
          })
          .catch((err) => {
            if (err.response.data) {
              const { error } = err.response.data
              setSubmitValidationMsg(error);
            }
            else {
              setSubmitValidationMsg('Um erro ocorreu ao logar');
            }
          })
        history.push(`/usuario/${response.data.id}`)
      })
      .catch((err) => {
        if (err.response.data) {
          const { error } = err.response.data
          setSubmitValidationMsg(error);
        }
        else {
          setSubmitValidationMsg('Um erro ocorreu ao registrar o time');
        }
      })
  }

  function handleUserLogin(event){
    event.preventDefault();

    const DATA = {
      "username": username,
      "password": password,
    }

    api.post('/user/auth', DATA)
      .then((response) => {
        login(response.data.token, DATA["username"], response.data.user_id);
        history.push(`/`);
      })
      .catch((err) => {
        if (err.response.data) {
          const { error } = err.response.data
          setSubmitValidationMsg(error);
        }
        else {
          setSubmitValidationMsg('Um erro ocorreu ao logar');
        }
      })
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
            <input type="submit" className="form-button" />
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
            <input type="submit" className="form-button" />
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
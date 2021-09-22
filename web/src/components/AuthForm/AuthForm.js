import { React, useState, useEffect } from 'react';

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

  function handleRegisterFlag(){
    setRegisterFlag(!registerFlag);
  }

  function handleUserRegister(event){
    event.preventDefault();
    if(phone.length > 18){
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
        console.log(response);
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
        login(response.data.token, DATA["username"]);
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
            {/* FORMULÁRIO  DE REGISTRO */}
            <input 
              className="form-input" 
              type="text" 
              value={username}
              name="username"
              placeholder="Mario Aiala"
              minlength="5" {/* tamanho mínimo de 5 caracteres */}
              maxlength="50" {/* tamanho máximo de 50 caracteres */}
              onChange={e => { setUsername(e.target.value) }}
              required {/* campo obrigatório */}
              autoComplete="off">
            </input>
            <input
              className="form-input"
              type="email"
              value={email}
              name="email"
              minlength="6"
              maxlength="60"  
              placeholder="marioaiala@gmail.com"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" {/* expressão regular para o e-mail*/}
              title="Deve corresponder ao padrão 'seuemail@provedor.com'">
              onChange={e => { setEmail(e.target.value) }}
              required
              autoComplete="off">
            </input>
            <input
              className="form-input"
              type="password"
              value={password}
              name="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Deve conter ao menos 1 número e 1 letra maiscula e minúscula, e pelo menos 8 ou mais caracteres">
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
              pattern="/^\([1-9]{2}\)[0-9]{4,5}-[0-9]{4}$/" {/* expressão regular para o telefone*/}
              title="Deve corresponder ao padrão (49)91234-5678">
              onChange={e => { setPhone(e.target.value) }}
              autoComplete="off">
            </input> 
            <button className="form-button">REGISTRAR</button>
          </form>
        ) : (
          <form onSubmit={handleUserLogin}>
          {/* FORMULÁRIO  DE LOGIN */}
            <input
              className="form-input"
              type="text"
              value={username}
              name="username"
              placeholder="Mario Aiala"
              minlength="5"
              maxlength="50"
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
              {/* não é necessária validação de REGEX no login */}
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

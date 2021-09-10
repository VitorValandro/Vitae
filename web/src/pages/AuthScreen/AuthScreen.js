import React from 'react';

import '../../global.css';
import './AuthScreen.css';
import AuthForm from '../../components/AuthForm/AuthForm';

function AuthScreen() {
  return (
    <div className="content">
      <div className="header">
        <span>Bem vindo ao Vitae!</span>
      </div>
      <AuthForm register={true} />
    </div>
  );
}

export default AuthScreen;

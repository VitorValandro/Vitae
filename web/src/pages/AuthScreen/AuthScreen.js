import React from 'react';
import TopBar from '../../components/TopBar/TopBar';

import '../../global.css';
import './AuthScreen.css';
import AuthForm from '../../components/AuthForm/AuthForm';

function AuthScreen() {
  return (
    <>
      <TopBar />
      <div className="content">
        <div className="header">
          <span>Bem vindo ao Vitae!</span>
        </div>
        <AuthForm register={true} />
      </div>
    </>
  );
}

export default AuthScreen;

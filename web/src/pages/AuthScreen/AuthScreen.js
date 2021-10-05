import React, { useEffect } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/Footer/Footer';

import '../../global.css';
import './AuthScreen.css';
import AuthForm from '../../components/AuthForm/AuthForm';

function AuthScreen() {

  useEffect(() => {
    document.title = "VITAE - Autenticação"
  }, []);

  return (
    <>
      <TopBar />
      <div className="content">
        <div className="header">
          <span>Bem vindo ao Vitae!</span>
        </div>
        <AuthForm register={true} />
      </div>
      <Footer />
    </>
  );
}

export default AuthScreen;

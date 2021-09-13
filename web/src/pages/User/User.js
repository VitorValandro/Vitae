import React from 'react';

import '../../global.css';
import './User.css';

import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/Footer/Footer';
import LeftBar from '../../components/LeftBar/LeftBar';
import UserCard from '../../components/UserCard/UserCard';

function User() {
  return (
    <>
      <TopBar />
      <div className="user-container">
        <LeftBar />
        <div className="user-content">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default User;

import React from 'react';

import './Home.css'
import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/Footer/Footer';
import UserCard from '../../components/UserCard/UserCard';

function Home() {
  return (
    <>
      <TopBar />
      <div className="home-container">
        <div className="home-content">
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

export default Home;

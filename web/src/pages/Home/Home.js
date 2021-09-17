import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import '../../global.css';
import './Home.css'

import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/Footer/Footer';
import UserCard from '../../components/UserCard/UserCard';

function Home() {
  const [userList, setUserList] = useState(['Mario Aiala']);

  useEffect(() => getUserList(), []);

  async function getUserList(){
    await api.get('/users/')
      .then((response) =>{
        setUserList(response.data);
      });
  }

  return (
    <>
      <TopBar />
      <div className="home-container">
        <div className="home-content">
          {userList.map((user) => {
            return (<UserCard data={user} />)
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

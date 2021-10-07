import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import '../../global.css';
import './Home.css'

import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/Footer/Footer';
import UserCard from '../../components/UserCard/UserCard';

function Home() {
  const [userList, setUserList] = useState([]);

  useEffect(() => getUserList(), []);

  useEffect(() => {
    document.title = `VITAE`;
  }, []);

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
          {
            userList && userList.length !== 0
              ? userList.map((user) => {return (<UserCard data={user} key={user}/>)})
              : (<span className="null-message">Ainda não existem usuários cadastrados.</span>)
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

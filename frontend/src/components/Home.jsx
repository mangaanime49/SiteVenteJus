import React from 'react';
import './Home.css';
import Navbar from './Accueil/Navbar';
import BasHeader from './Accueil/BasHeader';

const Home = () => {
  return (
    <main className="home-container">
        <Navbar />
        <BasHeader />
    </main>
  );
};

export default Home;
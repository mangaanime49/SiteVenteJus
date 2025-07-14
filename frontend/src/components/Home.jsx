import React from 'react';
import Navbar from './Accueil/Navbar';
import BasHeader from './Accueil/BasHeader';
import './Home.css'; // Assuming you have a CSS file for Home component styles

const Home = () => {
  return (
    <main className="home-container">
        <Navbar />
        <BasHeader />
    </main>
  );
};

export default Home;
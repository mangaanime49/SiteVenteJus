import React from 'react';
import Navbar from './Accueil/Navbar';
import BasHeader from './Accueil/BasHeader';
import Boutique from './Boutique/Boutique';
import './Home.css'; // Assuming you have a CSS file for Home component styles

const Home = () => {
  return (
    <main className="home-container">
        <Navbar />
        <BasHeader />
        <Boutique />
    </main>
  );
};

export default Home;
import React from 'react';
import './Navbar.css';
import { AlignJustify, ShoppingCart, Search, HeartPlus, UserRound } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="navbar">
        <nav>
            <div className="logo">F<sub>4</sub> JUICE</div>
            <div className='Search'>
                <Search className="search-icon" />
                <input type="text" placeholder="Rechercher un jus, une saveur..." className="search-input" />
            </div>

            <div className="icons">
                <button><HeartPlus/></button>
                <button><ShoppingCart/></button>
                <button><UserRound/></button>
            </div>
        </nav>

        <nav className="nav-links">
            <div>
                <AlignJustify className="search-icon" />
                <button className="btn-category"> Choisir une catégorie</button>
            </div>
            <a href="#">Accueil</a>
            <a href="#">Notre boutique</a>
            <a href="#">À propos de nous</a>
            <a className="contact-btn" href="#">Contacter-nous</a>
        </nav>

    </header>
  );
};

export default Navbar;
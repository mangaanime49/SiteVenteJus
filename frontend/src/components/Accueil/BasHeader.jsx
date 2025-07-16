import React from 'react';
import './BasHeader.css';
import 
{
    Vegan,
    Grape, 
    Cherry,
    Banana,
    Apple, 
    Citrus
} from 'lucide-react';

const BasHeader = () => {
  return (
    <header className="BasHeader">
        <nav>
            <div><Vegan className="vegan-icon" /></div>
            <div><Grape className="grape-icon" /></div>
            <div><Cherry className="cherry-icon" /></div>
            <div><Banana className="banana-icon" /></div>
            <div><Apple className="apple-icon" /></div>
            <div><Citrus className="citrus-icon" /></div>
            <p id='bas'>F4 Juice - Le goût naturel, la fraîcheur à chaque gorgée!</p>
        </nav>
        <section className="hero-section">
            <h1>Bienvenue chez F<sub>4</sub> Juice</h1>
            <p>Découvrez nos jus frais et naturels, pressés à la commande.</p>
        </section>
    
        <section className="features-section">
            <div className="feature">
            <h2>100% Naturel</h2>
            <p>Nos jus sont préparés à partir de fruits frais, sans additifs ni conservateurs.</p>
            </div>
            <div className="feature">
            <h2>Livraison Rapide</h2>
            <p>Recevez vos jus directement chez vous en un temps record.</p>
            </div>
            <div className="feature">
            <h2>Variété de Saveurs</h2>
            <p>Choisissez parmi une large gamme de saveurs pour satisfaire toutes vos envies.</p>
            </div>
        </section>
    
        <section className="cta-section">
            <h2>Prêt à déguster?</h2>
            <button className="btn-secondary">Commandez Maintenant</button>
        </section>
    </header>
  );
};

export default BasHeader;

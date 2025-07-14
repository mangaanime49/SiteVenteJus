import React from 'react';
import { ShoppingBag } from 'lucide-react';
import './Boutique.css';
import produits from './Donneejus';

const Boutique = () => {
  return (
    <div className="boutique-container">
      <h2>Notre Boutique</h2>
      <div className="produits-grid">
        {produits.length === 0 ? (
          <p>Aucun produit disponible pour le moment.</p>
        ) : (
          <>
            <p>Découvrez nos délicieux jus :</p>
            {produits.map(produit => (
              <div key={produit.id} className="produit-card">
                <img src={produit.image} alt={produit.nom} />
                <h3>{produit.nom} {produit.type}</h3>
                <p>{produit.prix} FCFA</p>
                {produit.quantite > 0 ? (
                  <p className="stock-info en-stock">En stock ({produit.quantite})</p>
                ) : (
                  <p className="stock-info rupture-stock">Rupture de stock</p>
                )}
                <p>{produit.description}</p>
                <button 
                  disabled={produit.quantite === 0}
                  className={produit.quantite === 0 ? 'disabled' : ''}
                >
                  <ShoppingBag /> 
                  {produit.quantite > 0 ? 'Ajouter au panier' : 'Indisponible'}
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Boutique;
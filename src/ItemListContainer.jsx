import React from 'react';
import './styles.css'; 

function ItemListContainer() {
  return (
      <div className="product-card">
        <img
          src=""
          alt="Product 1"
          className="product-image"
        />
        <h3 className="product-title">Paracetamol</h3>
        <p className="product-description">ANIE para bajar la inflamación.</p>
        <p className="product-price">$250</p>
        <button className="product-button">Agregar al carrito</button>
      </div>
  );
}

function LoadItems() {
  return (
    <div className="products-container">
      <ItemListContainer />
      <ItemListContainer />
      <ItemListContainer />
      <ItemListContainer />
    </div>
  );
}

export default LoadItems;

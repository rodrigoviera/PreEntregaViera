import './styles.css';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
function NavBar() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">ENDOSTORE</a>
        </div>
        <div className="navbar-items">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/acerca-de">Acerca de nosotros</a></li>
            <li><a href="/politicas">Políticas</a></li>
          </ul>
          <div className="cart">
            <i class="fas fa-shopping-cart"></i>
            <span className="cart-badge">1</span>
          </div>
        </div>
      </nav>
    );
  }
  
export default NavBar;
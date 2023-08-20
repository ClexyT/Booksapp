import { useState } from 'react';
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <input
            className="checkbox"
            type="checkbox"
            name=""
            id="menu-toggle"
            checked={menuOpen}
            onChange={handleMenuToggle}
          />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          {/* TITULO */}
          <div className='title'>Booksapp</div>
          {/* ELEMENTOS DENTRO DEL MENU */}
          <ul className={`menu-items ${menuOpen ? 'active' : ''}`}>
            <li><input type="range"></input></li>
            <li><a href="#">Ejemplo 2</a></li>
            <li><a href="#">Ejemplo 3</a></li>
            <li><a href="#">Ejemplo 4</a></li>
            <li><a href="#">Ejemplo 5 Ejemplo 6</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
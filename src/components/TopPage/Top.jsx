import { useState } from 'react';
import { SelectedBooks } from '../MidPage/Books';
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
          <div className="flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl">Booksapp</h1>
          </div>

          {/* ELEMENTOS DENTRO DEL MENU */}
          <ul className={`menu-items ${menuOpen ? 'active' : ''}`}>
            {SelectedBooks.map((book) => (
              <li key={book.id}>{book.id}</li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
import { useState } from 'react'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav>
      <div className='navbar'>
        <div className='container nav-container'>
          <input
            className='checkbox'
            type='checkbox'
            name=''
            id='menu-toggle'
            checked={menuOpen}
            onChange={handleMenuToggle}
          />
          <div className='hamburger-lines'>
            <span className='line line1' />
            <span className='line line2' />
            <span className='line line3' />
          </div>
          {/* TITULO */}
          <div className='flex items-center justify-center'>
            <h1 className='text-3xl md:text-5xl'>Booksapp</h1>
          </div>

          {/* ELEMENTOS DENTRO DEL MENU */}
          <ul className={`menu-items ${menuOpen ? 'active' : ''}`}>

            <li><a href='#'>Ejemplo 2</a></li>
            <li><a href='#'>Ejemplo 3</a></li>
            <li><a href='#'>Ejemplo 4</a></li>
            <li><a href='#'>Ejemplo 5 Ejemplo 6</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

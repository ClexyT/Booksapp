import PropTypes from 'prop-types'
import jsonBooks from '../../mocks/books.json'
import useSelectedBooks from '../../hooks/useSelectedBooks'
import { useEffect } from 'react'
import {info} from "../../../public/index"

const Books = ({ filteredBooks }) => {
  const books = jsonBooks.library
  const savedBooks = JSON.parse(localStorage.getItem('addedBook')) || []
  const initialBookStates = books.map((item) => ({
    id: item.book.ISBN,
    add: savedBooks.includes(item.book.ISBN)
  }))
  const { selectedBooks, toggleAdd, getSelectedBooks } = useSelectedBooks(initialBookStates)

  useEffect(() => {
    localStorage.setItem('addedBook', JSON.stringify(selectedBooks))
  }, [selectedBooks, getSelectedBooks])

  return (
    <div className='book-container'>
      <ul className='grid-container mt-12'>
        {filteredBooks.map((item) => (
          <li key={item.book.title}>
           <div className='imagen-hover'><img  className='z-[10]' src={item.book.cover} alt={`Portada de ${item.book.title}`} /></div> 
            <p className='#'><span className='#'>{item.book.title}</span></p>
            <div className='group relative'> 
            <img src={info} className='grid justify-items-end w-7 invert'></img> 
            <div className='absolute top-0 left-0 w-full h-0 bg-gray-800 opacity-0 group-hover:h-full group-hover:opacity-75 transition-all duration-300 '> 
            <p className='text-white text-center mt-4 cursor-default'>Más Información
            <div className="elemento z-[20]">
              <div>

                <div className="div-hover">¡Hola, soy un div</div>
              </div>
            </div>
              </p> 
            </div> 
            </div>
            <button
              className={`p-1 pr-2 mt-2 mb-0 rounded-r-lg font-bold ${
                selectedBooks.find((bookState) => bookState.id === item.book.ISBN)?.add
                  ? 'bg-red-700'
                  : 'bg-green-500'
              }`}
              onClick={() => toggleAdd(item.book.ISBN)}
            >
              {selectedBooks.find((bookState) => bookState.id === item.book.ISBN)?.add
                ? 'Eliminar'
                : 'Añadir'}

            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}
Books.propTypes = {
  filteredBooks: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default Books
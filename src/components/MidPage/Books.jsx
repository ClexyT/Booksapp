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
            <div className='hover:text-blue-300'>
             <div className='imagen-hover'><img  className='z-[10]' src={item.book.cover} alt={`Portada de ${item.book.title}`} /></div> 
              <p className=''><span className='cursor-default'>{item.book.title}</span></p>
            </div>
            <div className='group relative'> 
            
            </div>
            <button
              className={`p-1 pr-3 mt-3 mb-3 items-center rounded-r-lg font-bold  ${
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
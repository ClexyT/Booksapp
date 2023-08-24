import { useState, useEffect } from 'react'

const useSelectedBooks = (initialBookStates) => {
  if (!Array.isArray(initialBookStates)) {
    throw new Error('Initial book states must be an array.')
  }

  const [selectedBooks, setSelectedBooks] = useState(initialBookStates)

  const toggleAdd = (id) => {
    setSelectedBooks((prevSelectedBooks) =>
      prevSelectedBooks.map((book) =>
        book.id === id ? { ...book, add: !book.add } : book
      )
    )
  }

  const getSelectedBooks = (allBooks) =>
    allBooks.filter((book) =>
      selectedBooks.some((selectedBook) => selectedBook.id === book.book.ISBN && selectedBook.add)
    )

  useEffect(() => {
    // Actualiza el localStorage con los libros seleccionados
    localStorage.setItem('addedBook', JSON.stringify(selectedBooks))
  }, [selectedBooks])

  return { selectedBooks, toggleAdd, getSelectedBooks }
}

export default useSelectedBooks

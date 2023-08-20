import { useState } from 'react';
import books from '../mocks/books.json';

export const useSelect = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  // funcion para filtrar libros por genero
  const filterBooksByGenre = (genre) => {
    if (!genre) {
      return books.library; // si no se selecciona un genero devuelve todos los libros
    }
    return books.library.filter((book) => book.book.genre === genre);
  };

  // funcion para seleccionar un genero
  const selectGenre = (genre) => {
    setSelectedGenre(genre);
  };

  // funcion para deseleccionar un genero
  const clearGenreSelection = () => {
    setSelectedGenre(null);
  };
  console.log('selectedGenre:', selectedGenre);
  console.log('books:', filterBooksByGenre(selectedGenre));

  return {
    selectedGenre,
    books: filterBooksByGenre(selectedGenre),
    selectGenre,
    clearGenreSelection,
  };
};

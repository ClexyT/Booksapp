import { useState } from "react";
import jsonBooks from "../../mocks/books.json";

const Books = () => {
  let books = jsonBooks.library;

  // Crear un estado para el seguimiento de cada libro
  const [bookStates, setBookStates] = useState(
    books.map((item) => ({ id: item.book.ISBN, add: false }))
  );

  const toggleAdd = (id) => {
    const newBookStates = bookStates.map((bookState) =>
      bookState.id === id ? { ...bookState, add: !bookState.add } : bookState
    );
    setBookStates(newBookStates);
  };

  return (
    <>
      <div className="book-container">
        <ul className="grid-container mt-12">
          {books.map((item) => (
            <li key={item.book.title}>
              <img src={item.book.cover} alt={`Portada de ${item.book.title}`} />
              <p className="#">Titulo: <span className="#">{item.book.title}</span></p>
              <p className="#">Autor: <span className="#">{item.book.author.name}</span></p>
              <button
                className={`p-1 pr-2 mt-2 mb-0 rounded-r-lg ${
                  bookStates.find((bookState) => bookState.id === item.book.ISBN)?.add
                    ? "bg-red-700"
                    : "bg-green-500"
                }`}
                onClick={() => toggleAdd(item.book.ISBN)}
              >
                {bookStates.find((bookState) => bookState.id === item.book.ISBN)?.add
                  ? "Eliminar"
                  : "Añadir"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const SelectedBooks = (books) => books.filter((book) => book.add);
export default Books;
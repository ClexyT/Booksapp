import PropTypes from 'prop-types'; 
import jsonBooks from "../../mocks/books.json";
import useSelectedBooks from "../../hooks/useSelectedBooks";

const Books = ({ filteredBooks }) => {
  let books = jsonBooks.library;
  const savedBooks = JSON.parse(localStorage.getItem("addedBook")) || [];
  const initialBookStates = books.map((item) => ({
    id: item.book.ISBN,
    add: savedBooks.includes(item.book.ISBN),
  }));
  const { selectedBooks, toggleAdd, getSelectedBooks } = useSelectedBooks(initialBookStates);
  let addedBook = getSelectedBooks(books);
  console.log(addedBook)
  console.log(filteredBooks)

  return (
    <div className="book-container">
      <ul className="grid-container mt-12">
        {filteredBooks.map((item) => (
          <li key={item.book.title}>
            <img src={item.book.cover} alt={`Portada de ${item.book.title}`} />
            <p className="#">Titulo: <span className="#">{item.book.title}</span></p>
            <p className="#">Autor: <span className="#">{item.book.author.name}</span></p>
            <button
              className={`p-1 pr-2 mt-2 mb-0 rounded-r-lg font-bold ${
                selectedBooks.find((bookState) => bookState.id === item.book.ISBN)?.add
                  ? "bg-red-700"
                  : "bg-green-500"
              }`}
              onClick={() => toggleAdd(item.book.ISBN)}
            >
              {selectedBooks.find((bookState) => bookState.id === item.book.ISBN)?.add
                ? "Eliminar"
                : "Añadir"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
Books.propTypes = {
  filteredBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Books;

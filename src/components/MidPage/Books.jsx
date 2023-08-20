import jsonBooks from "../../mocks/books.json";
import useSelectedBooks from "../../hooks/useSelectedBooks";

const Books = () => {
  let books = jsonBooks.library;
  const initialBookStates = jsonBooks.library.map((item) => ({ id: item.book.ISBN, add: false }));
  const { selectedBooks, toggleAdd, getSelectedBooks } = useSelectedBooks(initialBookStates);

  let addedBook = getSelectedBooks(books)
  console.log(addedBook);

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
    </>
  );
};

export default Books;

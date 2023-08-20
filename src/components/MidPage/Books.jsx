import { useSelect } from '../../hooks/useSelect'

const Books = () => {
  const { books } = useSelect() // obtiene el valor del custom hook
  
  return (
    <>
      <div className='book-container'>
        <ul className='grid-container mt-12'>
          {books.map((item) => (
            <li key={item.book.title}>
              <img src={item.book.cover} alt={`Portada de ${item.book.title}`} />
              <p className='#'>
                Título: <span className='#'>{item.book.title}</span>
              </p>
              <p className='#'>
                Autor: <span className='#'>{item.book.author.name}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Books;

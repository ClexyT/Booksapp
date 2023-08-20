import jsonBooks from "../../mocks/books.json"
const Books = () => {
  let books = jsonBooks.library
  return (
<>
    <div className='book-container'>
        <ul className='grid-container mt-12'>
        {books.map(item=>(
            <li key={item.book.title}>
              <img src={item.book.cover} alt={`Portada de ${item.book.title}`}></img>
              <p className='#'>Titulo: <span className='#'>{item.book.title}</span></p> 
              <p className='#'>Autor: <span className='#'>{item.book.author.name}</span></p>
            </li>
        ))}
        </ul>
    </div>
</>
  )
}

export default Books
import jsonBooks from "../../books.json"
const Books = () => {
  let books = jsonBooks.library
  return (
<>
    <div>
        <ul>
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
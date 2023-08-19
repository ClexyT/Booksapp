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
            </li>
        ))}
        </ul>
    </div>
</>
  )
}

export default Books
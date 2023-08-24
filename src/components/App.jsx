import Footer from './BottomPage/Bottom'
import Books from './MidPage/Books'
import Mid from './MidPage/Mid'
import Top from './TopPage/Top'
import { Filters } from './MidPage/Filters'
import { useSelect } from '../hooks/useSelect' // Importar useSelect aquí

const App = () => {
  const { books: filteredBooks, selectedGenre, books, selectGenre, clearGenreSelection } = useSelect() // Obtener los libros filtrados del hook useSelect

  return (
    <>
      <Top />
      <Mid filteredBooks={filteredBooks} />
      <Filters selectedGenre={selectedGenre} books={books} selectGenre={selectGenre} clearGenreSelection={clearGenreSelection} />
      <Books filteredBooks={filteredBooks} />  {/* Pasar los libros filtrados como prop */}
      <Footer />
    </>
  )
}

export default App

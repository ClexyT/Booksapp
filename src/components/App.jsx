import Footer from "./BottomPage/Bottom"
import Books from "./MidPage/Books"
import { Filters } from "./MidPage/Filters"
import Mid from "./MidPage/Mid"
import Top from "./TopPage/Top"
import { useSelect } from "../hooks/useSelect";  // Importar useSelect aquí

const App = () => {
  const { books: filteredBooks } = useSelect();  // Obtener los libros filtrados del hook useSelect

  return (
    <>
      <Top />
      <Mid />
      <Filters />
      <Books filteredBooks={filteredBooks} />  {/* Pasar los libros filtrados como prop */}
      <Footer />
    </>
  )
}

export default App;

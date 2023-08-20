import Footer from "./BottomPage/Bottom"
import Books from "./MidPage/Books"
import { Filters } from "./MidPage/Filters"
import Mid from "./MidPage/Mid"
import Top from "./TopPage/Top"


const App = () => {
  return (
    <>
    <Top/>
    <Mid/>
    <Filters />
    <Books/>
    <Footer/>
    
    </>
  )
}

export default App
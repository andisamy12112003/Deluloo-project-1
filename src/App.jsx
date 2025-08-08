import Deshboard from "./components/Deshboard";
import MainPage from "./components/MainPage"
import {BrowserRouter,Routes,Route} from "react-router";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/Dashboard" element={<Deshboard/>}/>
     </Routes>
     </BrowserRouter>
  )
}

export default App




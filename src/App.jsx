import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import { useContextGlobal } from "./Components/utils/global.context";

function App() {
  const {state: {theme}} = useContextGlobal();
  document.getElementById('body').className = theme;
  return (
    <div> 
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path="/" element={<Home/>}/>
          <Route path="/contacto" element={<Contact/>}/>
          <Route path="/favs" element={<Favs/>}/>
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
       </Routes>
    </div>
  );
}

export default App;

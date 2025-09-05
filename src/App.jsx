import { BrowserRouter,Routes,Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Products" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
   </>
  );

};

export default App

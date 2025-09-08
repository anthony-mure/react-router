import { BrowserRouter,Routes,Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Products from "./pages/Products";
import DefaultLayout from "./layout/DefaultLayout";
import DetailProduct from "./pages/DetailProduct";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Products/:id" element={<DetailProduct />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );

};

export default App

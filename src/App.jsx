import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Success from "./components/Success";
import Payment from "./components/Payment";
import ScrollToTop from "./scrollTop";

//! Router V6!!!
// in Products categories we can add instead of categories ( ex all,women ,blue, xl)
//  !Product example http://localhost:3000/product/hjsjskhjskhks
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;

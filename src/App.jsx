import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList"
import Register from "./pages/Register"
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
          
        <Route path="/products/:category" element={<ProductList />} /> 
          
        <Route path="/product/:id" element={<Product />} />
          
        
        <Route path="/cart" element={<Cart />} />

        user : 
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login />  } />


        <Route path="/register" element={user ? <Navigate to="/"/> : <Register />  } />
          
        {/* <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;

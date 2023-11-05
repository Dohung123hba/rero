import './App.css';
import { Routes, Route } from "react-router-dom"
import DefaultUI from './default';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <>
      <Routes>
        <Route path="/" element={<DefaultUI />}>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
    </>
  );
}

export default App;

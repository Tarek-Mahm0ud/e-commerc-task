import Slider from './components/slider';
import Navbar from './components/navbar';
import ProductsList from './components/productslist';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import ProductDetails from './components/ProuductDetails';
import Products from './components/products';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />

      </Routes>

    </div>
  );
}

export default App;

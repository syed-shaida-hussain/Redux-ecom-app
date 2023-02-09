import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LandingPage } from './common/pages/landingpage/landingPage';
import { ProductListingPage } from './common/pages/productListingPage/productListingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SignupPage } from './common/pages/Authentication/signupPage';
import { LandingPage } from './common/pages/landingpage/landingPage';
import { ProductListingPage } from './common/pages/productListingPage/productListingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;

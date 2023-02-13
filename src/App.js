import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SignupPage } from './common/pages/Authentication/signupPage';
import { LandingPage } from './common/pages/landingpage/landingPage';
import { ProductListingPage } from './common/pages/productListingPage/productListingPage';
import { SingleProductPage } from './common/pages/singleProductPage/singleProductPage';
import { RequireAuth } from './common/components/requireAuth';
import { CartPage } from './common/pages/cartPage/cartPage';
import { WishlistPage } from './common/pages/wishlistPage/wishlistPage';
import { Header } from './common/components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path={`products/:productId`} element={<SingleProductPage />} />
        <Route path="/" element={<RequireAuth />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SignupPage } from './common/pages/Authentication/signupPage';
import { ProductListingPage } from './common/pages/productListingPage/productListingPage';
import { SingleProductPage } from './common/pages/singleProductPage/singleProductPage';
import { RequireAuth } from './common/components/requireAuth';
import { CartPage } from './common/pages/cartPage/cartPage';
import { WishlistPage } from './common/pages/wishlistPage/wishlistPage';
import { Header } from './common/components/header';
import { PageNotFound } from './common/components/notFound';
import { LoginPage } from './common/pages/Authentication/loginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './common/components/checkout';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListingPage />} />
        <Route path="/home" element={<ProductListingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path={`products/:productId`} element={<SingleProductPage />} />
        <Route path="/" element={<RequireAuth />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;

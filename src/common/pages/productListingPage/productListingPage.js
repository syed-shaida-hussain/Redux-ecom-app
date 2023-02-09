import './productListingPage.css';
import { ProductListing } from '../../../features/products/productListing';
import { Header } from '../../components/header';

const ProductListingPage = () => {
  return (
    <div>
      <Header />
      <ProductListing />
    </div>
  );
};

export { ProductListingPage };

import './productListingPage.css';
import { ProductListing } from '../../../features/products/productListing';
import { FilterDrawer } from '../../components/drawer';

const ProductListingPage = () => {
  return (
    <div>
      <FilterDrawer />
      <ProductListing />
    </div>
  );
};

export { ProductListingPage };

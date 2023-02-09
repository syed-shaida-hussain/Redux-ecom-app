import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productSlice';
import '../../style/utils.css';
import Rating from '@mui/material/Rating';

const ProductListing = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="flex-r wrap ">
        {products.map((product) => (
          <div key={product._id} className="product-container flex-c pb1">
            {product.fastDelivery && <span className="chip mt1 ">Fast Delivery</span>}
            <img className="product-img" src={product.src.url} alt={product.src.alt} />
            <div className="ml1">
              <h3 className="mb-min mt-min">{product.brand}</h3>
              <div className="bold mb-min">{product.name}</div>
              <div className="mb-min">
                <span className="mr-half og-price">Rs. {product.originalPrice}</span>
                <span className="bold">{product.discountedPrice}</span>
              </div>
              <Rating
                name="half-rating-read"
                defaultValue={product.rating}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProductListing };

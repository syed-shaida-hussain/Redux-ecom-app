import './singleProductPage.css';
import '../../../style/utils.css';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/header';
import { Button } from '@mui/material';
import { addToCartButtonClicked, fetchCartItems } from '../../../features/products/productSlice';
import { useEffect } from 'react';

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const { singleProduct, cartItems } = useSelector((store) => store.products);
  const addToCartHandler = () => {
    dispatch(addToCartButtonClicked(singleProduct));
  };
  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <div className="flex-r single-product-container p-min ml1 mt1 ">
        <img
          className="single-product-img"
          src={singleProduct?.src?.url}
          alt={singleProduct?.url?.alt}
        />
        <div className="ml1 mr1 mb1">
          <h3 className="mb-min mt-min">{singleProduct?.brand}</h3>
          <div className="bold mb-min">{singleProduct?.name}</div>
          <div className="mb-min">
            <span className="mr-half og-price">Rs. {singleProduct?.originalPrice}</span>
            <span className="bold">{singleProduct?.discountedPrice}</span>
          </div>
          <div className="bold u-case mb-min"> Category : {singleProduct?.category}</div>
          <div className="bold mb-min">{singleProduct?.cod && 'COD Available'}</div>
          <div className="bold ">{singleProduct?.fastDelivery && 'Fast Delivery Available'}</div>
          <div className=" u-case mb1">15 day replacement policy available.</div>
          <span className="mr1">
            {cartItems?.find((product) => product._id === singleProduct._id) ? (
              <Button variant="contained" onClick={() => console.log('cart')}>
                Go to cart
              </Button>
            ) : (
              <Button variant="contained" onClick={() => addToCartHandler()}>
                Add to cart
              </Button>
            )}
          </span>
          <Button variant="outlined">Add to Wishlist</Button>
        </div>
      </div>
    </div>
  );
};

export { SingleProductPage };

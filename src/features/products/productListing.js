import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchSingleProduct } from './productSlice';
import '../../style/utils.css';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router';

const ProductListing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, products } = useSelector((store) => store.products);
  const { showCodOnly, showFastDeliveryOnly, sortBy, categories, rateBy } = useSelector(
    (store) => store.filters
  );

  function getSortedData(sortedList, sortBy) {
    if (sortBy && sortBy === 'PRICE_HIGH_TO_LOW') {
      return sortedList.slice().sort((a, b) => b['discountedPrice'] - a['discountedPrice']);
    }
    if (sortBy && sortBy === 'PRICE_LOW_TO_HIGH') {
      return sortedList.slice().sort((a, b) => a['discountedPrice'] - b['discountedPrice']);
    }
    return sortedList;
  }

  function getFilteredData(filteredList, rateBy, categories) {
    if (rateBy && rateBy === '4_STARS_AND_ABOVE') {
      if (categories.length > 0) {
        return filteredList
          .filter(({ category }) => categories.includes(category))
          .filter(({ rating }) => rating >= 4);
      } else {
        return filteredList.filter(({ rating }) => rating >= 4);
      }
    }
    if (rateBy && rateBy === '3_STARS_AND_ABOVE') {
      if (categories.length > 0) {
        return filteredList
          .filter(({ category }) => categories.includes(category))
          .filter(({ rating }) => rating >= 3);
      } else {
        return filteredList.filter(({ rating }) => rating >= 3);
      }
    }
    if (rateBy && rateBy === '2_STARS_AND_ABOVE') {
      if (categories.length > 0) {
        return filteredList
          .filter(({ category }) => categories.includes(category))
          .filter(({ rating }) => rating >= 2);
      } else {
        return filteredList.filter(({ rating }) => rating >= 2);
      }
    }
    if (rateBy && rateBy === '1_STARS_AND_ABOVE') {
      if (categories.length > 0) {
        return filteredList
          .filter(({ category }) => categories.includes(category))
          .filter(({ rating }) => rating >= 1);
      } else {
        return filteredList.filter(({ rating }) => rating >= 1);
      }
    }
    if (categories.length > 0) {
      return filteredList.filter(({ category }) => categories.includes(category));
    }
    return filteredList;
  }

  function getAllFilteredData(sortedList, filteredList, { showCodOnly, showFastDeliveryOnly }) {
    return filteredList
      .filter(({ cod }) => (showCodOnly ? cod : true))
      .filter(({ fastDelivery }) => (showFastDeliveryOnly ? fastDelivery : true));
  }

  const sortedData = getSortedData(products, sortBy);
  const filters = getFilteredData(sortedData, rateBy, categories);
  const filteredData = getAllFilteredData(sortedData, filters, {
    showCodOnly,
    showFastDeliveryOnly
  });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch]);

  const getSingleProduct = (product) => {
    dispatch(fetchSingleProduct(product));
    navigate(`/products/${product._id}`);
  };

  return (
    <div>
      {status === 'loading' ? (
        <div className="centered mt1">Loading....</div>
      ) : (
        <div>
          <div className="flex-r wrap">
            {filteredData.map((product) => (
              <div
                key={product._id}
                className="product-container flex-c pb1"
                onClick={() => getSingleProduct(product)}>
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
      )}
    </div>
  );
};

export { ProductListing };

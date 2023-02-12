import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productSlice';
import '../../style/utils.css';
import Rating from '@mui/material/Rating';
import ReactPaginate from 'react-paginate';

const ProductListing = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const productsPerPage = 8;
  const usersVisited = pageNumber * productsPerPage;
  const pageCount = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const changePageHandler = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayProducts = products
    .slice(usersVisited, usersVisited + productsPerPage)
    .map((product) => (
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
          <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
        </div>
      </div>
    ));

  return (
    <div>
      <div className="flex-r wrap"> {displayProducts}</div>
      <ReactPaginate
        previousLabel="Prev"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={changePageHandler}
        containerClassName={'pagination-buttons'}
        activeClassName={'pagination-active-btn'}
      />
    </div>
  );
};

export { ProductListing };
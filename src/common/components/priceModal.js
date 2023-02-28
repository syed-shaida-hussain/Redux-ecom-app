import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const PriceModal = () => {
  const { cartItems, totalCartPrice } = useSelector((store) => store.products);
  const navigate = useNavigate();
  return (
    <div className="price-modal p1 mt1">
      <div className="u-case pr-clr ft-lg bold mb-min">Price details</div>
      <div className="hr mb-min"></div>
      <div className="mb-min">
        <span className="mr1">Price ({cartItems.length} items) </span>
        <span>Rs. {totalCartPrice}</span>
      </div>
      <div className="mb-min">
        <span className="mr1">Delivery charges </span>
        <span>Rs. 99</span>
      </div>
      <div className="hr mb-min"></div>
      <div className="mb-min">
        <span className="mr1">Total Cart Price </span>
        <span>Rs. {totalCartPrice + 99}</span>
      </div>
      <div className="hr mb-min"></div>
      <div className="place-order-btn">
        <Button variant="contained" onClick={() => navigate('/checkout')}>
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
};

export { PriceModal };

import Logo from '../../assets/logo.svg';
import { Button, Badge } from '@mui/material';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';
import { resetUserData } from '../../features/products/productSlice';

const Header = () => {
  const { cartItems, wishlistItems } = useSelector((store) => store.products);
  const { authStatus } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    dispatch(resetUserData());
    localStorage.removeItem('ENCODED_TOKEN');
    toast.success('You have been Logged out successfully');
  };

  return (
    <nav className="header-nav flex-r sp-bw ml-min mr-min mt-half ctr-vert">
      <div className="flex-r ctr-vert sp-bw sub-nav">
        <img src={Logo} alt="logo" className="logo " />
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? 'sidebar-link-active link' : ' link ')}>
          <Button className={'btn'} variant="text">
            Home
          </Button>
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active-link' : ' link ')}>
          <Button className={'btn'} variant="text">
            Products
          </Button>
        </NavLink>
      </div>

      <ul className="flex-r sub-nav sp-bw ctr-vert">
        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active-link' : ' link ')}>
          <Badge badgeContent={cartItems?.length} color="success">
            <ShoppingCartCheckoutOutlinedIcon className="icon" />
          </Badge>
        </NavLink>
        <NavLink
          to="/wishlist"
          className={({ isActive }) => (isActive ? 'active-link ml1' : ' link ml1')}>
          <Badge badgeContent={wishlistItems?.length} color="success">
            <FavoriteBorderOutlinedIcon className="icon" />
          </Badge>
        </NavLink>
        {!authStatus ? (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? 'active-link ml1' : ' link ml1 ')}>
            <AccountBoxOutlinedIcon className="icon" />
          </NavLink>
        ) : (
          <Button sx={{ marginLeft: '1rem' }} variant="contained" onClick={() => logoutHandler()}>
            Logout
          </Button>
        )}
      </ul>
    </nav>
  );
};

export { Header };

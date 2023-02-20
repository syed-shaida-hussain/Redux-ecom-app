import Logo from '../../assets/logo.svg';
import { Button, TextField, Badge } from '@mui/material';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { cartItems, wishlistItems } = useSelector((store) => store.products);
  const location = useLocation();
  return (
    <nav className="header-nav flex-r sp-bw ml1 mr1 mt-half ctr-vert">
      <div className="flex-r ctr-vert logo-container sp-bw">
        <img src={Logo} alt="logo" className="logo ml1" />
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? 'sidebar-link-active link' : ' link ')}>
          <Button variant="text">Home</Button>
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active-link' : ' link ')}>
          <Button variant="text">Products</Button>
        </NavLink>
      </div>
      {location.pathname === '/products' && (
        <TextField
          id="filled-basic"
          className="input-field"
          label="Search products...."
          variant="outlined"
        />
      )}

      <ul className="flex-r sub-nav sp-bw">
        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active-link' : ' link ')}>
          <Badge badgeContent={cartItems.length} color="success">
            <ShoppingCartCheckoutOutlinedIcon className="icon" />
          </Badge>
        </NavLink>
        <NavLink to="/wishlist" className={({ isActive }) => (isActive ? 'active-link' : ' link ')}>
          <Badge badgeContent={wishlistItems.length} color="success">
            <FavoriteBorderOutlinedIcon className="icon" />
          </Badge>
        </NavLink>
        <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : ' link ')}>
          <AccountBoxOutlinedIcon className="icon" />
        </NavLink>
      </ul>
    </nav>
  );
};

export { Header };

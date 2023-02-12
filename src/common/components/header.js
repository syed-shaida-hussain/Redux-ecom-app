import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Logo from '../../assets/logo.svg';
import { Button, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header-nav flex-r sp-bw ml1 mr1 mt-half ctr-vert">
      <div className="flex-r ctr-vert logo-container sp-bw">
        <img src={Logo} alt="logo" className="logo" />
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? 'sidebar-link-active link' : ' link ')}>
          <Button variant="text">Home</Button>
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active-link' : ' link ')}>
          <Button variant="text">Products</Button>
        </NavLink>
      </div>
      <TextField
        id="filled-basic"
        className="input-field"
        label="Search here...."
        variant="outlined"
      />
      <ul className="flex-r sub-nav sp-bw">
        <LocalMallIcon className="icon" />
        <FavoriteIcon className="icon" />
        <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active-link' : ' link ')}>
          <AccountBoxIcon className="icon" />
        </NavLink>
      </ul>
    </nav>
  );
};

export { Header };

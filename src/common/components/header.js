import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Button, TextField } from '@mui/material';
import Logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <nav className="header-nav flex-r sp-bw ml1 mr1 mt-half ctr-vert">
      <div className="flex-r logo-container sp-bw">
        <img src={Logo} alt="logo" className="logo" />
        <Button variant="text">Products</Button>
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
        <AccountBoxIcon className="icon" />
      </ul>
    </nav>
  );
};

export { Header };

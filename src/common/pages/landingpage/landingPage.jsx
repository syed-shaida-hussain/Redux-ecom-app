import './landingPage.css';
import '../../../style/utils.css';
import { Button } from '@mui/material';
import { Header } from '../../components/header';
import BgImage from '../../../assets/ecom-cover.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNavigate } from 'react-router';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="flex-c ctr-vert ctr-hor">
        <img className="bg-img" style={{ backgroundImage: `url(${BgImage})` }} />
        <div className="overlay-text">
          <div>Redefined Performance</div>
          <div>Clothing and Accessiories.</div>
          <div className="explore-btn">
            <Button variant="contained" onClick={() => navigate('/products')}>
              Explore products
            </Button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <InstagramIcon className="icon mr1" />
        <TwitterIcon className="icon mr1" />
        <GitHubIcon className="icon" />
      </footer>
    </div>
  );
};

export { LandingPage };

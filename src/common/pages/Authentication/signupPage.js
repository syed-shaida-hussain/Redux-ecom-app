import { Signup } from '../../../features/auth/signup';
import { Header } from '../../components/header';
import './auth.css';

const SignupPage = () => {
  return (
    <div>
      <Header />
      <Signup />
    </div>
  );
};

export { SignupPage };

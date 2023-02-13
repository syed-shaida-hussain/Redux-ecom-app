import '../../style/utils.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerNewUser } from './authSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const initialUserData = { firstName: '', lastName: '', email: '', password: '' };
  const [user, setUser] = useState(initialUserData);
  const signupSubmitHandler = () => {
    try {
      if (location.state != null) {
        console.log(location);
        navigate(location.state.from.pathname);
      } else {
        navigate('/products');
      }
      dispatch(registerNewUser(user));
      setUser(initialUserData);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="signup-form-container flex-c ctr-vert mt1 mb1 ">
      <h2 className="mb1 pr-clr">Signup</h2>
      <form
        className="signup-form p1 flex-c "
        onSubmit={(e) => {
          e.preventDefault();
          signupSubmitHandler();
        }}>
        <TextField
          // required
          type="text"
          value={user.firstName}
          id="standard-basic"
          label="FirstName"
          variant="standard"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <TextField
          // required
          type="text"
          value={user.lastName}
          id="standard-basic1"
          label="LastName"
          variant="standard"
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <TextField
          // required
          type="email"
          value={user.email}
          id="standard-basic2"
          label="Email"
          variant="standard"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          // required
          type="password"
          value={user.password}
          id="standard-basic3"
          label="Password"
          variant="standard"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button type="submit" variant="outlined">
          Signup
        </Button>
      </form>
    </div>
  );
};

export { Signup };

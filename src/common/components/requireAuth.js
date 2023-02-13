import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const RequireAuth = ({ children }) => {
  const { encodedToken } = useSelector((store) => store.auth);
  console.log(encodedToken);
  const location = useLocation;
  return encodedToken ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace={true} />
  );
};

export { RequireAuth };

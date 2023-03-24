import { Navigate} from 'react-router-dom';

interface props {
    children: JSX.Element
}

const PrivateRoute = ({children}:props) => {
  const token = localStorage.getItem('token');
    if(!token) return <Navigate to="/" />;

    return <>{children}</>
};

export default PrivateRoute;

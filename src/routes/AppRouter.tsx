import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import Dashboard from "../pages/dasboard/Dashboard";
import PrivateRoute from './PrivateRoute';
import User from "../pages/user/User";

type Props = {};

const AppRouter = (props: Props) => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user" element={<User />} />
        <Route path='*' element={<>NOT FOUND</>}/>
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

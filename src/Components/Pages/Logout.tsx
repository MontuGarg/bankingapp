import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you use React Router for navigation
import { UserContext } from '../../Routes/AllRoutes';
const Logout = () => {
    const userContext = useContext(UserContext);
  const history = useNavigate();

  const handleLogout = () => {
    userContext?.setIsLogin(false);
    localStorage.setItem('islogin',"false");
    history("/");
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
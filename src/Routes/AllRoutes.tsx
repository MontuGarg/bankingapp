import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Components/Pages/Login';
import Register from '../Components/Pages/Register';
import Logout from '../Components/Pages/Logout';
import Sidebar from '../Components/Sidebar/Sidebar';
import Settings from '../Components/Pages/Settings';

type UserContextType = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const AllRoutes = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  let localLogin = JSON.parse(localStorage.getItem("islogin") || "false");
  useEffect(() => {
    let localLogin = JSON.parse(localStorage.getItem("islogin") || "false");
    setIsLogin(localLogin);
  }, [isLogin]);

  return (
    <UserContext.Provider value={{ isLogin, setIsLogin }}>
      
      <div className="app">
      {isLogin && <Sidebar />}
      <div className="main-content">
      {isLogin && <Logout/>}
      <Routes>
        <Route path='/' element={localLogin ? <Home /> : <Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/settings' element={<Settings />} />
        
      </Routes>
      </div>
      </div>
    </UserContext.Provider>
  );
};

export { UserContext, AllRoutes };
export default AllRoutes;

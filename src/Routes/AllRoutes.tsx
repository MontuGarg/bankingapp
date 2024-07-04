import React, { createContext, useState} from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Components/Pages/Login';
import Register from '../Components/Pages/Register';

type UserContextType = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const AllRoutes = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ isLogin, setIsLogin }}>
        <Routes>
        <Route path='/' element={isLogin ? <Home /> : <Login />} />
        <Route path='/register' element={<Register/>} />
        </Routes>
    </UserContext.Provider>
  );
};

export { UserContext, AllRoutes };
export default AllRoutes;


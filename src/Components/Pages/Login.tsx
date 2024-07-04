import React, { ChangeEvent, useContext, useState } from 'react';
import { UserContext } from '../../Routes/AllRoutes'; // Adjust the import path as necessary
import { ILogin } from '../Interfaces/Interface';
import { Link } from 'react-router-dom';

const Login = () => {
  const userContext = useContext(UserContext);
  const [login,setLogin]=useState<ILogin>({
    username:"",
    password:""
  })
 const {username, password}=login

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setLogin({...login,[name]:value});
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (password === 'hello' && username === 'montu') {
      if (userContext) {
        userContext.setIsLogin(true);
      }
    }
    console.log({ username, password, isLogin: userContext?.isLogin });
  };

  return (
    <div>
      <form>
        <input type='text' name='username' value={username} onChange={handleChange} />
        <input type='password' name='password' value={password} onChange={handleChange} />
        <button id='Login' onClick={handleSubmit}>Login</button>
        <Link to={"/register"}>Register</Link>
      </form>
      
    </div>
  );
};

export default Login;

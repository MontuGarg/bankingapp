import React, { ChangeEvent, useContext, useState } from 'react';
import { UserContext } from '../../Routes/AllRoutes'; // Adjust the import path as necessary
import { ILogin } from '../Interfaces/Interface';
import { Link } from 'react-router-dom';
import axios from "axios";
import { CiUser } from "react-icons/ci";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";


const Login = () => {
  const userContext = useContext(UserContext);
  const [login, setLogin] = useState<ILogin>({
    username: "",
    password: ""
  });
  const { username, password } = login;
  const [showPassword, setShowPassword] = useState(false);


  const Passowrdvisible = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    if (password.trim() && username.trim()) {
      if (userContext) {
        try {
          const res = await axios.post("http://localhost:8000/CheckLogin", login);
          if (res.data.message === "Success") {
            userContext.setIsLogin(true);
            localStorage.setItem("islogin", "true");
          } else {
            setLogin({ ...login, password: "" });
            alert(res.data.message);
          }
        } catch (error) {
          console.error("Login error:", error);
        }
      }
    }
  };

  return (
    <div className='background'>
    <div className="form-container ">
      <form>
        <h2 className="text-center mb-4">Login</h2>
        <div className="form-group mb-3 position-relative">
            <input 
              type="text" 
              name="username" 
              className="form-control mb-3 rounded"
              value={username} 
              onChange={handleChange} 
              placeholder="Username"
            />
            <CiUser className="input-icon" />
          </div>
          <div className="form-group mb-3 position-relative">
            <input 
              type={showPassword ? "text" : "password"} 
              name="password"
              className="form-control mb-3 rounded" 
              value={password} 
              onChange={handleChange} 
              placeholder="Password"
            />
            {showPassword ? (
              
              <AiOutlineEye className="password-icon" onClick={Passowrdvisible} />
            ) : (
              <AiOutlineEyeInvisible className="password-icon" onClick={Passowrdvisible} />
            )}
          </div>
        <button id="Login" className="btn btn-primary w-50 mb-3 login-button" onClick={handleSubmit}>Login</button>
        <Link to={"/register"} className="d-block text-center">Register</Link>
      </form>
    </div>
  </div>
  );
};

export default Login;

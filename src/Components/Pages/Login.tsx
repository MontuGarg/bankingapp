import React, { ChangeEvent, useContext, useState } from 'react';
import { UserContext } from '../../Routes/AllRoutes'; // Adjust the import path as necessary
import { ILogin } from '../Interfaces/Interface';
import { Link } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const userContext = useContext(UserContext);
  const [login, setLogin] = useState<ILogin>({
    username: "",
    password: ""
  });
  const { username, password } = login;

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

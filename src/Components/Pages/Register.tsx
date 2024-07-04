import React, { ChangeEvent, useState, useContext } from 'react';
import { UserContext } from '../../Routes/AllRoutes'; // Adjust the import path as necessary

interface IRegister {
  name: string;
  email: string;
  password: string;
  accountNumber: string;
  phone: string;
}

const Register = () => {
  const userContext = useContext(UserContext);
  const [registerData, setRegisterData] = useState<IRegister>({
    name: '',
    email: '',
    password: '',
    accountNumber: '',
    phone: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    // Add your registration logic here
    console.log(registerData);
    if (userContext) {
       // Example: Set login state on successful registration
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={registerData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={registerData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={registerData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Account Number:</label>
          <input type="text" name="accountNumber" value={registerData.accountNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" name="phone" value={registerData.phone} onChange={handleChange} required />
        </div>
        <button onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
};

export default Register;

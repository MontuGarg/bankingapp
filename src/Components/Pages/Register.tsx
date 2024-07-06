import React, { ChangeEvent, useState } from 'react';
// import { UserContext } from '../../Routes/AllRoutes'; // Adjust the import path as necessary
import axios from 'axios';
interface IRegister {
  firstName:string;
  lastname:string;
  password:string;
  idProofType:string;
  idNumber:string
}

const Register = () => {
  // const userContext = useContext(UserContext);
  const [registerData, setRegisterData] = useState<IRegister>({
    firstName: '',
    lastname: '',
    password: '',
    idProofType: '',
    idNumber: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    // Add your registration logic here
    console.log(registerData);
    
        axios.post("http://localhost:8000/RegisterUser",registerData).then(res=>{
          alert(res.data.message);
        })
       // Example: Set login state on successful registration
    
  };

  return (
    <div>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="firstName" value={registerData.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="lastname" value={registerData.lastname} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={registerData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Account Number:</label>
          <input type="text" name="idProofType" value={registerData.idProofType} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" name="idNumber" value={registerData.idNumber} onChange={handleChange} required />
        </div>
        <button onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
};

export default Register;

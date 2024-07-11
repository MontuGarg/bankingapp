import React, { ChangeEvent, useState } from 'react';
// import { UserContext } from '../../Routes/AllRoutes'; // Adjust the import path as necessary
import axios from 'axios';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
interface IRegister {
  firstName:string;
  lastname:string;
  password:string;
  idProofType:string;
  idNumber:string
}

const Register = () => {
  // const userContext = useContext(UserContext);
  const [showPassword,setShowPassword]=useState(false)
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
  const Passowrdvisible = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="sign-up">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6 left-side">
        <div className="brand"> 
          <img src="/images/bankinglogo.jpeg" alt="Banking Logo" />
        </div>
        <div className="welcome-content">
          <h1 className="heading">Welcome to MP BANK</h1>
          <div className="group-image mt-5">
            <img src="/images/signin.jpg" className="img-fluid" alt="Sign Up" />
          </div>
        </div>
      </div>
      <div className="col-md-6 right-side">
        <div className='form-container'>
        <form>
          <h2 className="text-center mb-4">Register Form</h2>
          <input 
            type="text" 
            name="firstName" 
            className="form-control mb-3 rounded"
            value={registerData.firstName} 
            onChange={handleChange} 
            placeholder="First Name"
            required 
          />
          <input 
            type="text"
            name="lastname"
            className="form-control mb-3 rounded"
            value={registerData.lastname} 
            onChange={handleChange} 
            placeholder="Last Name"
            required 
          />
          <div className='form-group mb-3 position-relative'>
          <input 
            type={showPassword? "text":"password"} 
            name="password"
            className="form-control mb-3 rounded" 
            value={registerData.password} 
            onChange={handleChange} 
            placeholder="Password"
            required 
          />
           {
            showPassword ? (
              <AiOutlineEye className="password-icon" onClick={Passowrdvisible} />
            ):(
              <AiOutlineEyeInvisible className="password-icon" onClick={Passowrdvisible} />
            )
          }
          </div>
          <input 
            type="text" 
            name="idProofType"
            className="form-control mb-3 rounded" 
            value={registerData.idProofType} 
            onChange={handleChange} 
            placeholder="Account Number"
            required 
          />
          <input 
            type="tel" 
            name="idNumber"
            className="form-control mb-3 rounded" 
            value={registerData.idNumber} 
            onChange={handleChange} 
            placeholder="Phone"
            required 
          />
          <button id="Register" className="btn btn-primary w-100" onClick={handleSubmit}>Register</button>
        </form>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Register;

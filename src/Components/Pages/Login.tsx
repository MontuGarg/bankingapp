import React, { ChangeEvent,useState } from 'react'
import { ILogin } from '../Interfaces/Interface';

const Login = () => {
 const [login,setLogin] =useState<ILogin>();
 const [username,setUsername] =useState<string>();
 const [password,setpassword] =useState<any>();
 const handleChange=(e : ChangeEvent<HTMLInputElement>) : void=>{
    if(e.target.name==="username"){
        setUsername(e.target.value);
    }
    else{
        setpassword(e.target.value);
    }
    
 }

  return (
    <div>
       <form>
       <input type='text'name="username" value={username} onChange={handleChange}></input>
       <input type='password'value={password} onChange={handleChange}></input>
       </form>
    </div>
  )
}

export default Login

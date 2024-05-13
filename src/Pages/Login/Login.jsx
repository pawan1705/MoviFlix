import React, { useState } from 'react'
import {login,signup} from '../../firebase';
import './Login.css';
import logo from '../../assets/logo.png';
import spinner from '../../assets/loader3.gif';
const Login = () => {
  const [signState,setSignState]=useState("Sign Up");
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[loader,setLoader]=useState(false);

  const user_auth=async(e)=>{
    e.preventDefault();
    setLoader(true);
    if(signState==="Sign In"){
      await login(email, password);
    }else{
      await signup(name,email,password);
    }
    setLoader(false);
  }
  return (
    loader? <div className="loader">
      <img src={spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {
            signState ==="Sign Up"?<input type="text"  placeholder='your name' value={name} onChange={(e)=>{setName(e.target.value)}} />:<></>
          }
          
          <input type="email"  placeholder='your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <input type="password"  placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type='checkbox'/>
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {
            signState ==="Sign Up"?<p>Already have account?<span onClick={()=>{setSignState("Sign In")}}> Sign In Now</span></p>:
            <p>New to MoviFlix<span onClick={()=>{setSignState("Sign Up")}}> Sign Up Now</span></p>
          }
          
          
        </div>
      </div>
    </div>
  )
}

export default Login
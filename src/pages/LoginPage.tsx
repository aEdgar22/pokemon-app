import { useState } from 'react';
import { HiEye, HiEyeOff } from "react-icons/hi";
import useForm from '../hooks/useForm';
import isEmailValid from '../utils/validateEmail';

const LoginPage = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const { handleChange, values } = useForm({email:"", password:""});
  const {email, password} = values

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  }

  return (
    <div>
      <h1>login page</h1>
      <form>
        <input 
          type="email"
          placeholder='ingresa tu email' 
          name='email'
          value={email}
          onChange={e => {
            if (isEmailValid(e.target.value)) {
              handleChange(e);
            }
          }}
          required
        />
        <div style={{position: 'relative', border: "1px solid red", width: "20rem"}}>
          <input 
            type={isPasswordHidden ? 'password' : 'text'} 
            placeholder='password' 
            name='password'
            value={password}
            onChange={handleChange}
          />
          <button 
            type='button' 
            onClick={togglePasswordVisibility} 
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {isPasswordHidden ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage;
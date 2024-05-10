import React from 'react'
import './check-email.css'
import humanlogo from '../../Assests/icons8-person-64.png'
import googlelogo from '../../Assests/icons8-google-48.png'


export const CheckEmail = () => {
  return (
    <section className='container'>
        <div className='login'>
          <div className='icon1'>
          <img src={humanlogo} alt="Logo" className='humanlogo'/>
          </div>
          <h1>Log in to your account</h1>
          <p className="Welcome">Welcome back! please enter your details</p>
          <p> Email</p>
          <input type='email' className='email' placeholder='example@email.com' />
          <p>Password</p>
          <input type='password' className='password' placeholder='Password' />
          <a href="#" class="forgot-password">Forgot Password?</a>
          <button className="loginBtn">Login</button>
          <button className="googleBtn"><img src={googlelogo} alt='Logo' className='googlelogo' /> Sign in with Google</button>
          <p class="last-line"> Don't have an account? <a href="#" class="sign-up">Sign Up</a></p>
        </div>
    </section>
  )
}

export default CheckEmail
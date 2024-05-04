import React, { useState } from 'react';

const PasswordResetForm = () => {
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    // console.log('New Password:', password);
    // You can add your API call here to send the email and new password to the server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='email'>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter you email'/>
      </label>
      {/* <label>
        New Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label> */}
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default PasswordResetForm;
import React from 'react';
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';
import PasswordResetForm from '../Components/PasswordResetForm';
import PadLock from '../../src/uil_padlock.png';

const PasswordResetPage = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="container">
      <img src={PadLock} alt='Lock' />
        <h1>Forgot password</h1>
        <p>Please enter your mail to reset password</p>
        <PasswordResetForm />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default PasswordResetPage;
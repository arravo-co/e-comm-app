import React from 'react';
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';
import PasswordResetForm from '../Components/PasswordResetForm';

const PasswordResetPage = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="container">
        <h2>Password Reset</h2>
        <PasswordResetForm />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default PasswordResetPage;
import { useState } from "react";
import Homepage from "./Pages/Homepage/homepage";
import CheckEmail from "./Pages/CheckEmail/check-email";
import {Link, Route, Routes} from 'react-router-dom';

function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/check-email" element={<CheckEmail />} />
    </Routes>
   </>
  );
}

export default App;

/* App.jsx*/

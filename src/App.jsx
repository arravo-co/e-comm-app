import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/signup/SignUp";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUpPage />} /> 
      </Routes>
    </>
  )
}

export default App

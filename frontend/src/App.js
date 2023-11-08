import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Heading from './Components/Heading/Heading';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/LoginSignUp/Login';
import Signup from './Components/LoginSignUp/SignUp';
import Logout from './Components/Logout/Logout';

function App() {
  const hasToken = !!localStorage.getItem('token');

  return (
    <Router>
      <>
        <Heading />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {hasToken ? (
            <Route path="/logout" element={<Logout />} />
          ) : (
            <Navigate to="/signIn" replace />
          )}
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

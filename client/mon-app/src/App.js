import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Profile from './Components/Profile';


function App() {
 
  return (
    <div className="App">
  <Router>
    <Routes>
      <Route path="/" element={<SignUp/>} />
      <Route path='/login' element={<Login/>} />
      <Route path="/profile"  element={<Profile/>} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;

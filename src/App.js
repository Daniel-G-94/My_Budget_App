
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Signup } from './pages/registration/Singup';
import { Navbar } from './components/Navbar';
import { useAuthContext } from './customHooks/useAuthContext';
import { SearchByCategory } from './pages/Filter/SearchByCategory';


function App() {
  const {authIsReady,user}= useAuthContext()


  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
        <Navbar />
          <Routes>
            {user &&
            <Route path="/" element={<Home/>} />}
            
            <Route path="/category" element={<SearchByCategory/>} />
            <Route path="/" element={<Navigate replace to="/login" />} />
            {!user &&
            <Route path="/login" element={<Login/>} />}
            <Route path="/login" element={<Navigate replace to="/" />} />
            {!user &&
            <Route path="/signup" element={<Signup/>} />}
            <Route path="/signup" element={<Navigate replace to="/" />} />
          </Routes>
        
      </BrowserRouter>
      )}
    </div>
  );
}

export default App

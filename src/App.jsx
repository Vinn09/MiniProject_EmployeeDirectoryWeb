import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Home from "./pages/home";
import DetailUser from './pages/detailUser';
import ProtectedRoute from './component/ProtectedRoute';
import LandingPage from './pages/landingPage';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}/>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/detail/:id' element={<ProtectedRoute><DetailUser /></ProtectedRoute>}></Route>
            <Route path='/landingPage' element={<LandingPage/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App

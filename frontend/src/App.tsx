import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// import LandingPageHeader from './user/sections/LandingPageHeader';
// import RegisterShop from './user/sections/shop/RegisterShop';
// import ChangePassword from './user/pages/ChangePassword';
import Login from './components/auth/Login';
import { ForgotPassword, ResetPassword, Signup } from './components/auth';
import ChangePassword from './components/auth/ChangePassword';
import MoviePlayer from './components/Play/MoviePlayer';
import LandingPage from './sections/LandingPage';
import AdminDashboard from './sections/AdminDashboard';
import Sidebar from './components/adminComponents/Navbar/SideBar';
import AddNewMovie from './components/adminComponents/Movie/AddNewMovie';
import UploadMovie from './components/adminComponents/Movie/UploadMovie';
import SeasonsManage from './components/adminComponents/Movie/SeasonsManage';
import EpisodeManage from './components/adminComponents/Movie/EpisodesManage';
import EpisodesAndMore from './components/Play/EpisodesAndMore';
import AllSeries from './components/adminComponents/Series/AllSeries';
import AllMovies from './components/adminComponents/Movie/AllMovies';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className='App'>

          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='watch/:id' element={<MoviePlayer /> } />
            <Route path='watch/episodes-more/:id' element={<EpisodesAndMore /> } />

            <Route path="login" element={<Login setIsLogin = {setIsLogin} prevelages="viewer"/>} /> 
            <Route path="login/:urltoken" element={<Login setIsLogin = {setIsLogin} prevelages="viewer"/>} />
            <Route path="signup" element={<Signup prevelages="viewer"/>} />
            <Route path="reset-password/:urltoken" element={<ResetPassword />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path='change-pass' element={<ChangePassword setIsLogin = {setIsLogin}/>} />
            {/* <Route path='register-shop' element={<RegisterShop />} /> */}
      
            <Route path='/admin' element={<Sidebar />} >
              <Route path='dashboard' element ={<AdminDashboard />} />
              <Route path='new-movie' element ={<AddNewMovie type="movie"/>} />
              <Route path='all-movies' element ={<AllMovies />} />
              <Route path='new-series' element ={<AddNewMovie type="series"/>} />
              <Route path='all-series' element ={<AllSeries />} />
              <Route path='movie-upload' element ={<UploadMovie />} />
              <Route path='seasons-manage' element ={<SeasonsManage />} />
              <Route path='episodes-manage' element ={<EpisodeManage />} />
              <Route path="signup" element={<Signup prevelages="admin"/>} />
              <Route path="login" element={<Login setIsLogin = {setIsLogin} prevelages="admin"/>} />
            </Route>
          </Routes>
    </div>     
  )
};

export default App;
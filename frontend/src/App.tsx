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

import EpisodesAndMore from './components/Play/EpisodesAndMore';
import { AddNewMovie, AllMovies, AllSeries, EpisodeManage, Logout, MovieRequests, Preview, 
  Reports, SeasonsManage, Sidebar, UploadMovie 
} from './components/adminComponents';
import AddUsers from './components/adminComponents/Users/AddUsers';
import AllUsers from './components/adminComponents/Users/AllUsers';


function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className='App'>

          <Routes>
            <Route path='viewer/dashboard' element={<LandingPage />} />
            <Route path='watch/:id' element={<MoviePlayer /> } />
            <Route path='watch/episodes-more/:id' element={<EpisodesAndMore /> } />

            <Route path="/" element={<Login setIsLogin = {setIsLogin} prevelages="viewer"/>} /> 
            <Route path="login/:urltoken" element={<Login setIsLogin = {setIsLogin} prevelages="viewer"/>} />
            <Route path="viewer/signup" element={<Signup prevelages="viewer"/>} />
            <Route path="reset-password/:urltoken" element={<ResetPassword />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path='change-pass' element={<ChangePassword setIsLogin = {setIsLogin}/>} />
            {/* <Route path='register-shop' element={<RegisterShop />} /> */}
      
            <Route path='preview' element ={<Preview />} />
            <Route path='/admin' element={<Sidebar />} >
              <Route path='dashboard' element ={<AdminDashboard />} />
              <Route path='new-movie' element ={<AddNewMovie type="movie"/>} />
              <Route path='all-movies' element ={<AllMovies />} />
              <Route path='new-series' element ={<AddNewMovie type="series"/>} />
              <Route path='all-series' element ={<AllSeries />} />
              <Route path='movie-upload' element ={<UploadMovie />} />
              <Route path='add-client' element ={<AddUsers />} />
              <Route path='all-clients' element ={<AllUsers />} />
              <Route path='seasons-manage' element ={<SeasonsManage />} />
              <Route path='episodes-manage' element ={<EpisodeManage />} />
              <Route path='movie-request' element ={<MovieRequests />} />
              <Route path='report' element ={<Reports />} />
              <Route path='subscription' element ={<Reports />} />
              <Route path='notification' element ={<Reports />} />
              <Route path="signup" element={<Signup prevelages="admin"/>} />
              <Route path="login" element={<Login setIsLogin = {setIsLogin} prevelages="admin"/>} />
              <Route path='logout' element={<Logout />}/>
            </Route>
          </Routes>
    </div>     
  )
};

export default App;
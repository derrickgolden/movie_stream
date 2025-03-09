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
  Feedbacks, SeasonsManage, Sidebar, UploadMovie 
} from './components/adminComponents';
import AddUsers from './components/adminComponents/Users/AddUsers';
import AllUsers from './components/adminComponents/Users/AllUsers';
import RequestMovie from './sections/RequestMovie';
import SearchMovie from './sections/SearchMovie';
import SideBar from './components/Navbar/SideBar';
import ClientWatchedMovies from './components/adminComponents/Users/ClientWatchedMovies';
import Categories from './components/categories/Categories';
import JaptechLogo from './components/auth/JapTechLogo';
import Feedback from './sections/FeedBack';


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [toggle, setToggle] = useState({link: "Home", isOpen: false})
  const [isLandingReady, setIsLandingReady] = useState(false);
  

  return (
    <div className='App position-relative' >

      {/* <JaptechLogo isReady ={isLandingReady}/> */}
          <Routes>
            <Route path='watch/:type/:title/:movie_id' element={<MoviePlayer /> } />
            <Route path='watch/episodes-more/:id' element={<EpisodesAndMore /> } />
            <Route path='/viewer' element ={<SideBar setIsLandingReady = {setIsLandingReady}
                toggle = {toggle}  setToggle ={setToggle} />}>
              <Route path='dashboard' element={<LandingPage toggle = {toggle}  
                setToggle ={setToggle} setIsLandingReady = {setIsLandingReady} />} />
              <Route path='request-movie' element={<RequestMovie /> } />
              <Route path='search-movie' element={<SearchMovie /> } />
              <Route path='categories' element={<Categories toggle = {toggle}  
                setToggle ={setToggle} setIsLandingReady = {setIsLandingReady}/> } />
              <Route path='feedback' element={<Feedback /> } />
          </Route>

            <Route path="/" element={<Login setIsLogin = {setIsLogin} 
                                            prevelages="viewer"
                                            setIsLandingReady = {setIsLandingReady}
                                    />} /> 
            <Route path="login/:urltoken" element={<Login setIsLogin = {setIsLogin} 
                                            prevelages="viewer"
                                            setIsLandingReady = {setIsLandingReady}
                                    />} />
            <Route path="viewer/signup" element={<Signup prevelages="viewer"/>} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="viewer/reset-pass" element={<ResetPassword />} />
            <Route path='change-pass' element={<ChangePassword setIsLogin = {setIsLogin}/>} />
      
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
              <Route path=':user_id/watched-movies' element ={<ClientWatchedMovies />} />
              <Route path='seasons-manage' element ={<SeasonsManage />} />
              <Route path='episodes-manage' element ={<EpisodeManage />} />
              <Route path='movie-request' element ={<MovieRequests />} />
              <Route path='feedback' element ={<Feedbacks />} />
              {/* <Route path='subscription' element ={<Reports />} /> */}
              {/* <Route path='notification' element ={<Reports />} /> */}
              <Route path="signup" element={<Signup prevelages="admin"/>} />
              <Route path="login" element={<Login setIsLogin = {setIsLogin} 
                                            prevelages="admin"
                                            setIsLandingReady = {setIsLandingReady}
                                    />} />
              <Route path='logout' element={<Logout />}/>
            </Route>
          </Routes>
    </div>     
  )
};

export default App;
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Feed from './components/Feed';
import Share from './components/Share';
import Profile from "./components/Profile";
import EditP from './components/EditP';
import NewPost from './components/NewPost';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './Redux/store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="feed" element={<Feed/>}/>
          <Route path="share" element={<Share/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='/editprofile' element={<EditP/>}/>
          <Route path='/newpost' element={<NewPost/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

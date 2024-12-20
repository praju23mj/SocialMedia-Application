import React from 'react';
import "../styles/Profile.css";
import HeroImg from "../assets/heroimg.png";
import Pr from "../assets/profile.png";
import Arrow from "../assets/arrow.png";
import Grid1 from "../assets/grid1.png";
import Grid2 from "../assets/grid2.png";
import Grid3 from "../assets/grid3.png";
import Plus from "../assets/plus.png";
import {useNavigate} from 'react-router-dom';

const Profile = () => {
   const navigate= useNavigate();
  
  const handleEdit=()=>{
    navigate("/editprofile");
  }

  const handlePlus=()=>{
    navigate("/newpost");
  }
  const backFeed=()=>{
    navigate('/feed')
  }

  return (
    <div className='profile-container'>
        <div className='profile-header'>
          <img src={HeroImg} alt='hero' className='hero'/>
          <img src={Arrow} alt='arrow' className='arrow' onClick={backFeed}/>
          <img src={Pr} alt='profile' className='profile'/>
          <button className='edit-button' onClick={handleEdit}>
            Edit Profile
          </button>
        </div>
        <div className='user-info'>
          <h1>Sakshi Agarwal</h1>
          <p>Just someone who loves designing, sketching, and finding beauty in the little things 💕</p>
        </div>
        <div className='my-post'>
          <h2>My Posts</h2>
          <div className='post-grid'>
            <div className='post-card'>
              <img src={Grid1} alt='grid' className='grid'/>
            </div>
            <div className='post-card'>
              <img src={Grid2} alt='grid' className='grid'/>
            </div>
            <div className='post-card'>
              <img src={Grid3} alt='grid' className='grid'/>            
            </div>
            <div className='plus'> <img src={Plus} alt='plus' className='add' onClick={handlePlus}/></div>      
          </div>
        </div>
    </div>
  )
}

export default Profile;

import React from 'react';
import "../styles/Feed.css";
import Menu from "../assets/Menu.png";
import Arnav from "../assets/arnav.png";
import Photo from "../assets/photo1.png";
import PhotoTwo from "../assets/photo2.png";
import Heart from "../assets/heart.png";
import Share from "../assets/share.png"
import Sneha from "../assets/sneha.png";
import Vedio from "../assets/vedio.png";
import Pause from "../assets/HiPlay.png";
import Plus from "../assets/plus.png";
import { useNavigate } from 'react-router-dom';


const Feed = () => {
    const navigate= useNavigate();

    const handleShare=()=>{
        navigate("/share");
    }

    const handleProfile=()=>{
        navigate("/profile");
    }
    const postHandle=()=>{
        navigate('/newpost')
    }
  
  return (
    <div className='feed'>
        <header className='header'>
            <img src={Menu} alt='menu' className='sakshi' onClick={handleProfile}/>
                <div className='name'>
                <p>Welcome Back</p>
                <h2>Sakshi Agarwal</h2>
                </div>       
        </header>

            <div className='heading'>
                <h1>Feeds</h1>
            </div>
            
            <div className='arnav-box'>
                <div className="arnav-header">
                    <img src={Arnav} alt='arnav' className='boy'/>
                        <div className='boy-name'>
                            <h3>Aarav</h3>
                            <small>2 hours ago</small>
                        </div>
                </div>
                <div className="arnav-content">
                    <p>
                        Just arrived in New York City! Excited to explore the sights, sounds, 
                        and energy of this amazing place. 🗽<span>#NYC #Travel</span> 
                    </p>
                </div>
                <div className='images'>
                    <img src={Photo} alt='newyork' className='new1' height={190}/>
                    <img src={PhotoTwo} alt='city' className='new'/>
                </div>
                <div className='heart'>
                    <img src={Heart} alt='heart' className='likes'/>
                    <button className='share' onClick={handleShare}>
                    <img src={Share} alt='share' className='send'/>
                    </button>
                </div>
            </div>

            <div className='sneha-box'>
                <div className='sneha-header'>
                    <img src={Sneha} alt='sneha' className='girl'/>
                    <div className='girl-name'>
                            <h3>Sneha</h3>
                            <small>1 day ago</small>
                        </div>
                </div>
                <div className="sneha-content">
                    <p>
                    Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary.
                     💕<span> #SelfCare #MeTime #Wellness </span>
                    </p>
                </div>
                <div className='girl-image'>
                <img src={Vedio} alt='girlsmile' className='vt'/>
                <img src={Pause} alt='pause' className='Pause'/>
                <img src={Plus} alt='plus' className='Plus' onClick={postHandle}/>
                </div>
            </div>
    </div>
  )
}

export default Feed;

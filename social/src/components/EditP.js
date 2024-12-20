import React from 'react';
import "../styles/EditP.css";
import HeroImg from "../assets/heroimg.png";
import Pr from "../assets/profile.png";
import Arrow from "../assets/arrow.png";
import HiPencil from "../assets/HiPencil.png";
import { useNavigate } from 'react-router-dom';

const EditP = () => {
  const navigate= useNavigate();
  const backtoProfile=()=>{
    navigate("/profile");
  }
  return (
    <div className='edit-container'>
       <div className='edit-header'>
                 <img src={HeroImg} alt='hero' className='hero'/>
                 <img src={Arrow} alt='arrow' className='arrow' onClick={backtoProfile}/>
                 <h3 className='ehead'>Edit Profile</h3>
                 <div class="circle"></div>
                 <img src={HiPencil} alt='pencil' className='pencil'/>
                 <img src={Pr} alt='profile' className='profile11'/>
                 <div class="circle1"></div>
                 <img src={HiPencil} alt='pencil' className='pencil1'/>
               </div>
               <div className='edit-form'>
               <label for="name">Name</label>
               <input type="text" id="name" value="Sakshi Agarwal" readonly />
               <label for='bio'>Bio</label>
               <textarea>Just someone who loves designing, sketching and finding beauty in the little things💕</textarea>
               </div>
               <button className='save'>SAVE</button> 
    </div>
  )
}

export default EditP;


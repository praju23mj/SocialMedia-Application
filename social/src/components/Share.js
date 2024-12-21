import React,{useState} from 'react'
import "../styles/Share.css";
import Menu from "../assets/Menu.png";
import Lines from "../assets/line.png";
import Arnav from "../assets/arnav.png";
import Photo from "../assets/photo1.png";
import PhotoTwo from "../assets/photo2.png";
import Heart from "../assets/heart.png";
import Shared from "../assets/share.png"
import Sneha from "../assets/sneha.png";
import Vedio from "../assets/vedio.png";
import Pause from "../assets/HiPlay.png";
import Plus from "../assets/plus.png";
 import copy from '../assets/copy.png';
import { useSelector, useDispatch } from 'react-redux';
import { addImage, removeImage } from '../Redux/imagesSlice';


const Share = () => {
    const [isOpen,setIsOpen]=useState(true);
    const images = useSelector((state) => state.images.images);
    const dispatch = useDispatch();

    return (
    <>
   
     <div className='share'>
     {isOpen && <>
     <div className='check'>
    </div>
    <div className='popup-container'>
        <h1>Share Post</h1>
        <div className='social-logo'>
        {
            images.map((image,index)=>{
                return (
                <div key={index}>
                    <img 
                    src={image.img}
                    alt={image.name} 
                    className='menu-img' />
                    <p>{image.name}</p>
                </div>
                );
            })
        }
        </div>
        <h3>Page link</h3>
        <div className='link-copy'>
        <input
          type='text'
          value='https://www.arnav/feed'
          readOnly
          className='link-input'
        />
        <img src={copy} alt='copy' className='copy'/>
        </div>
        
    </div>
        </>
        }

        <header className='header2'>
            <img src={Lines} alt='lines' className='line-img'  />
                   <img src={Menu} alt='menu2' className='menu-img'/>
               </header>

               <div className='heading2'>
                <h1>Feeds</h1>
                <div className='tab-menu'>
                    <button className='tab-item'>Recent</button>
                    <button className='tab-item active'>Friends</button>
                    <button className='tab-item'>Popular</button>
                </div>
            </div>

             <div className='arnav-box1'>
                            <div className="arnav-header1">
                                <img src={Arnav} alt='arnav' className='boy1'/>
                                    <div className='boy-name1'>
                                        <h3>Aarav</h3>
                                        <small>2 hours ago</small>
                                    </div>
                            </div>
                            <div className="arnav-content1">
                                <p>
                                    Just arrived in New York City! Excited to explore the sights, sounds, 
                                    and energy of this amazing place. 🗽<span>#NYC #Travel</span> 
                                </p>
                            </div>
                            <div className='images1'>
                                <img src={Photo} alt='newyork' className='new11' height={190}/>
                                <img src={PhotoTwo} alt='city' className='new1'/>
                            </div>
                            <div className='heart1'>
                                <img src={Heart} alt='heart' className='likes1'/>
                                <button className='share1'>
                                <img src={Shared} alt='share' className='send1'/>
                                </button>
                            </div>
                        </div>
            
                        <div className='sneha-box1'>
                            <div className='sneha-header1'>
                                <img src={Sneha} alt='sneha' className='girl1'/>
                                <div className='girl-name1'>
                                        <h3>Sneha</h3>
                                        <small>1 day ago</small>
                                    </div>
                            </div>
                            <div className="sneha-content1">
                                <p>
                                Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary.
                                 💕<span> #SelfCare #MeTime #Wellness </span>
                                </p>
                            </div>
                            <div className='girl-image1'>
                            <img src={Vedio} alt='girlsmile' className='vt1'/>
                            <img src={Pause} alt='pause' className='Pause1'/>
                            <img src={Plus} alt='plus' className='Plus1'/>
                            </div>
                        </div>
    </div>
    </>
   
  )
}

export default Share;

import React,{useState} from 'react';
import "../styles/NewPost.css";
import BlackArrow from "../assets/blackarrow.png";
import Folder from "../assets/folder.png";
import Camera from "../assets/camera.png";
import Vector from "../assets/Vector.png";
import vimg from "../assets/vimg.png";
import { useNavigate } from 'react-router-dom';


const NewPost = () => {
  const [showFileOptions, setShowFileOptions] = useState(false);
  const navigate=useNavigate();

  const backHandle=()=>{
    navigate('/profile')
  }

  const handleFileSelection=(event)=>{
    const file = event.target.files[0];
    
  }
  return (
    <div className='new-container'>
      <div className='hh'>
      <img src={BlackArrow} alt='blackarrow' className='blacka' onClick={backHandle}/>
      <span class="titles">New Post</span>
      </div>
      <div className='in'>
        <textarea className='txt' placeholder=' Whats on your maind?'/>
      </div>

      {!showFileOptions ? (
        <div className='fold' onClick={()=>setShowFileOptions(true)}>
        <img src={Folder} alt='folder' className='folder'/>
        <p className='choose'>Choose the files</p>
      </div>
      ):(
        <>
        <div className='gallery'>
        <label htmlFor="photo-input" className="gal-img">
        <img src={Vector} alt='gallery' className='gal-photo'/>
        Photos
        </label>
        <input
        type='file'
        id="photo-input"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileSelection}
        />
      </div>

      <div className='vt-cont'>
      <label htmlFor="photo-input" className="gal-vedio">
        <img src={vimg} alt='vedio' className='gal-ved'/>
        Vedio
        </label>
      </div>
        </>
      )}
      
      
      <div className='camera'>
      <img src={Camera} alt='camera' className='cam'/>
      <p className='camtxt'>Camera</p>
      </div>
      <div className='new-btn'>
      <button className='cre-btn'>CREATE</button>
      </div>
    </div>
  )
}

export default NewPost;

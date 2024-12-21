import React,{useState} from 'react';
import "../styles/NewPost.css";
import BlackArrow from "../assets/blackarrow.png";
import Folder from "../assets/folder.png";
import Camera from "../assets/camera.png";
import Vector from "../assets/Vector.png";
import vimg from "../assets/vimg.png";
import { useNavigate } from 'react-router-dom';
import AddMore from "../assets/addmore.png";


const NewPost = () => {
  const [showFileOptions, setShowFileOptions] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate=useNavigate();

  const backHandle=()=>{
    navigate('/profile')
  }

  const handleFileSelection = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
        setSelectedFile(file);
        setShowFileOptions(false); // Hide file options after selection
      } else {
        alert('Please select a valid photo or video file.');
      }
    }
  };
  return (
    <div className='new-container'>
      <div className='hh'>
      <img src={BlackArrow} alt='blackarrow' className='blacka' onClick={backHandle}/>
      <span class="titles">New Post</span>
      </div>
      <div className='in'>
        <textarea className='txt' placeholder=' Whats on your maind?'/>
      </div>

      {!selectedFile ? (
  <>
    {!showFileOptions ? (
      <div className='fold' onClick={() => setShowFileOptions(true)}>
        <img src={Folder} alt='folder' className='folder' />
        <p className='choose'>Choose the files</p>
      </div>
    ) : (
      <>
        <div className='gallery'>
          <label htmlFor='photo-input' className='gal-img'>
            <img src={Vector} alt='gallery' className='gal-photo' />
            Photos
          </label>
          <input
            type='file'
            id='photo-input'
            accept='image/*'
            style={{ display: 'none' }}
            onChange={handleFileSelection}
          />
        </div>

        <div className='vt-cont'>
          <label htmlFor='video-input' className='gal-vedio'>
            <img src={vimg} alt='video' className='gal-ved' />
            Video
          </label>
          <input
            type='file'
            id='video-input'
            accept='video/*'
            style={{ display: 'none' }}
            onChange={handleFileSelection}
          />
        </div>
      </>
    )}

    <div className='camera'>
      <img src={Camera} alt='camera' className='cam' />
      <p className='camtxt'>Camera</p>
    </div>
  </>
) : (
  <>
    {selectedFile.type.startsWith('image/') && (
      <div className='file-preview'>
        <img
          src={URL.createObjectURL(selectedFile)}
          alt='Selected'
          className='preview-image'
        />
      </div>
    )}
    {selectedFile.type.startsWith('video/') && (
      <div className='file-preview'>
        <video controls className='preview-video'>
          <source src={URL.createObjectURL(selectedFile)} />
          Your browser does not support the video tag.
        </video>
      </div>
    )}

    {/* Add More Section */}
    <div className='addmore'>
      <img src={AddMore} alt='addmore' className='addmore-gal' />
      <p className='addmoretxt'>Add more Photos</p>
      
    </div>
    <div className='newDiv'>
      <p>Surrounded by nature’s beauty, finding peace in every leaf, breeze, and sunset. 🌿🌞 
     <span>#NatureVibes #OutdoorEscape #EarthLover</span></p>
    </div>
  </>
)}
      
      <div className='new-btn'>
      <button className='cre-btn'>CREATE</button>
      </div>
    </div>
  )
}

export default NewPost;

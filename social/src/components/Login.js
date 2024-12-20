import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from "../firebase/firebaseConfig";
import "../styles/App.css";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import pic7 from "../assets/pic7.png";
import pic8 from "../assets/pic8.png";
import pic9 from "../assets/pic9.png";
import Vibe from "../assets/vibe.png";
import Google from "../assets/google.png";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
    const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];


    const handleGoogle = async ()=>{
      const provider = new GoogleAuthProvider();  
      try {
        await signInWithPopup(auth, provider);
        alert("Logged in successfully!");
        navigate('/feed');
      } catch (error) {
        console.error("Google Login Failed:", error.message);
        alert("Failed to log in. Please try again.");
      }
    };

  return (
    <div className='login-container'>
      <div className='image-grid'>
      {images.map((img, index) => (
          <img key={index} src={img} alt={`grid-pic-${index + 1}`} />
        ))}
      </div>
      <div className='vibesnap-card'>
        <div className='vibesnaplogo'>
            <img src={Vibe} alt='pic' className='picalter'/>
            <h1>Vibesnap</h1>
        </div>
            <p>Moments That Matter, Shared Forever.</p>
            <button onClick={handleGoogle} className='google-button'>
              <img src={Google} alt='google logo' className='google-logo' />
            Continue with Google</button>
      </div>
    </div>
  )
}

export default Login;

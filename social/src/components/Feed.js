import React,{useState,useEffect}from 'react';
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
    const [posts, setPosts] = useState([]);

    const handleShare=()=>{
        navigate("/share");
    }

    const handleProfile=()=>{
        navigate("/profile");
    }
    const postHandle=()=>{
        navigate('/newpost')
    }
  

     // Function to load more posts
  const loadMorePosts = () => {
    const newPosts = [
      {
        id: posts.length + 1,
        type: 'arnav',
        name: 'Aarav',
        time: '2 hours ago',
        content: 'Just arrived in New York City! Excited to explore the sights, sounds, and energy of this amazing place. 🗽 #NYC #Travel',
        images: [Photo, PhotoTwo]
      },
      {
        id: posts.length + 2,
        type: 'sneha',
        name: 'Sneha',
        time: '1 day ago',
        content: 'Taking a moment to slow down, breathe, and focus on myself. 🌿✨ Self-care isn’t selfish – it’s necessary. 💕 #SelfCare #MeTime #Wellness',
        video: Vedio,
      },
    ];
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
  };

  // Infinite scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        loadMorePosts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [posts]);

  useEffect(() => {
    // Initial load of posts
    loadMorePosts();
  }, []);
  
  return (
    <div className='feed'>
      <header className='header'>
        <img src={Menu} alt='menu' className='sakshi' onClick={handleProfile} />
        <div className='name'>
          <p>Welcome Back</p>
          <h2>Sakshi Agarwal</h2>
        </div>
      </header>

      <div className='heading'>
        <h1>Feeds</h1>
      </div>

      {posts.map((post) =>
        post.type === 'arnav' ? (
          <div className='arnav-box' key={post.id}>
            <div className="arnav-header">
              <img src={Arnav} alt='arnav' className='boy' />
              <div className='boy-name'>
                <h3>{post.name}</h3>
                <small>{post.time}</small>
              </div>
            </div>
            <div className="arnav-content">
              <p>{post.content}</p>
            </div>
            <div className='images'>
              {post.images.map((image, index) => (
                <img src={image} alt={`post-${index}`} className={`new${index + 1}`} height={190} key={index} />
              ))}
            </div>
            <div className='heart'>
              <img src={Heart} alt='heart' className='likes' />
              <button className='share' onClick={handleShare}>
                <img src={Share} alt='share' className='send' />
              </button>
            </div>
          </div>
        ) : (
          <div className='sneha-box' key={post.id}>
            <div className='sneha-header'>
              <img src={Sneha} alt='sneha' className='girl' />
              <div className='girl-name'>
                <h3>{post.name}</h3>
                <small>{post.time}</small>
              </div>
            </div>
            <div className="sneha-content">
              <p>{post.content}</p>
            </div>
            <div className='girl-image'>
              <img src={post.video} alt='girlsmile' className='vt' />
              <img src={Pause} alt='pause' className='Pause' />
              <img src={Plus} alt='plus' className='Plus' onClick={postHandle} />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Feed;

import React, { useState } from "react";
import Loader from "./Loader";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ videos, loader, saved, setSaved }) => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const saveVideo = (video) => {
    let flag = false;

    if (saved !== null && saved.length > 0) {
      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === video.id) {
          flag = true;
          toast.info("Video already exists!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          break;
        }
      }
    }
    
    if (!flag) {
      setSaved([...saved, video]);
      toast.success("Video Saved Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const isVideoSaved = (videoId) => {
    return saved.some(savedVideo => savedVideo.id === videoId);
  };

  const handleVideoPlay = (videoId) => {
    setPlayingVideo(videoId);
  };

  const handleVideoPause = () => {
    setPlayingVideo(null);
  };

  const downloadVideo = async (video) => {
    try {
      const response = await fetch(video.videoFile?.link);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `video-${video.id}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast.success("Video download started!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("Download failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <ToastContainer />

      {loader && <Loader />}

      <div className="container-fluid text-center" id="top">
        {!loader && videos.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🎬</div>
            <h3>No videos found</h3>
            <p>Try a different search term or browse our categories</p>
          </div>
        )}
        
        <div className="flex">
          {videos.map((video) => (
            <div key={video.id} className="items">
              <div className={`video-container ${playingVideo === video.id ? 'playing' : ''}`}>
                <video
                  className="video-element"
                  controls
                  preload="metadata"
                  poster={video.image}
                  onPlay={() => handleVideoPlay(video.id)}
                  onPause={handleVideoPause}
                  onEnded={handleVideoPause}
                >
                  <source src={video.videoFile?.link} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                <div className="video-info">
                  <div className="video-details">
                    <p className="video-user">
                      <i className="fas fa-user"></i>
                      {video.user.name}
                    </p>
                    <p className="video-duration">
                      <i className="fas fa-clock"></i>
                      {Math.floor(video.duration / 60)}:
                      {(video.duration % 60).toString().padStart(2, '0')}
                    </p>
                  </div>
                  
                  <div className="video-actions">
                    <button
                      className={`action-btn save-btn ${isVideoSaved(video.id) ? 'saved' : ''}`}
                      onClick={() => saveVideo(video)}
                      title={isVideoSaved(video.id) ? "Already saved" : "Save video"}
                    >
                      <i className={`fas ${isVideoSaved(video.id) ? 'fa-heart' : 'fa-heart-o'}`}></i>
                    </button>
                    
                    <button
                      className="action-btn download-btn"
                      onClick={() => downloadVideo(video)}
                      title="Download video"
                    >
                      <i className="fas fa-download"></i>
                    </button>
                    
                    <button
                      className="action-btn share-btn"
                      onClick={() => {
                        navigator.clipboard.writeText(video.url);
                        toast.info("Video link copied to clipboard!", {
                          position: "top-right",
                          autoClose: 2000,
                          theme: "dark",
                          transition: Bounce,
                        });
                      }}
                      title="Copy link"
                    >
                      <i className="fas fa-share"></i>
                    </button>
                  </div>
                </div>
                
                {playingVideo !== video.id && (
                  <div className="video-overlay" onClick={() => saveVideo(video)}>
                    <div className="play-button">
                      <i className="fas fa-play"></i>
                    </div>
                    <div className="save-button">
                      <i className={`fas ${isVideoSaved(video.id) ? 'fa-heart' : 'fa-heart-o'}`}></i>
                      <span>{isVideoSaved(video.id) ? 'Saved' : 'Save Video'}</span>
                    </div>
                  </div>
                )}
                
                {isVideoSaved(video.id) && (
                  <div className="saved-indicator">
                    <i className="fas fa-heart"></i>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {videos.length !== 0 && (
          <a href="#top" className="btn btn-warning my-5">
            <i className="fas fa-arrow-up"></i>
            Back To Top
          </a>
        )}
      </div>
    </>
  );
};

export default Home;
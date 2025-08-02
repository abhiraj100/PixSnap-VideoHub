import React, { useState } from "react";
import Loader from "./Loader";
import { toast, Bounce } from "react-toastify";

const Saved = ({ saved, setSaved, loader }) => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const removeVideo = (videoToRemove) => {
    const updatedSaved = saved.filter(video => video.id !== videoToRemove.id);
    setSaved(updatedSaved);
    
    toast.success("Video removed from saved!", {
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
  };

  const clearAllSaved = () => {
    if (window.confirm("Are you sure you want to remove all saved videos?")) {
      setSaved([]);
      toast.success("All saved videos cleared!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const downloadVideo = async (video) => {
    try {
      const response = await fetch(video.videoFile?.link);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `saved-video-${video.id}.mp4`;
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

  const handleVideoPlay = (videoId) => {
    setPlayingVideo(videoId);
  };

  const handleVideoPause = () => {
    setPlayingVideo(null);
  };

  if (loader) {
    return <Loader />;
  }

  if (saved.length === 0) {
    return (
      <div className="no-saved-videos">
        <div className="no-saved-icon">💔</div>
        <h2>No Saved Videos</h2>
        <p>Start saving videos by clicking the heart icon on videos in the home page!</p>
        <a href="/" className="btn btn-warning">
          <i className="fas fa-home"></i>
          Browse Videos
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid text-center" id="top">
        <div className="saved-header">
          <h2>
            <i className="fas fa-heart"></i>
            Saved Videos ({saved.length})
          </h2>
          {saved.length > 0 && (
            <button 
              className="btn btn-danger clear-all-btn"
              onClick={clearAllSaved}
            >
              <i className="fas fa-trash"></i>
              Clear All
            </button>
          )}
        </div>
        
        <div className="flex">
          {saved.map((video) => (
            <div key={video.id} className="items">
              <div className={`video-container saved-video ${playingVideo === video.id ? 'playing' : ''}`}>
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
                      className="action-btn unsave-btn"
                      onClick={() => removeVideo(video)}
                      title="Remove from saved"
                    >
                      <i className="fas fa-heart-broken"></i>
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
                  <div className="video-overlay">
                    <div className="play-button">
                      <i className="fas fa-play"></i>
                    </div>
                    <div className="remove-button" onClick={() => removeVideo(video)}>
                      <i className="fas fa-trash"></i>
                      <span>Remove</span>
                    </div>
                  </div>
                )}
                
                <div className="saved-badge">
                  <i className="fas fa-heart"></i>
                  <span>Saved</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {saved.length !== 0 && (
          <a href="#top" className="btn btn-warning my-5">
            <i className="fas fa-arrow-up"></i>
            Back To Top
          </a>
        )}
      </div>
    </>
  );
};

export default Saved;
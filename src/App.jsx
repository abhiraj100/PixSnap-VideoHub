import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Saved from "./components/Saved";

const App = () => {
  const API_KEY = "206RNUxtsHJr4QQ38iKCY92Y3a4gZn7qsmIuFcKiAt8n2HtqIou2bAAB";
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("nature");
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoader(true);
        const res = await axios.get(
          `https://api.pexels.com/videos/search?query=${search}&per_page=80`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
        
        // Process videos to ensure they have the right structure
        const processedVideos = res.data.videos.map(video => ({
          ...video,
          // Find the best quality video file (preferably HD or medium)
          videoFile: video.video_files.find(file => 
            file.quality === "hd" || file.quality === "sd"
          ) || video.video_files[0] // fallback to first available
        }));
        
        setVideos(processedVideos);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setLoader(false);
      }
    };

    fetchVideos();
    
    // Load saved videos from localStorage
    const data = JSON.parse(localStorage.getItem("videos"));
    if (data) {
      setSaved(data);
    }
  }, [search]);

  useEffect(() => {
    // Update localStorage whenever saved videos change
    if (saved.length !== 0) {
      const json = JSON.stringify(saved);
      localStorage.setItem("videos", json);
    } else {
      // Clear localStorage if no saved videos
      localStorage.removeItem("videos");
    }
  }, [saved]);

  return (
    <>
      <BrowserRouter>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                videos={videos}
                loader={loader}
                saved={saved}
                setSaved={setSaved}
              />
            }
          />
          <Route
            path="/saved"
            element={
              <Saved 
                saved={saved} 
                setSaved={setSaved}
                loader={loader} 
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
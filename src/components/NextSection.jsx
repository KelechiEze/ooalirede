import React, { useState } from "react";
import "./NextSection.css";
import logoImage from "../assets/out-on-a-limb-logo.png";

const NextSection = () => {
  const [modalVideo, setModalVideo] = useState(null);

  const videos = [
    { id: 1, url: "https://www.youtube.com/embed/geQVIqMqbCE", title: "Out On A Limb 2016" },
    { id: 2, url: "https://www.youtube.com/embed/KRhVYQvhAVc", title: "Out On A Limb 2017" },
    { id: 3, url: "https://www.youtube.com/embed/GU_jlSrIrhE", title: "Out On A Limb 2016 Short Clip" },
  ];

  return (
    <div className="next-section">
      {/* Top Section */}
      <div className="top-content">
        <div className="image-container">
          <img src={logoImage} alt="Out on a Limb 2025" />
        </div>
        <div className="text-container">
          <h1>Changing Lives and Rewriting Stories</h1>
          <p>
            Bringing hope, joy, and purposeful living to all children living with 
            limb loss and their families.
          </p>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="video-section">
        {videos.map((video) => (
          <div key={video.id} className="video-container">
            {/* Overlay div to capture clicks */}
            <div className="video-overlay" onClick={() => setModalVideo(video.url)}></div>
            <iframe 
              width="100%" 
              height="215" 
              src={video.url} 
              title={video.title} 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {modalVideo && (
        <div className="modal-overlay" onClick={() => setModalVideo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setModalVideo(null)}>&times;</span>
            <iframe 
              width="100%" 
              height="315" 
              src={modalVideo} 
              title="YouTube video" 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default NextSection;

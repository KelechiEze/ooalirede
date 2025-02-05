import React, { useState, useEffect } from "react";
import "./Carousel.css";
import image1 from "../assets/Rectangle 1.png"; // Replace with actual images
import image2 from "../assets/Rectangle 2.png";
import image3 from "../assets/Rectangle 11.png";
import image4 from "../assets/Rectangle 4.png";
import image5 from "../assets/Rectangle 10.png";
import image6 from "../assets/Rectangle 12.png";
import image7 from "../assets/Rectangle 13.png";
import image8 from "../assets/Rectangle 14.png";
import image9 from "../assets/Rectangle 15.png";
import image10 from "../assets/Rectangle 16.png";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(images.length / 4); // Fixed calculation (Removed +1)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 4000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="carousel-container">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="carousel-item" key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="next" onClick={nextSlide}>&#10095;</button>

      {/* Wrapped dots inside a box */}
      <div className="carousel-dots-container">
        <div className="carousel-dots">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

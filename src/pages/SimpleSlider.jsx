
import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const sliderRef = React.useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "ease-in-out",
    arrows: false,
  };

  const slides = [
  {
    img: "https://i.ibb.co/35Zq3NzM/collegeroommates-58d14bd65f9b581d7243490e.jpg",
    title: "Cozy Rooms, Friendly Vibes",
    desc: "Find your perfect roommate and a comfy space to call home.",
  },
  {
    img: "https://i.ibb.co/5WsM1KL8/gettyimages-1367813999.jpg",
    title: "Location Matters",
    desc: "Browse listings based on your preferred neighborhood and budget.",
  },
  {
    img: "https://i.ibb.co/fzXqgpJG/Roommates-Males.jpg",
    title: "Connect & Move In",
    desc: "Chat with roommates, schedule visits, and settle in hassle-free.",
  },
];


  return (
    <div className="w-full relative">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="relative mx-auto w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden"
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-100"
              style={{
                backgroundImage: `url(${slide.img})`,
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20" />

            <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
              <div className="text-white max-w-3xl text-center">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-2xl font-light mb-6 text-white/80">
                  {slide.desc}
                </p>
                <button className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-black font-semibold rounded-full shadow-xl hover:bg-neutral-200 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <button
        onClick={() => sliderRef.current.slickPrev()}
        className="absolute top-1/2 left-4 sm:left-6 md:left-8 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md z-20 transition"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={30} />
      </button>

      <button
        onClick={() => sliderRef.current.slickNext()}
        className="absolute top-1/2 right-4 sm:right-6 md:right-8 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md z-20 transition"
        aria-label="Next Slide"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
};

export default SimpleSlider;

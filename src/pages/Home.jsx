import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
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
      img: "https://i.ibb.co/tTtXqg3F/happy-friends-enjoying-drinking-juice-kitchen.jpg",
      title: "Banking, Evolved",
      desc: "Step into a smarter financial future. Effortless. Secure. Limitless.",
    },
    {
      img: "https://i.ibb.co/W467j4PL/football-fans-living-room.jpg",
      title: "Your Wallet. Reimagined.",
      desc: "Control your money like never before. One app. Every move.",
    },
    {
      img: "https://i.ibb.co/8DkWQYkd/thoughtful-young-couple-sitting-bed-looking-laptop.jpg",
      title: "Payments With Power",
      desc: "High-speed transactions. Zero friction. Full confidence.",
    },
  ];

  return (
    <div className="w-full relative">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="relative mx-auto w-full h-[80vh] md:h-[80vh] overflow-hidden"
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
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl font-light mb-6 text-white/80">
                  {slide.desc}
                </p>
                <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-xl hover:bg-neutral-200 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <button
        onClick={() => sliderRef.current.slickPrev()}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md z-20 transition"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={() => sliderRef.current.slickNext()}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md z-20 transition"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
};

export default Home;

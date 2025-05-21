import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./SimpleSlider";
import { useLoaderData } from "react-router";

const Home = () => {
  const roommateData = useLoaderData();
  console.log(roommateData)
  

  return (
    <div>
      <SimpleSlider></SimpleSlider>
      HOme
    </div>
    
  );
};

export default Home;

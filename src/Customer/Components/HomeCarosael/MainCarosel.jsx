import React from "react";
import { MainCaroselData } from "./MainCaroselData";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const MainCarosel = () => {
  const items = MainCaroselData.map((item) => (
    <img
      key={item.id}
      className="cursor-pointer -z-10" 
      src={item.image}
      role="presentation"
      alt=""
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
    />
    
  );
};

export default MainCarosel;

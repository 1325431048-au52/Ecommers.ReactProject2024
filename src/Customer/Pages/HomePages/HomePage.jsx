import React from "react";
import MainCarosel from "../../Components/HomeCarosael/MainCarosel";
import HomeSectionCarosel from "../../Components/HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../Data/Mens_Kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className="space-y-10  py-10 flex flex-col justify-center px-5 lg:px-5">
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shose"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"women's Saree"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Dress"}/>
      </div>
    </div>
  );
};
export default HomePage;

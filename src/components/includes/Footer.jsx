import React from "react";
import logo from "@/assets/Logo3.png";
import { Button } from "../ui/button";
import playstore from "@/assets/playstore.png";
import appstore from "@/assets/app-store.png";

const Footer = () => {
  return (
    <footer
      id="about"
      className="p-10 md:h-[300px] lg:px-72 md:py-24 bg-defaultGray"
    >
      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <img className="md:w-[500px] object-contain" src={logo} alt="" />
        <div className="md:border border-r-accentOrange md:p-5">
          <h2 className="text-xl font-medium">Email</h2>
          <p>rde.research@dorsu.edu.ph</p>
          <h2 className="text-xl font-medium">Address</h2>
          <p>Guang-guang,Dahican City of Mati Davao Oriental</p>
        </div>
        <div className="md:border border-r-accentOrange md:p-5">
          <h2 className="text-xl font-medium mb-5">Download On:</h2>
          <div className="flex gap-5 flex-col md:flex-row">
            <Button className="w-min">
              <img className="h-full " src={playstore} alt="" />
              PlayStore
            </Button>
            <Button className="w-min">
              <img className="h-full" src={appstore} alt="" />
              AppStore
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import logo from "@/assets/Logo3.png";
import { Button } from "../ui/button";
import playstore from "@/assets/playstore.png";
import appstore from "@/assets/app-store.png";
import apple from "@/assets/apple.png";
import DownloadButton from "../ui/download-button";

const Footer = () => {
  return (
    <footer
      id="about"
      className="p-10 md:h-[300px] lg:px-72 lg:py-24 bg-defaultGray"
    >
      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <img
          className="md:w-[250px] lg:w-[500px] object-contain"
          src={logo}
          alt=""
        />
        <div className="flex flex-col md:flex-row gap-5 justify-between divide-y-[1px] md:divide-y-0 md:divide-x-[1px]  divide-accentOrange">
          <div className="py-5 md:p-5">
            <h2 className="md:text-md lg:text-xl font-medium">Email</h2>
            <p>rde.research@dorsu.edu.ph</p>
            <h2 className="md:text-md lg:text-xl font-medium">Address</h2>
            <p>Guang-guang,Dahican City of Mati Davao Oriental</p>
          </div>
          <div className="py-5 md:p-5">
            <h2 className="text-md lg:text-xl font-medium mb-5">
              Download On:
            </h2>
            <div className="flex gap-5 flex-col items-start justify-start lg:flex-row">
              <DownloadButton icon={playstore} content={"Google Play"} />
              <DownloadButton icon={apple} content={"App Store"} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

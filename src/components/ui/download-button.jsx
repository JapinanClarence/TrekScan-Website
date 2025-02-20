import React from "react";
import { Button } from "./button";

const DownloadButton = ({ icon, content, className = "px-4 py-6 " }) => {
  return (
    <Button className={className}>
      <img className="h-[25px]" src={icon} alt="" />
      <div className="text-start flex flex-col justify-center">
        <span className="text-xs"> Available on</span>
        <span className="text-sm">{content}</span>
      </div>
    </Button>
    // <a className="w-[145px] items-center  justify-between flex px-4 bg-primary rounded-md text-white py-[5px]">

    // </a>
  );
};

export default DownloadButton;

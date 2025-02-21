import React from "react";
import heroBanner from "@/assets/Logo4.png";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { CloudAlert, DatabaseBackup, ScanQrCode } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "./ui/button";
import { FlipWords } from "./ui/flip-words";
import DownloadButton from "./ui/download-button";
import apple from "@/assets/apple.png";
import playstore from "@/assets/playstore.png";

const content = [
  {
    title: (
      <p className="inline-flex items-center gap-4">
        <ScanQrCode /> Basic QR Code Scanning
      </p>
    ),
    description:
      "Hamiguitan MVP enables users to scan QR codes placed at key locations along hiking trails. \nFunctionality: \nUsers can use their mobile device to scan QR codes and immediately access information specific to their current location. The app supports basic text and image content associated with each QR code.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Basic QR Code Scanning
      </div>
    ),
  },
  {
    title: (
      <p className="inline-flex items-center gap-4">
        <DatabaseBackup /> Centralized Database
      </p>
    ),
    description:
      "The app includes a simple, cloud-based database that stores information related to each QR code. Functionality: Information in the database is tied directly to specific QR codes, ensuring users receive relevant content based on the code they scan. The database is maintained to include basic details such as historical facts and local points of interest.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        {/* <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        /> */}
        Centralised Database
      </div>
    ),
  },
  {
    title: (
      <p className="inline-flex items-center gap-4">
        <CloudAlert /> Offline Access (Limited)
      </p>
    ),
    description:
      "Hamiguitan MVP offers the ability to download basic trail information in advance. Functionality: Users can pre-download the information associated with the QR codes on a specific trail. Offline access is limited to text and image content only.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Offline Access
      </div>
    ),
  },
];
const Main = () => {
  const words = ["Explore", "Scan", "Discover"];

  return (
    <main className="relative">
      {/* hero content */}
      <div
        id="home"
        className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between  px-5 lg:px-72 py-10 md:py-0 min-h-screen "
      >
        <img
          src={heroBanner}
          alt=""
          className="hidden md:inline h-52 md:h-64 lg:h-96"
        />
        <div className="w-full md:w-1/2 flex flex-col justify-end gap-5">
          <div className="text-5xl md:text-8xl">
            <span className="  text-start font-sans font-bold text-deepBlue">
              Trek
            </span>
            <span className=" font-sans font-bold text-accentOrange">
              Scan
            </span>
          </div>
          <FlipWords
            words={words}
            className={"p-0 text-black font-bold text-5xl md:text-5xl"}
          />

          <p className="md:text-xl font-medium text-muted-foreground text-pretty leading-7">
            Your Smart Hiking Companion for Hamiguitan Trails
          </p>
          <div>
            <Button
              size="lg"
              className="bg-accentOrange hover:bg-orange-500"
              onClick={() => {
                document.getElementById("get-started").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      {/* additional content */}
      <div className="flex flex-col gap-20 mx-auto">
        <div id="content" className="md:w-1/2 px-5 py-10 mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-center  mb-5 lg:mb-10">
            Overview
          </h1>
          <p className=" text-muted-foreground  text-wrap md:text-center">
            Hamiguitan TrekScan MVP is a streamlined version of our hiking
            companion app, focused on delivering essential features that enhance
            the outdoor experience without the complexity of a full-scale
            product. The MVP allows hikers to access location-based information
            by scanning QR codes placed along trails, making it easy to learn
            more about the environment directly from their mobile devices.
          </p>
        </div>
        <div
          id="features"
          className="h-1/2 flex flex-col items-center justify-center py-10 lg:py-24"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-center mb:5 lg:mb-10">
            Core Features
          </h1>
          <StickyScroll content={content} />
        </div>
      </div>
      <div id="get-started" className="bg-defaultGray flex flex-col gap-14 justify-between px-5 py-14 lg:px-72 lg:py-24">
        <div className="md:w-2/3 space-y-5">
          <h2 className="text-4xl md:text-8xl font-bold text-zinc-800">
            Get Started with TrekScan
          </h2>
          <p className="md:text-lg text-muted-foreground">
            Get the TrekScan app and transform your hiking experience with
            instant access to trail insights, local stories, and key landmarks.
            Plan ahead by downloading essential trail information and explore
            with confidence—even without a signal
          </p>
        </div>
        <div className="flex-1 flex gap-5 flex-col items-center md:items-start md:justify-start lg:flex-row">
          <DownloadButton  icon={playstore} content={"Google Play"} />
          <DownloadButton icon={apple} content={"App Store"} />
        </div>
      </div>
    </main>
  );
};

export default Main;

import React, { useEffect, useRef, useState } from "react";
import ListItem from "../components/ListItem";
import CommunityEventsIcon from "../assets/CommunityEventsIcon";
import Dumbell from "../assets/Dumbell";
import WifiIcon from "../assets/WifiIcon";
import Coffee from "../assets/Coffee";
import RupeeIcon from "../assets/RupeeIcon";
import ChairsIcon from "../assets/ChairsIcon";
import QuickTimerIcon from "../assets/QuickTimerIcon";
import BadmintonIcon from "../assets/BadmintonIcon";
import Header from "../components/Header";
import OverviewCard from "../components/OverviewCard";
import BgGradient from "../assets/background-gradient.png";
import CoWorker from "../assets/co-working-video.gif";
import VectorBg from "../assets/VectorBg.png";
import MobileAppIcon from "../assets/MobileAppIcon.png";
import GooglePlayIcon from "../assets/GooglePlay.png";
import AppStoreIcon from "../assets/AppStore.png";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../utils/appSlice";
import { OVERVIEW_API_URL } from "../constants/constants";

const Home = () => {
  const canvasRef = useRef(null);
  const [mergedImage, setMergedImage] = useState("");

  const dispatch = useDispatch();
  const [loadindData, setLoadingData] = useState(false);
  const data = useSelector((state: any) => state.appData.data); //subscribe to store

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      try {
        const response = await fetch(OVERVIEW_API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        dispatch(setData(result));
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const bgImage = new Image();
    const overlayImage = new Image();

    bgImage.src = VectorBg;
    overlayImage.src = CoWorker;

    bgImage.onload = () => {
      canvas.width = bgImage.width;
      canvas.height = bgImage.height;
      ctx.drawImage(bgImage, 0, 0);
      overlayImage.onload = () => {
        ctx.globalAlpha = 0.5;
        ctx.drawImage(overlayImage, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL("image/png");
        setMergedImage(dataURL);
      };
    };
  }, []);

  if (loadindData) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="flex">
        <div className="hidden md:block relative">
          <img className="opacity-50 w-full" src={BgGradient} alt="bg" />
          <div className="absolute inset-0 flex items-center justify-center px-24">
            <p className="text-black text-5xl font-bold p-2 rounded">
              Host your meeting with world-class amenities. Starting at{" "}
              <label className="text-amber-400">₹199/-!</label>
            </p>
          </div>
        </div>
        <div>
          <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
          {mergedImage && <img src={mergedImage} alt="Merged" />}
        </div>
      </div>
      <p className="md:hidden text-black text-center text-lg font-bold p-2 rounded">
        Host your meeting with world-class amenities. Starting at{" "}
        <label className="text-amber-400">₹199/-!</label>
      </p>

      <div className="bg-gray-100 h-full py-6 px-4 md:px-24">
        <ChooseUs />
        <OverView data={data} />
        <AppOverView />
      </div>
    </div>
  );
};

export default Home;

const ChooseUs = () => {
  const bhiveBenefits = [
    { name: "Community Events", icon: <CommunityEventsIcon /> },
    { name: "Gym Facilities", icon: <Dumbell /> },
    { name: "High-Speed WiFi", icon: <WifiIcon /> },
    { name: "Coffee & Tea Bar", icon: <Coffee /> },
    { name: "Affordable", icon: <RupeeIcon /> },
    { name: "Comfot & Lounges", icon: <ChairsIcon /> },
    { name: "Quick Booking", icon: <QuickTimerIcon /> },
    { name: "Sports Area", icon: <BadmintonIcon /> },
  ];
  return (
    <div className="my-10">
      <Header title={"Why Choose us?"} />
      <div className="grid grid-cols-2 md:grid-cols-4 mt-6 gap-2 md:gap-0">
        {bhiveBenefits.map((item, i) => (
          <ListItem
            key={i}
            {...item}
            border={`${i < 4 ? "md:border-b" : ""} ${
              i !== Math.floor((bhiveBenefits.length - 1) / 2) &&
              i !== bhiveBenefits.length - 1
                ? "md:border-r"
                : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const OverView = ({ data }: any) => {
  return (
    <div className="my-10">
      <Header title={"Our Space Overview"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {data.map((d: any, i: number) => (
          <OverviewCard key={i} {...d} />
        ))}
      </div>
    </div>
  );
};

const AppOverView = () => {
  return (
    <div className="mt-10">
      <Header title={"Download our app now"} customStyles="text-slate-600" />
      <div className="flex justify-between items-center mt-8 md:mt-16 shadow-lg rounded-md bg-white relative overflow-visible">
        <div className="w-full md:w-1/2 mt-0 md:mt-[-50px] px-2 md:px-8 pt-4">
          <img
            className="w-auto h-auto md:h-72 rounded-md"
            src={MobileAppIcon}
            alt="app-icon"
          />
        </div>
        <div className="hidden w-1/2 md:flex flex-col justify-between">
          <label className="text-lg pr-6">
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks
          </label>
          <div className="flex gap-4 mt-6">
            <img className="h-10" src={GooglePlayIcon} alt="Google-play" />
            <img className="h-10" src={AppStoreIcon} alt="App-Store" />
          </div>
        </div>
      </div>
    </div>
  );
};


import React from 'react';
import Marquee from 'react-fast-marquee'
import Programs from "./Home Content/Programs";
import Event from "./Home Content/Event";
import NoticeBoard from "./Home Content/NoticeBoard";
import ImageTransaction from "./Home Content/ImageTransaction";
import EduMinister from "./Home Content/EduMinister";
import Principal from "./Home Content/Principal";
import VisionMission from "./Home Content/VisionMission"
import "../components/home.css"
const Home = () => {
  return <>
    <div>
      <ImageTransaction />
    </div>
    <div>
      <Marquee>
        <h3>WELCOME TO HSAM</h3>
      </Marquee>
    </div>
    <div>
      <EduMinister />
    </div>
    <div>
      <VisionMission />
    </div>
    <div>
      <Principal />
    </div>
    <div>
      <NoticeBoard />
    </div>
    <div>
      <Event />

    </div>
    <div>
      <Programs/>
    </div>
  </>
};
export default Home;

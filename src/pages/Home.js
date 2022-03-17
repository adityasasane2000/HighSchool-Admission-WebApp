import React from "react";
import Marquee from "react-fast-marquee";
import Programs from "../components/HomeContent/Programs";
import NoticeBoard from "../components/HomeContent/NoticeBoard";
import ImageTransaction from "../components/HomeContent/ImageTransaction";
import EduMinister from "../components/HomeContent/EduMinister";
import Principal from "../components/HomeContent/Principal";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="ImageTransaction">
        <ImageTransaction />
      </div>
      <div>
        <Marquee
          className="marquee1"
          width="100%"
          direction="right"
          height="20px"
          behaviour="absolute"
        >
          <h6>
            Welcome to High School Admission Management System Contact our
            helpline 81633-22222
          </h6>
        </Marquee>
      </div>
      <div>
        <EduMinister />
      </div>

      <div>
        <NoticeBoard />
      </div>
      <div>
        <Principal />
      </div>
      <div>
        <Programs />
      </div>
    </>
  );
};
export default Home;

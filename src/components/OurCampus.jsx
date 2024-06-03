import React from "react";
import ourCampusBg from "../imgs/our_campus_bg.png";
import { FaArrowRight } from "react-icons/fa";
import campus01Img from "../imgs/campus_01.png";
import campus02Img from "../imgs/campus_02.png";
import campus03Img from "../imgs/campus_03.png";
import campus04Img from "../imgs/campus_04.png";
import campus05Img from "../imgs/campus_05.png";
import campus06Img from "../imgs/campus_06.png";
const OurCampus = () => {
  return (
    <section className=" ">
      <div className="relative bg-[#292967] w-full h-48">
        <img src={ourCampusBg} alt="" srcset="" className="h-48 w-full " />
      </div>
      <div className="max-w-screen-lg relative z-10 -mt-36 mx-auto ">
        <div className="flex items-center justify-between w-full px-10 mb-5">
          <div className="uppercase">
            <span className="font-light text-white">our</span>
            <h5 className="font-bold text-primary-yellow text-3xl">campuses</h5>
          </div>
          <button className="rounded-full hidden md:flex items-center gap-x-4 bg-primary-yellow px-3 py-2 text-xs text-primary-blue font-semibold">
            <span>Enquire Now</span>
            <div className="size-6 bg-primary-blue rounded-full flex ">
              <FaArrowRight className="text-primary-yellow m-auto" />
            </div>
          </button>
        </div>
        <div className="px-6 md:px-10 relative z-20">
          <swiper-container
            slides-per-view="1"
            space-between="10"
            // scrollbar-clickable="true"
            pagination="true"
            // mousewheel-invert="true"
            navigation="true"
            breakpoints={JSON.stringify({})}
            style={{
              //   height: "460px",
              //   width: "100px",
              //   border: "1px solid red",
              //   paddingBottom: "40px",
              "--swiper-navigation-color": "#292967",
              "--swiper-pagination-color": "#292967",
              "--swiper-navigation-size": "18px",
              "--swiper-navigation-top-offset": "100px",
              "--swiper-navigation-sides-offset": "10px",
            }}
          >
            <swiper-slide style={{}}>
              <div className="w-full grid grid-cols-5 md:grid-cols-4 gap-4">
                <img
                  src={campus01Img}
                  alt=""
                  srcSet=""
                  className="h-48 rounded-lg w-full col-span-2 md:col-span-2"
                />
                <img
                  src={campus02Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-3 md:col-span-1"
                />
                <img
                  src={campus03Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-5 md:col-span-1 object-cover"
                />
                <img
                  src={campus04Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-3 md:col-span-1"
                />
                <img
                  src={campus05Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-2 md:col-span-1"
                />
                <img
                  src={campus06Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-5 md:col-span-2 object-cover"
                />
              </div>
            </swiper-slide>
            {/* <swiper-slide style={{}}>
              <div className="w-full grid grid-cols-5 md:grid-cols-4 gap-4">
                <img
                  src={campus01Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-2 md:col-span-2"
                />
                <img
                  src={campus02Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-3 md:col-span-1"
                />
                <img
                  src={campus03Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-5 md:col-span-1 object-cover"
                />
                <img
                  src={campus04Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-3 md:col-span-1"
                />
                <img
                  src={campus05Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-2 md:col-span-1"
                />
                <img
                  src={campus06Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-5 md:col-span-2 object-cover"
                />
              </div>
            </swiper-slide> */}
            {/* <swiper-slide style={{}}>
              <div className="w-full grid grid-cols-5 md:grid-cols-4 gap-4">
                <img
                  src={campus01Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-2 md:col-span-2"
                />
                <img
                  src={campus02Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-3 md:col-span-1"
                />
                <img
                  src={campus03Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-5 md:col-span-1 object-cover"
                />
                <img
                  src={campus04Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-3 md:col-span-1"
                />
                <img
                  src={campus05Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-2 md:col-span-1"
                />
                <img
                  src={campus06Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-5 md:col-span-2 object-cover"
                />
              </div>
            </swiper-slide> */}
            {/* <swiper-slide style={{}}>
              <div className="w-full grid grid-cols-5 md:grid-cols-4 gap-4">
                <img
                  src={campus01Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-2 md:col-span-2"
                />
                <img
                  src={campus02Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-3 md:col-span-1"
                />
                <img
                  src={campus03Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-5 md:col-span-1 object-cover"
                />
                <img
                  src={campus04Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-3 md:col-span-1"
                />
                <img
                  src={campus05Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-2 md:col-span-1"
                />
                <img
                  src={campus06Img}
                  alt=""
                  srcset=""
                  className="h-48 rounded-lg w-full col-span-5 md:col-span-2 object-cover"
                />
              </div>
            </swiper-slide> */}
          </swiper-container>
        </div>
        <button className="rounded-full md:hidden m-auto mt-5 flex items-center gap-x-4 bg-primary-blue px-3 py-2 text-xs text-white font-semibold">
          <span>Enquire Now</span>
          <div className="size-6 bg-primary-yellow rounded-full flex ">
            <FaArrowRight className="text-primary-blue m-auto" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default OurCampus;

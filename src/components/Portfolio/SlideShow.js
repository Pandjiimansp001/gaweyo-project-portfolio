import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import SlideData from "./SlideData";

const SlideShow = () => {
  return (
    <div className="flex justify-center pt-36">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {SlideData.map((data) => (
          <SwiperSlide>
            <div
              key={data.id}
              className="flex justify-center gap-12 pt-20 pb-20"
            >
              <img
                src={data.image}
                alt="Gaweyo Project"
                className="w-[500px] shadow-xl rounded-lg hover:scale-110 transition duration-500 ease-in-out cursor-pointer"
              />
              <div className="w-[500px] flex items-center">
                <div className="italic text-3xl font-semibold text-dark tracking-wider">
                  "{data.description}"
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideShow;

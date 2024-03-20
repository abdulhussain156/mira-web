import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "/public/images/brand/aegps.svg";
import two from "/public/images/brand/fev.svg";
import three from "/public/images/brand/sypheon.png";
import four from "/public/images/brand/Vulpes.png";
import five from "/public/images/brand/wemalo.png";

const HomeSponsor = () => {
  return (
    <div className="sponsor section pb-0">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="sponsor__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={1200}
                loop={true}
                roundLengths={true}
                centeredSlides={true}
                centeredSlidesBounds={false}
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  1400: {
                    slidesPerView: 6,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                }}
                className="sponsor__slider"
              >
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={one} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={two} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={three} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={four} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={five} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={one} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={two} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={one} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={two} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={three} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={four} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={five} alt="Image" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={three} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={four} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={five} alt="Image" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default HomeSponsor;
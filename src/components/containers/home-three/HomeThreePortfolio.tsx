import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import sleep from "/public/images/portfolio/sleepApp.png";
import handheld from "/public/images/portfolio/handheld.png";
import parking from "/public/images/portfolio/parking.png";
import davinci from "/public/images/portfolio/davinci.png";

const HomeThreePortfolio = () => {
  return (
    <section className="section portfolio portfolio-three pb-0">
      <div className="portfolio__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="portfolio__text-slider"
        >
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="portfolio-three__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                centeredSlides={true}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-portfolio",
                  prevEl: ".prev-portfolio",
                }}
                breakpoints={{
                  992: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 1.5,
                  },
                }}
                className="portfolio-three__slider"
              >
                <SwiperSlide>
                  <div className="portfolio__single topy-tilt">
                    <Link href="portfolio">
                      <Image src={sleep} alt="Image" />
                    </Link>
                    <div className="portfolio__single-content">
                      <Link href="portfolio">
                        <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                      </Link>
                      <h4>
                        <Link href="portfolio">Askona Sleep App</Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="portfolio__single topy-tilt">
                    <Link href="portfolio">
                      <Image src={handheld} alt="Image" />
                    </Link>
                    <div className="portfolio__single-content">
                      <Link href="portfolio">
                        <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                      </Link>
                      <h4>
                        <Link href="portfolio">Wemalo Handheld</Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="portfolio__single topy-tilt">
                    <Link href="portfolio">
                      <Image src={parking} alt="Image" />
                    </Link>
                    <div className="portfolio__single-content">
                      <Link href="portfolio">
                        <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                      </Link>
                      <h4>
                        <Link href="portfolio">MI Park App</Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="portfolio__single topy-tilt">
                    <Link href="portfolio">
                      <Image src={davinci} alt="Image" />
                    </Link>
                    <div className="portfolio__single-content">
                      <Link href="portfolio">
                        <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                      </Link>
                      <h4>
                        <Link href="portfolio">Davinci</Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-portfolio">
          <i className="fa-light fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-portfolio">
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default HomeThreePortfolio;

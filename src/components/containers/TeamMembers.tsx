import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "/public/images/team/RazaAbbas.jpeg";
import two from "/public/images/team/AbbasMadad.jpeg";
import three from "/public/images/team/IrtazaMadad.jpg";

const TeamMembers = () => {
  return (
    <section className="section team-slider-s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      our awesome crew
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">
                      our amazing team members
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="our-teams"
                      className="btn btn--primary text-capitalize"
                    >
                      view all teams
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-r position-relative">
        <div className="team-s__slider-w">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            speed={800}
            loop={true}
            centeredSlides={false}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".next-team-s",
              prevEl: ".prev-team-s",
            }}
            className="team-s__slider"
            breakpoints={{
              768: {
                slidesPerView: 3,
                centeredSlides: true,
              },
              576: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={one} alt="Image" width={450} />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          He is the founder and CEO of Mira Dev, with over a
                          decade of experience in both software and hardware
                          development.
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">Raza Abbas</Link>
                      </h4>
                      <p>CEO</p>
                      <div className="social-alt">
                        <Link
                          href="www.linkedin.com/in/raza-abbas-4576a0147/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link
                          href="mailto:raza.abbas@mira-dev.de"
                          target="_blank"
                          aria-label="share us on instagram"
                        >
                          <i className="fa fa-envelope"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Raza Abbas</Link>
                      </h5>
                      <p>CEO</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        He is the founder and CEO of Mira Dev, with over a
                        decade of experience in both software and hardware
                        development. His vision revolves around bridging the gap
                        between humanity and the tech industry, a mission he
                        diligently pursues each day.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="www.linkedin.com/in/raza-abbas-4576a0147/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="mailto:raza.abbas@mira-dev.de"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa fa-envelope"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={two} alt="Image" width={450} />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          Abbas leads the development of ERP systems, bringing
                          his expertise in ERP software to the forefront.
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">Abbas Madad</Link>
                      </h4>
                      <p>SAP B1 (HOD)</p>
                      <div className="social-alt">
                        <Link
                          href="www.linkedin.com/in/abbas-naqvi-2bb470101/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link
                          href="mailto:abbas.madad@mira-dev.de"
                          target="_blank"
                          aria-label="share us on instagram"
                        >
                          <i className="fa fa-enveloper"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Abbas Madad</Link>
                      </h5>
                      <p>SAP B1 (HOD)</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Abbas leads the development of ERP systems, bringing his
                        expertise in ERP software to the forefront. With vast
                        experience in SAPB1, he has successfully completed
                        numerous projects worldwide.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="www.linkedin.com/in/abbas-naqvi-2bb470101/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="mailto:abbas.madad@mira-dev.de"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa fa-enveloper"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={three} alt="Image" width={450} />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          Irtaza is a Technical Project Manager specializing in
                          software solutions and IoT development, adept at
                          navigating the complexities of networks and emerging
                          technologies.
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">Irtaza Madad</Link>
                      </h4>
                      <p>Technical Project Manager</p>
                      <div className="social-alt">
                        <Link
                          href="www.linkedin.com/in/irtaza-madad-naqvi-798b5715a/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link
                          href="mailto:irtaza.madad@mira-dev.de"
                          target="_blank"
                          aria-label="share us on instagram"
                        >
                          <i className="fa fa-enveloper"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Irtaza Madad</Link>
                      </h5>
                      <p>Technical Project Manager</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Irtaza is a Technical Project Manager specializing in
                        software solutions and IoT development, adept at
                        navigating the complexities of networks and emerging
                        technologies. With 4 to 5 years of experience, he brings
                        a wealth of expertise to the table.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="www.linkedin.com/in/irtaza-madad-naqvi-798b5715a/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="mailto:irtaza.madad@mira-dev.de"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa fa-enveloper"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={one} alt="Image" width={450} />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          He is the founder and CEO of Mira Dev, with over a
                          decade of experience in both software and hardware
                          development.
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">Raza Abbas</Link>
                      </h4>
                      <p>CEO</p>
                      <div className="social-alt">
                        <Link
                          href="www.linkedin.com/in/raza-abbas-4576a0147/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link
                          href="mailto:raza.abbas@mira-dev.de"
                          target="_blank"
                          aria-label="share us on instagram"
                        >
                          <i className="fa fa-envelope"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Raza Abbas</Link>
                      </h5>
                      <p>CEO</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        He is the founder and CEO of Mira Dev, with over a
                        decade of experience in both software and hardware
                        development. His vision revolves around bridging the gap
                        between humanity and the tech industry, a mission he
                        diligently pursues each day.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="www.linkedin.com/in/raza-abbas-4576a0147/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="mailto:raza.abbas@mira-dev.de"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa fa-envelope"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={two} alt="Image" width={450} />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          Abbas leads the development of ERP systems, bringing
                          his expertise in ERP software to the forefront.
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">Abbas Madad</Link>
                      </h4>
                      <p>SAP B1 (HOD)</p>
                      <div className="social-alt">
                        <Link
                          href="www.linkedin.com/in/abbas-naqvi-2bb470101/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link
                          href="mailto:abbas.madad@mira-dev.de"
                          target="_blank"
                          aria-label="share us on instagram"
                        >
                          <i className="fa fa-enveloper"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Abbas Madad</Link>
                      </h5>
                      <p>SAP B1 (HOD)</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Abbas leads the development of ERP systems, bringing his
                        expertise in ERP software to the forefront. With vast
                        experience in SAPB1, he has successfully completed
                        numerous projects worldwide.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="www.linkedin.com/in/abbas-naqvi-2bb470101/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="mailto:abbas.madad@mira-dev.de"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa fa-enveloper"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={three} alt="Image" width={450} />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          Irtaza is a Technical Project Manager specializing in
                          software solutions and IoT development, adept at
                          navigating the complexities of networks and emerging
                          technologies.
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">Irtaza Madad</Link>
                      </h4>
                      <p>Technical Project Manager</p>
                      <div className="social-alt">
                        <Link
                          href="www.linkedin.com/in/irtaza-madad-naqvi-798b5715a/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link
                          href="mailto:irtaza.madad@mira-dev.de"
                          target="_blank"
                          aria-label="share us on instagram"
                        >
                          <i className="fa fa-enveloper"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Irtaza Madad</Link>
                      </h5>
                      <p>Technical Project Manager</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Irtaza is a Technical Project Manager specializing in
                        software solutions and IoT development, adept at
                        navigating the complexities of networks and emerging
                        technologies. With 4 to 5 years of experience, he brings
                        a wealth of expertise to the table.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="www.linkedin.com/in/irtaza-madad-naqvi-798b5715a/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="mailto:irtaza.madad@mira-dev.de"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa fa-enveloper"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="slide-group">
          <button aria-label="previous item" className="slide-btn prev-team-s">
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button aria-label="next item" className="slide-btn next-team-s">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;

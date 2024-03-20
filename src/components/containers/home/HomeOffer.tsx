import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import blogthumb from "/public/images/offer/blog-thumb.png";
import two from "/public/images/offer/two.png";
import three from "/public/images/offer/three.png";
import star from "/public/images/offer/star.png";
import web from "/public/images/offer/web.jpeg";
import mobile from "/public/images/offer/mobile.jpeg";
import software from "/public/images/offer/software.jpeg";
import uiux from "/public/images/offer/uiux.jpeg";
import cloud from "/public/images/offer/cloud.jpeg";

const services = [
  {
    number: "01",
    title: "Web Development",
    link: "service-single",
    image: web,
  },
  {
    number: "02",
    title: "App Development",
    link: "service-single",
    image: mobile,
  },
  {
    number: "03",
    title: "Enterprise Software",
    link: "service-single",
    image: software,
  },
  {
    number: "04",
    title: "UI/UX Design Services",
    link: "service-single",
    image: uiux,
  },
  {
    number: "05",
    title: "Cloud-Based Solutions",
    link: "service-single",
    image: cloud,
  },
];

const Portfolio = () => {
  return (
    <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
      <div className="offer__cta">
        {services.map((service, index) => (
          <div key={index} className="offer__cta-single fade-top">
            <span className="sub-title">
              {service.number}
              <i className="fa-solid fa-arrow-right"></i>
            </span>
            <h2>
              <Link href={service.link}>
                {service.title}
                <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
              </Link>
            </h2>
            <div className="offer-thumb-hover d-none d-md-block">
              <Image src={service.image} alt="Image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomeOffer = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll(".offer__cta-single");
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.children[2] as HTMLElement;
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="section offer fade-wrapper light">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5">
            <div className="offer__content section__content">
              <span className="sub-title">
                WHAT WE OFFER
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Giving Your Business Some Great Ideas
              </h2>
              <div className="paragraph">
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation on the runway
                  heading towards a streamlined cloud solution going forward
                  porttitor dictum sapien.
                </p>
              </div>
              <div className="section__content-cta">
                <Link href="our-services" className="btn btn--secondary">
                  view all services
                </Link>
              </div>
            </div>
          </div>
          <Portfolio />
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default HomeOffer;

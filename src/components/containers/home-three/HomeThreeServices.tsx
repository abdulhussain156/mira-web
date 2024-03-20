import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dotlarge from "/public/images/agency/dot-large.png";
import one from "/public/images/service/web.jpg";

const HomeThreeServices = () => {
  const [imgTab, setImgTab] = useState(0);

  const serviceItems = [
    {
      title: "Web Development",
      text: "Build an attractive website packed with modern features. Our web developers master the craft of designing, building, and maintaining e-commerce websites and web-based applications built on modern tech stacks.",
      link: "service-details",
    },
    {
      title: "Mobile App Development",
      text: "Mobile apps that run across different platforms and varying screen sizes. Be it games, e-commerce apps or educational apps, our team is ready to give you a comprehensive solution to stand tall in sheer competition.",
      link: "service-details",
    },
    {
      title: "Enterprise Software",
      text: "With vast experience in development and implementation of Enterprise solutions, MIRA has an expert team of developers and consultant to take your business to the next level. We offer exclusive services for SAP with add-ons integration.",
      link: "service-details",
    },
    {
      title: "Cloud-Based Solutions",
      text: "With Mira's managed cloud services enjoy secure, scalable solutions along with storage, processing, and app deployment. We hold expertise in working with all major cloud platforms like GCP, GKE, AWS, and Azure",
      link: "service-details",
    },
    {
      title: "UI/UX Design Services",
      text: "We hold expertise in creating not only visually aesthetic interfaces, but also user-friendly ones which will help improve the user experience. A compelling UI/UX design based on in-depth research on user behavior and needs.",
      link: "/contact-us",
    },
  ];

  return (
    <section className="section service-f fade-wrapper ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary g-ind">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      What we offer
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">our main services</h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="our-services"
                      className="btn btn--primary text-capitalize"
                    >
                      view all service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              {serviceItems.map((item, index) => (
                <div
                  key={`service-item-${index}`}
                  className={
                    "service-f-single fade-top " +
                    (imgTab === index ? " service-f-single-active" : " ")
                  }
                >
                  <div className="single-item">
                    <span className="sub-title">
                      {`0${index + 1}`}
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h4>{item.title}</h4>
                    <div className="p-single">
                      <p>{item.text}</p>
                    </div>
                  </div>
                  <div className="p-single single-item p-sm">
                    <ul>
                      <li>
                        <i className="fa-solid fa-angle-right"></i>
                        Legacy Modernization
                      </li>
                      <li>
                        <i className="fa-solid fa-angle-right"></i>
                        Solution Design
                      </li>
                      <li>
                        <i className="fa-solid fa-angle-right"></i>
                        Technology Enabling
                      </li>
                      <li>
                        <i className="fa-solid fa-angle-right"></i>
                        Mobile-First Systems
                      </li>
                    </ul>
                  </div>
                  <div className="single-item p-single p-sm">
                    <Image src={one} alt="Image" />
                  </div>
                  <button
                    className="toggle-service-f"
                    onClick={() => setImgTab(imgTab === index ? -1 : index)}
                  ></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Image src={dotlarge} alt="Image" className="dot-img" />
    </section>
  );
};

export default HomeThreeServices;

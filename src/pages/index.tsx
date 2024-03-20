import React from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import Agency from "@/components/containers/home/Agency";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeOffer from "@/components/containers/home/HomeOffer";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import HomeBlog from "@/components/containers/home/HomeBlog";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import NextPage from "@/components/containers/home/NextPage";
import HomeThreeServices from "@/components/containers/home-three/HomeThreeServices";
import HomeThreePortfolio from "@/components/containers/home-three/HomeThreePortfolio";
import WorkSteps from "@/components/containers/home-three/WorkSteps";
import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";

const Home = () => {
  return (
    <Layout header={1} footer={1} video={true}>
      <HomeOneBanner />
      <Agency />
      <HomeOffer />
      <HomeThreePortfolio />
      <WorkSteps />
      <HomeTestimonialThree />
      {/* <HomeBlog /> */}
      <HomeSponsor />
      <NextPage />
    </Layout>
  );
};

export default Home;

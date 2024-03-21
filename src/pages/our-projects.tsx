import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProjectMain from "@/components/containers/project/ProjectMain";
import WorkStepsProject from "@/components/containers/project/WorkStepsProject";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import WorkSteps from "@/components/containers/home-three/WorkSteps";

const OurProjects = () => {
  return (
    <Layout header={1} footer={2} video={0}>
      <CmnBanner title="Our Projects" navigation="Our Projects" />
      <ProjectMain />
      <WorkSteps />
      <CtaTwo />
    </Layout>
  );
};

export default OurProjects;

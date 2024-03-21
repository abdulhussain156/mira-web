import Layout from "@/components/layout/Layout";
import ShowcasesFullScreen from "@/components/swiper/Showcases-full-screen";
import React from "react";

export default function showcase() {
  return (
    <Layout header={4} footer={77} video={0}>
      <ShowcasesFullScreen />
    </Layout>
  );
}

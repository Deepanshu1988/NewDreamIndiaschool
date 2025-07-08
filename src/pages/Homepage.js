import React from "react";
import styled from "styled-components";
import Layout from "../Layout/Layout";
import HeroSection from "../component/HeroSection";
import AboutShort from "../component/AboutShort";
import CardSection from "../component/CardSection";
// import AboutSecond from "../component/AboutSecond";
import OurClasses from "../component/OurClasses";
import SchoolFacility from "../component/SchoolFacility";
import LearningPro from "../component/LearningPro";

const Homepage = () => {
  return (
    <>
      <Container>
        <Layout title={"Home - wings of joy"}>
          <HeroSection />
          <AboutShort />
          <CardSection />
          {/* <AboutSecond /> */}
          <OurClasses />
          <SchoolFacility />
          <LearningPro />
        </Layout>
      </Container>
    </>
  );
};

export default Homepage;
const Container = styled.div`
  background: url("https://res.cloudinary.com/antrix/image/upload/v1681813312/party%20people%20rockon/mid-two-bg_ego2on.png");
`;

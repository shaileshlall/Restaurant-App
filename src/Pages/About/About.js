import React from "react";
import Layout from "../../components/Layouts/layout";
import "../../Styles/AboutStyles.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const About = () => {
  return (
    <Layout>
      {/* About Section1 */}
      <Section1 />
      {/* About Section2 */}
      <Section2 />
      {/* About Section3 */}
      <Section3 />
    </Layout>
  );
};

export default About;

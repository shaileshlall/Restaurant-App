import React from "react";
import Layout from "../../components/Layouts/layout";
import "../../Styles/AboutStyles.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

const About = () => {
  return (
    <Layout>
      {/* About Section1 */}
      <Section1 />
      {/* About Section2 */}
      <Section2 />
      {/* About Section3 */}
      <Section3 />
      {/* About Section4 */}
      <Section4 />
      {/* About Section5 */}
      <Section5 />
      {/* About Section6 */}
      <Section6 />
    </Layout>
  );
};

export default About;

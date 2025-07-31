import React from "react";
import Section1 from "./Section1";
import Layout from "../../components/Layouts/layout.js";
import Section2 from "./Section2.js";
import Section3 from "./Section3.js";

const Blog = () => {
  return (
    <Layout>
      {/* {Contact Section1} */}
      <Section1 />
      {/* {Contact Section2} */}
      <Section2 />
      {/* {Contact Section3} */}
      <Section3 />
    </Layout>
  );
};

export default Blog;

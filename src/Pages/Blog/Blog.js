import React from "react";
import Section1 from "./Section1";
import Layout from "../../components/Layouts/layout.js";
import Section2 from "./Section2.js";

const Blog = () => {
  return (
    <Layout>
      {/* Blog Section1 */}
      <Section1 />
      {/* Blog Section2 */}
      <Section2 />
    </Layout>
  );
};

export default Blog;

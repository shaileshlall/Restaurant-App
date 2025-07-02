import React from "react";
import Layout from "../../components/Layouts/layout";
import "../../Styles/MenuStyles.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Menu = () => {
  return (
    <Layout>

      {/* Menu Section1 */}
      <Section1 />
      {/* Menu Section2 */}
      <Section2 />
      {/* Menu Section3 */}
      <Section3 />
    </Layout>
  );
};

export default Menu;

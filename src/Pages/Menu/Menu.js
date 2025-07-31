import React, { useState } from "react";
import Layout from "../../components/Layouts/layout.js";
import Section1 from "../Menu/Section1";
import Section2 from "../../Pages/Menu/Section2";
import FoodMenu from "../../Pages/Menu/FoodMenu";
import Section3 from "./Section3";

const App = () => {
  const [activeTab, setActiveTab] = useState("TB Recommended");

  return (
    <Layout>
      <Section1 />
      <Section2 activeTab={activeTab} setActiveTab={setActiveTab} />
      <FoodMenu activeTab={activeTab} />
      <Section3 />
    </Layout>
  );
};

export default App;

import React, { useState } from "react";
// import Section3 from "./Section3";
// import SpecialImg from "../../assets/hero/hero-2.png";

const Section2 = () => {
  const [activeTab, setActiveTab] = useState("Special");

  const menuItems = ["Special", "Breakfast", "Lunch", "Dinner"];

  const renderContent = () => {
    switch (activeTab) {
      case "Special":
        return <p>This is the Special menu content.</p>;
      case "Breakfast":
        return <p>This is the Breakfast menu content.</p>;
      case "Lunch":
        return <p>This is the Lunch menu content.</p>;
      case "Dinner":
        return <p>This is the Dinner menu content.</p>;
      default:
        return null;
    }
  };

  return (
    <section className="Menu_section2 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="section-tittle text-center mb-40">
              <span className="section_title">Our Offerd Menu</span>
              <h2 className="mt-3">
                Some Trendy And Popular <br /> Courses Offerd
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="properties_button">
            <nav className="nav justify-content-center mt-5">
              <div
                id="nav-tab"
                className="d-flex justify-content-center align-items-center gap-3"
                role="tablist"
              >
                {menuItems.map((item) => (
                  <button
                    key={item}
                    className={`nav-link ${activeTab === item ? "active" : ""}`}
                    onClick={() => setActiveTab(item)}
                    style={{ color: "var(--light-black)", fontSize: "20px" }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Render the content based on activeTab */}
        <div className="text-center mt-5">{renderContent()}</div>
      </div>
    </section>
  );
};

export default Section2;

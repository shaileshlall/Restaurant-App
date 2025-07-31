import React from "react";
import "../../Styles/MenuStyles.css";

const Section2 = ({ activeTab, setActiveTab }) => {
  const menuItems = ["TB Recommended", "New Premium Burgers", "Korean Spicy Fest", "Value Meals"];

  return (
    <section className="Menu_section2 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="section-tittle text-center mb-40">
              <span className="section_title">Our Offered Menu</span>
              <h2 className="mt-3">
                Our team of seasoned chefs, each a virtuoso in their domain, craft culinary wonders that push <br /> <span className="text_span_color"> the boundaries of creativity. </span>
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
      </div>
    </section>
  );
};

export default Section2;

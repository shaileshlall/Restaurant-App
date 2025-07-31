import React from "react";
import "../../Styles/ContactStyles.css";
import MapComponent from "../../components/Layouts/MapComponent";

const Section2 = () => {
  return (
    <section className="contactUs_section py-5 mt-5 mb-5">
      <div className="map_container">
        <MapComponent />
      </div>
    </section>
  );
};

export default Section2;

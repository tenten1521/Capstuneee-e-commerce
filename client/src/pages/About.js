import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            In the bustling city of Manila, Justen, an ambitious entrepreneur,
            embarked on a mission to revolutionize shopping. They created
            E-Connect, an ecommerce website that connected people worldwide.
            With a diverse product range, intuitive interface, and innovative
            features, E-Connect became a global sensation, transforming the way
            people shop and interact online.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

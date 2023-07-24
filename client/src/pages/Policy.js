import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/polecy.jpg"
            alt="contactus"
            style={{ width: "55%" }}
          />
        </div>
        <div className="col-md-4 pt-5 mt-5 mb-5 pb-5">
          <p>
            Privacy Policy: We respect your privacy and ensure the secure
            handling of your personal information.
          </p>
          <p>
            Terms of Service: By using our website, you agree to abide by our
            terms and conditions for a fair and responsible shopping experience.
          </p>
          <p>
            Return and Refund Policy: We offer a hassle-free return and refund
            process within a specified timeframe, subject to certain conditions.
          </p>
          <p>
            Shipping and Delivery Policy: We provide transparent information
            about shipping methods, delivery times, and any associated costs.
          </p>
          <p>
            Payment Security Policy: Your payment information is handled
            securely using encryption and industry-standard security measures.
          </p>
          <p>
            Cookie Policy: We use cookies to enhance your browsing experience
            and provide personalized content. You have the option to manage your
            cookie preferences.
          </p>
          <p>
            Community Guidelines: We promote respectful and constructive
            interactions among users, with guidelines to maintain a positive
            community environment.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

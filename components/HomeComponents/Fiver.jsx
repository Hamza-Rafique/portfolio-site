import React from "react";

const FiverrBadge = () => {
  return (
    <>
      <div
        itemscope
        itemtype="http://schema.org/Person"
        className="fiverr-seller-widget"
        style={{ display: "inline-block" }}
      >
        <a
          itemProp="url"
          href="https://www.fiverr.com/hamzarafique964"
          rel="nofollow noreferrer"
          target="_blank"
          style={{ display: "inline-block" }}
        >
          <div
            className="fiverr-seller-content"
            id="fiverr-seller-widget-content-0d25e493-38da-4089-921a-730227e6de36"
            itemProp="contentURL"
            style={{ display: "none" }}
          ></div>
          <div id="fiverr-widget-seller-data" style={{ display: "none" }}>
            <div itemProp="name">hamzarafique964</div>
            <div itemscope itemtype="http://schema.org/Organization">
              <span itemProp="name">Fiverr</span>
            </div>
            <div itemProp="jobtitle">Seller</div>
            <div itemProp="description">
              I am a full-stack developer, I have a masters degree in Computer
              Science and 7+ years of experience in the software development
              field. I am excited about creating custom web apps, passionate
              about pixel-perfect UI, and love creating reusable design
              components. Id be happy to be a part of your next project.
              <br />
              <br />
              Feel free to send me a message!!
            </div>
          </div>
        </a>
      </div>

      <script
        id="fiverr-seller-widget-script-0d25e493-38da-4089-921a-730227e6de36"
        src="https://widgets.fiverr.com/api/v1/seller/hamzarafique964?widget_id=0d25e493-38da-4089-921a-730227e6de36"
        data-config='{"category_name":"Programming \u0026 Tech"}'
        async
        defer
      ></script>
    </>
  );
};

export default FiverrBadge;

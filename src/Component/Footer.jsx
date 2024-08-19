import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  let [catdata, setCatData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/product/categories`)
      .then((a) => a.json())
      .then((b) => setCatData(b));
  }, []);
  return (
    <>
      <footer
        className="section footer-classic context-dark bg-image"
        style={{ background: "#F85606" }}
      >
        <div className="container">
          <div className="row row-30">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4">
                <a className="brand" href="index.html">
                  <img
                    className="brand-logo-light"
                    src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png"
                    alt
                    width={140}
                    height={37}
                    srcSet="images/agency/logo-retina-inverse-280x74.png 2x"
                  />
                </a>
                <p>
                  E-commerce has evolved over the past few years and since it’s
                  easier and more convenient, it is evident that customers are
                  actually switching to the trend of online shopping. Daraz, the
                  Nepali shopping store, brings a whole new concept by
                  showcasing a number of famous brands under one roo
                </p>
                {/* Rights*/}
                <p className="rights">
                  <span>©&nbsp; </span>
                  <span className="copyright-year">2024</span>
                  <span>&nbsp;</span>
                  <span>Waves</span>
                  <span>.&nbsp;</span>
                  <span>All Rights Reserved.</span>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>TRENDING</h5>
              <ul>
                <li>Daraz 11.11 Sale</li>

                <li>12.12 Sale</li>

                <li>Dashain Dhamaka</li>

                <li>Mobile Week</li>

                <li>Valentine's Day Sale</li>

                <li>Cricket Streaming</li>

                <li>Grocery Shopping in Nepal</li>

                <li>Realme GT 2 Pro</li>

                <li>Realme GT Neo 3</li>
              </ul>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Category</h5>
              <ul className="nav-list">
                {catdata.slice(0, 7).map((a) => (
                  <li className="list-group-item" key={a.slug}>
                    <Link to={`/cat/${a.slug}`}>{a.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container border-top py-3">
          <div className="row no-gutters ">
            <div className="col-12 text-center">
              © 2024 Waves. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

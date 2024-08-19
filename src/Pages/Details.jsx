import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Details() {
  let { id } = useParams();
  let [productsdata, setProductsData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProductsData(data));
  }, [id]);

  return (
    <>
      <section>
        <div className="container">
          <div className="row border shadow">
            <div className="col-lg-3">
              {productsdata.images && (
                <img
                  className="w-100"
                  src={productsdata.images[0]} // Display the first image
                  alt={productsdata.title}
                />
              )}
            </div>
            <div className="col-lg-9">
              <h2>{productsdata.title}</h2>
              <p>{productsdata.description}</p>
              <h5>${productsdata.price}</h5>
              <Link to="/cart">
                <button className="btn btn-primary">Add to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;

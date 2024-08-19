import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Category() {
  let { cid } = useParams();
  let [productsdata, setProductsData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${cid}`)
      .then((a) => a.json())
      .then((b) => setProductsData(b.products));
  }, [cid]);

  return (
    <>
      <section>
        <div className="container">
          <h3 className="text-uppercase">{cid}</h3>
          <div className="row">
            {productsdata.map((a) => (
              <div className="col-md-3 col-sm-6 img-ctrl" key={a.id}>
                <div className="product-grid6">
                  <div className="product-image6">
                    <Link to={`/details/${a.id}`}>
                      <img className="pic-1" src={a.images[0]} alt={a.title} />
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <a
                        href="javascript:void(0)"
                        onClick={(e) => e.preventDefault()}
                      >
                        {a.title}
                      </a>
                    </h3>
                    <div className="price">
                      ${a.price}
                      <span></span>
                    </div>
                  </div>
                  <ul className="social">
                    <li>
                      <a href="javascript:void(0)" data-tip="Quick View">
                        <i className="fa fa-search" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;

import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <div className="container text-center py-4">
        <h1>Your Cart Is Empty</h1>
        <button className="btn btn-primary">
          <Link className=" text-white" to="/">
            {" "}
            Continue Shopping
          </Link>
        </button>
      </div>
    </>
  );
}

export default Cart;

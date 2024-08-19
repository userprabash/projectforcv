import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Products from "./Products";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Home() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row pb-4">
            <div className="col-lg-9 col-md-12 col-sm-6">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    className="w-100"
                    src="https://img.lazcdn.com/us/domino/e15504ff-1c92-4034-b93c-816daee4490c_NP-1976-688.jpg_1200x1200q80.jpg_.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-100"
                    src="https://img.lazcdn.com/us/domino/03fbbb08-39ac-4434-8ced-75aa5af02054_NP-1976-688.jpg_1200x1200q80.jpg_.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-100"
                    src="https://img.lazcdn.com/us/domino/04132ad8-df8c-47dd-a6e8-9fbd737eff07_NP-1976-688.jpg_1200x1200q80.jpg_.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-100"
                    src="https://img.lazcdn.com/us/domino/de365016-bd2c-46f4-91d3-f25c74bd1bbf_NP-1976-688.jpg_1200x1200q80.jpg_.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-100"
                    src="https://img.lazcdn.com/us/domino/aa55b314-dfa4-4acf-9d4a-24142324173f_NP-1976-688.jpg_1200x1200q80.jpg_.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-100"
                    src="https://img.lazcdn.com/us/domino/7a7f8e54-7964-4a59-aeca-b28af8bd870c_NP-1976-688.jpg_1200x1200q80.jpg_.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-100"
                    src="https://img.lazcdn.com/us/domino/79bd4e11-8035-41f3-a574-52f33c41c083_NP-1976-688.jpg_1200x1200q80.jpg_.webp"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-lg-3 d-none d-lg-block  pt-2">
              <img
                src="https://www.setopati.com/uploads/bigyaapan/57890000.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Products title="beauty" />
      <br />
      <br />
      <Products title="laptops" />
      <br />
      <br />
      <Products title="furniture" />
      <br />
      <br />
      <Products title="Fragrances" />
      <br />
      <br />
      <Products title="Groceries" />
      <br />
      <br />
      <Products title="home-decoration" />
      <br />
      <br />
      <Products title="kitchen-accessories" />
    </>
  );
}

export default Home;

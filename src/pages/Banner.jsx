import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles/banner.css";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpeg";
import img5 from "../images/img5.jpeg";
import img6 from "../images/img6.jpeg";

const imageData = [
  { title: "Title 1", description: "Description for Title 1", image: img1 },
  { title: "Title 2", description: "Description for Title 2", image: img2 },
  { title: "Title 3", description: "Description for Title 3", image: img3 },
  { title: "Title 4", description: "Description for Title 4", image: img4 },
  { title: "Title 5", description: "Description for Title 5", image: img5 },
  { title: "Title 6", description: "Description for Title 6", image: img6 },
];

function Banner() {
  const handleImageClick = (title) => {
    console.log(`Clicked on image with title: ${title}`);
    // Add your desired action here
  };

  return (
    <div className="Banner-div">
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {imageData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="image-container">
                <img
                  src={data.image}
                  alt={`slide_image_${index + 1}`}
                  onClick={() => handleImageClick(data.title)}
                />
                <div className="overlay">
                  <h2>{data.title}</h2>
                  <p>{data.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;

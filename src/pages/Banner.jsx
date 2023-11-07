import React from "react";
import { Carousel } from "react-carousel3";

const style = {
  width: "30%", // Make the carousel responsive
  height: "auto", // Make the carousel responsive
};

const bannerContainerStyle = {
  width: "100%",
  height: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(to bottom, #7a7b7e 0%, #a8a8a9 100%)",
};


const Banner = () => {
  return (
    <div style={bannerContainerStyle}>
      <Carousel
        height="60%"
        width="80%"
        yOrigin={42}
        yRadius={48}
        autoPlay={true}
      >
        <div key={1} style={style}>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div key={2} style={style}>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div key={3} style={style}>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div key={4} style={style}>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div key={5} style={style}>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

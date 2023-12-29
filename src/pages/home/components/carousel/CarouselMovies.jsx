import React , { useEffect, useState } from "react";
import { Carousel } from "antd";
import { fetchMovieCarouselListApi } from "services/movie";
import { NavLink } from "react-router-dom";
import { useResponsive } from "hooks/useResponsive";

export default function CarouselMovies() {
  const [carouselList, setCarouselList] = useState([]);
  const size = useResponsive();

  let heightCarousel = "600px";
  
  if (size.width > 1440) {
    heightCarousel = "800px";
  }
  
  const imgCarousel = {
    height: heightCarousel,
    objectFit: "cover",
    width: "100%",
  };
  const contentStyle = {
    width: "100%",
    height: "600px",
    color: "#fff",
    textAlign: "center",
    background: "transparent",
    display: "flex",
    justifyContent: "center",
  };


  useEffect(() => {
    fetchMovieCarousel();
  }, []);

  const fetchMovieCarousel = async () => {
    const result = await fetchMovieCarouselListApi();
    setCarouselList(result.data.content);
  };
  const renderCarousel = () => {
    return carouselList.map((ele) => {
      return (
        <NavLink key={ele.maBanner} to={`/movie-detail/${ele.maPhim}`}>
          <div className="card-img" style={contentStyle}>
            <img style={imgCarousel} src={ele.hinhAnh} alt="" />
          </div>
        </NavLink>
      );
    });
  };
  return (
    <>
      <Carousel autoplay>{renderCarousel()}</Carousel>
    </>
  );
}

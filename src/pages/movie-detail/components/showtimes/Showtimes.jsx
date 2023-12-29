import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieShowtimesApi } from "../../../../services/cinema";
import { formatDate } from "../../../../utils";

export default function Showtimes() {
  const [movieShowtimes, setMovieShowtimes] = useState({});
  const params = useParams();
  useEffect(() => {
    getMovieShowtimes();
  }, []);

  const getMovieShowtimes = async () => {
    const result = await fetchMovieShowtimesApi(params.id);

    console.log(result);
    setMovieShowtimes(result.data.content);
  };

  // Render ra Sidebar RẠP PHIM bên trái
  const renderTabs = () => {
    return movieShowtimes?.heThongRapChieu?.map((ele, idx) => {
      return (
        <a
          key={ele.maHeThongRap}
          className={`nav-link text-uppercase bg-light text-dark rounded-pill border mb-1 border-dark ${idx === 0 && "active"}`}
          data-toggle="pill"
          href={`#${ele.maHeThongRap}`}
          role="tab"
          aria-selected="true"
        >
          {ele.tenHeThongRap}
        </a>
      );
    });
  };

  // Render ra danh sách cụm rạp của từng RẠP PHIM
  const renderTabContent = () => {
    return movieShowtimes?.heThongRapChieu?.map((ele, idx) => {
      return (
        <div
          key={ele.maHeThongRap}
          className={`tab-pane fade show ${idx === 0 && "active"}`}
          id={ele.maHeThongRap}
          role="tabpanel"
        >
          {ele?.cumRapChieu?.map((ele) => {
            return (
              <div key={ele.maCumRap} className="row mb-5">
                <div className="col-1">
                  <img className="img-fluid rounded" src={ele.hinhAnh} />
                </div>
                <div className="col-11 pl-0 pb-3">
                  <h5>{ele.tenCumRap}</h5>
                  <span className="text-muted">{ele.diaChi}</span>
                </div>
                
                <div className="col-12 ">
                  <div className="row">
                    {ele?.lichChieuPhim?.map((ele) => {
                      return (
                        <div key={ele.maLichChieu} className="col-xl-7 col-lg-9 col-md-10 col-sm-11 col-11 border text-center">
                          <Link className="text-dark text-decoration-none" to={`/booking/${ele.maLichChieu}`}> <button className="btn btn-info rounded-pill m-3">Đặt vé <span>2D -  Phụ đề </span></button><br />{formatDate(ele.ngayChieuGioChieu)}  </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="col-12 mt-5">
      <h4 id="muave" className="col-12 border-bottom border-success text-center mb-5 pb-3 pt-5 text-secondary font-weight-bolder">VUI LÒNG CHỌN THÔNG TIN VÉ</h4>
      <div className="row">
        <div className="col-4">
          <h5 className="text-center border-bottom border-success pb-3 pt-2 text-secondary font-weight-normal ">RẠP</h5>
          <div
            className="nav flex-column nav-pills pt-2 text-center  "
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {renderTabs()}
          </div>
        </div>
        <div className="col-8">
        <h5 className="text-center border-bottom border-success pb-3 pt-2 text-secondary font-weight-normal ">THÔNG TIN CHI TIẾT</h5>
          <div className="tab-content pt-2 pl-5" id="v-pills-tabContent">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

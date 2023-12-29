import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetailApi } from "../../../../services/movie";
import { formatDate } from "../../../../utils";

export default function Detail() {
  const [movieDetail, setMovieDetail] = useState({}); 
  const params = useParams();
  useEffect(() => {
    getMovieDetail();
  }, []);

  const getMovieDetail = async () => {
    const result = await fetchMovieDetailApi(params.id);

    console.log(result);
    setMovieDetail(result.data.content);
  };

  return (
    <div className="col-12 mt-5 mb-3 ">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-6 pb-4  ">
          <img className="w-100 rounded" src={movieDetail.hinhAnh} />
        </div>
        <div className="col-xl-8 col-lg-8 col-md-6 text-justifys">
          <h4 className="text-uppercase pb-2 font-weight-bolder">{movieDetail.tenPhim}</h4>
          <p className="text-justifys">{movieDetail.moTa}</p>
          <p>Phân Loại: Phim chiếu rạp</p>
          <p>Khởi chiếu: {formatDate(movieDetail.ngayKhoiChieu)}</p>
          <p className="">Thời lượng: 95 phút</p>
          <p>Ngôn ngữ: Phụ đề tiếng Việt</p>
          <div className="pt-3">
            <button className="btn btn-success btn-lg mr-2">Xem Trailer</button>
            <button className="btn btn-danger btn-lg mr-2"><a className="text-white text-decoration-none" href="#muave">Mua Vé Ngay</a> </button>
          </div>
        </div>
      </div>
    </div>
  );
}

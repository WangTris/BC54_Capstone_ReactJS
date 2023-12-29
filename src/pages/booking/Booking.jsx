import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { bookTicketApi, fetchTicketDetailApi } from "../../services/ticket";
import Seat from "./components/Seat";
import * as _ from "lodash";

import "./booking.scss";

export default function Booking() {
  const [ticketDetail, setTicketDetail] = useState({});

  const [selectedSeatList, setSelectedSeatList] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTicketDetail();
  }, []);

  const getTicketDetail = async () => {
    const result = await fetchTicketDetailApi(params.id);

    console.log(result);
    setTicketDetail(result.data.content);
  };

  const renderSeats = () => {
    return ticketDetail?.danhSachGhe?.map((ele, idx) => {
      return (
        <React.Fragment key={ele.maGhe}>
          <Seat ele={ele} handleSelect={handleSelect} />
          {(idx + 1) % 16 === 0 && <br />}
        </React.Fragment>
      );
    });
  };

  const handleSelect = (seat) => {
    const data = [...selectedSeatList];
    const idx = data.findIndex((ele) => ele.tenGhe === seat.tenGhe);
    if (idx !== -1) {
      data.splice(idx, 1);
    } else {
      data.push(seat);
    }

    setSelectedSeatList(data);
    // console.log(selectedSeatList);
  };

  useEffect(() => {
    console.log(selectedSeatList);
  }, [selectedSeatList]);

  const bookTicket = async () => {
    // console.log(selectedSeatList);
    const data = {
      maLichChieu: params.id,
      danhSachVe: selectedSeatList.map((ele) => {
        return {
          maGhe: ele.maGhe,
          giaVe: ele.giaVe,
        };
      }),
    };
    // console.log(data);
    await bookTicketApi(data);
    alert("Đặt vé thành công.");
    navigate("/");
  };

  return (
    <div
      className="pt-5"
    >
      <h2 className="col-12 text-center pt-5 pb-2 text-primary border-bottom border-primary font-weight-bold">
        SƠ ĐỒ CHỖ NGỒI - RẠP 1{" "}
      </h2>

      <div className="row mt-5">
        <div className="col-xl-8 col-lg-9 text-center">
          {renderSeats()}
          <div className="w-100 mt-4 mx-auto">
            <div
              style={{
                width: "95%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="mx-auto"
            >
              <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-secondary">
                Đã đặt
              </div>
              <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-dark">
                Đang trống
              </div>
              <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-primary">
                Đang chọn
              </div>
              <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-warning">
                Ghế VIP
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-3 inforTicket">
          <img
            className="poster"
            // style={{ width: 300, height: 400, objectFit: "cover" }}
            src={ticketDetail?.thongTinPhim?.hinhAnh}
            alt="#"
          />
          <div className="infor">
            <h4 className="py-2 mb-0">{ticketDetail?.thongTinPhim?.tenPhim}</h4>
            <h5 className="mb-0">
              Ghế đã chọn:
              <div className="d-flex flex-wrap">
                {selectedSeatList?.map((ele) => {
                  return (
                    <p
                      key={ele.maGhe}
                      className="badge badge-success mr-2 mb-0"
                    >
                      {ele.tenGhe}
                    </p>
                  );
                })}
              </div>
            </h5>
            <h5 className="py-2 mb-0">
              Total: {_.sumBy(selectedSeatList, "giaVe").toLocaleString()} VND
            </h5>

            <button onClick={bookTicket} className="btn btn-warning">
              ĐẶT VÉ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

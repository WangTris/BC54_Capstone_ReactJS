import React, { useState } from "react";
import "./seat.scss"

export default function Seat(props) {
  const [isSelected, setIsSelected] = useState(false);

  const populateClassName = () => {
    if (props.ele.daDat === true) {
      return "btn-secondary";
    }
    if (isSelected === true){
      return "btn-success";
    }
    if (props.ele.loaiGhe === "Vip") {
      return "btn-warning";
    }
    // Ghế mặc định
    return "btn-dark";
  };

  const handleSelectSeat = () => {
    setIsSelected(!isSelected);
    props.handleSelect(props.ele);
  };

  return (
    <button
      onClick={handleSelectSeat}
      disabled={props.ele.daDat === true}
      // style={{ width: 40, height: 40, padding: 0 }}
      className={`mr-1 mb-1 btn ${populateClassName()} seat`}
    >
      {props.ele.tenGhe}
    </button>
  );
}

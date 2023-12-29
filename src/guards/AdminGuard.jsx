import { notification } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { MaLoaiNguoiDung } from "../enums";

export default function AdminGuard() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  useEffect(() => {
    // Người dùng chưa Đăng nhập
    if (!userState.userInfo) {
      notification.warning({
        message: "Chưa đăng nhập không thể truy cập.",
      });
      navigate("/login");
    } else {
      // Người dùng đã Đăng nhập nhưng maLoaiNguoiDung = KhachHang
      if (userState.userInfo.maLoaiNguoiDung === MaLoaiNguoiDung.KhachHang) {
        notification.warning({
          message: "Khách hàng không có quyền truy cập.",
        });
        navigate("/");
      }
    }
  }, []);

  return <Outlet />;
}

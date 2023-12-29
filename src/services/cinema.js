import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants";
import {axiosRequest} from "../../src/configs/axios.config";

export const fetchMovieShowtimesApi = (id) => {
  return axiosRequest({
    url: `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
    method: "GET",
  });
};

export const fetchCinemaListApi = () => {
  return axiosRequest({
    url: `/QuanLyRap/LayThongTinHeThongRap`,
    method: "GET",
  })
}

export const fetchCinemaGroupApi = (maHeThongRap) => {
  return axiosRequest({
    url: `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
    method: "GET",
  })
}
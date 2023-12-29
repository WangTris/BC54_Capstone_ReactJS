import React from "react";
import Slider from "react-slick";
import "./news.scss";

export default function News() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  };
  return (
    <div  className="container-fluid justify-content-center">
      <h3 className="col-11 mx-auto pb-4" id="tintuc">BLOG PHIM</h3>
      <div class="row ">
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pb-4 mx-auto">
          <div className="border">
            <div className="card-header p-0 position-relative">
              <img src="https://cdn.galaxycine.vn/media/2023/2/18/ant-man-and-the-wasp-quantumania-cu-lua-xuat-sac-cua-marvel-3_1676654214338.jpg" />
            </div>
            <div className="card-body card-shadow ">
              <a href="#" className="blog-post">
                [Review] Ant-Man And The Wasp Quantumania: Cú Lừa Của Marvel!
              </a>
              <p>
                Ant-Man And The Wasp: Quantumania đã tóm tắt bộ phim thì lầm to
                rồi. Marvel tặng tất cả chúng ta cú lừa...
              </p>
              <div className="author align-items-center mt-3 mb-1"></div>
              <ul className="blog-meta">
                <li className="meta-item blog-students">
                  <span className="meta-value">
                    {" "}
                    <span className="meta-value">May 27-2023</span>
                  </span>
                </li>
                <li className="meta-item blog-students">
                  <span className="meta-value">
                    {" "}
                    <span className="fa fa-comment" />
                    220 comments
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pb-4 mx-auto">
          <div className="border">
            <div className="card-header p-0 position-relative">
              <img src="https://cdn.galaxycine.vn/media/2023/1/30/450_1675096902304.jpg" />
            </div>
            <div className="card-body card-shadow ">
              <a href="#" className="blog-post">
                [Review] Model 3 Generative: Khi "Cúp Bế" Trỗi Dậy Làm Chủ Con
                Người
              </a>
              <p>
                Vừa hấp dẫn, vừa giải trí, hoàn toàn xứng đáng với những lời
                khen từ đại chúng và các nhà phê bình.
              </p>
              <div className="author align-items-center mt-3 mb-1"></div>
              <ul className="blog-meta">
                <li className="meta-item blog-students">
                  <span className="meta-value">
                    {" "}
                    <span className="meta-value">May 23-2023</span>
                  </span>
                </li>
                <li className="meta-item blog-students">
                  <span className="meta-value">
                    {" "}
                    <span className="fa fa-comment" />
                    350 comments
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pb-4 mx-auto">
          <div className="border">
            <div className="card-header p-0 position-relative">
              <img src="https://cdn.galaxycine.vn/media/2023/1/21/chi-chi-em-em-2-ngoc-trinh-hoan-hao--minh-hang-xuat-sac-6_1674277365986.jpg" />
            </div>
            <div className="card-body card-shadow ">
              <a href="#" className="blog-post">
                [Review] Chị Chị Em Em 2: Ngọc Trinh Hoàn Hảo, Minh Hằng Xuất
                Sắc!
              </a>
              <p>
                Đạo diễn Vũ Ngọc Đãng thành công vừa làm nổi bật Ngọc Trinh bốc
                lửa vừa tôn được nét đẹp đằm thắm...
              </p>
              <div className="author align-items-center mt-3 mb-1"></div>
              <ul className="blog-meta">
                <li className="meta-item blog-students">
                  <span className="meta-value">
                    {" "}
                    <span className="meta-value">May 26-2023</span>
                  </span>
                </li>
                <li className="meta-item blog-students">
                  <span className="meta-value">
                    {" "}
                    <span className="fa fa-comment" />
                    721 comments
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pb-4 mx-auto">
          <div className="border">
            <div className="card-header p-0 position-relative">
              <img src="https://cdn.galaxycine.vn/media/2023/1/21/nha-ba-nu-chien-thang-phong-ve-lan-nua-cua-tran-thanh-1_1674276111272.jpeg" />
            </div>
            <div className="card-body card-shadow ">
              <a href="#" className="blog-post">
                [Review] Nhà Bà Nữ: Chiến Thắng Phòng Vé Lần Nữa Của Trấn Thành?
              </a>
              <p>
                Nhà Bà Nữ không phải phim chiếu rạp xuất sắc nhưng chắc chắn là
                tác phẩm cực kì thích hợp để rủ gia đình...
              </p>
              <div className="author align-items-center mt-3 mb-1"></div>
              <ul className="blog-meta">
                <li className="meta-item blog-students">
                  <span className="meta-value">
                    {" "}
                    <span className="meta-value">May 23-2023</span>
                  </span>
                </li>
                <li className="meta-item blog-students">
                  <span className="meta-value">
                    {" "}
                    <span className="fa fa-comment" />
                    643 comments
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="col-11 mx-auto pb-4" id="sukien">TIN KHUYẾN MÃI</h3>
      <Slider  className="mx-auto" {...settings} >
        <div>
          <img className="img"
            src="https://cdn.galaxycine.vn/media/2023/2/6/500_1675669941430.jpg"
            alt=""
          />
        </div>
        <div >
          <img className="img"
            src="https://cdn.galaxycine.vn/media/2023/1/17/bangqltv-2023-digital-1200x1800_1673940943642.jpg"
            alt="hinh anh"
          />
        </div>
        <div >
          <img className="img"
            src="	https://cdn.galaxycine.vn/media/2022/12/10/combo-u22-digital-300x450-1667285239633_1670637604853.jpg"
            alt="hinh anh"
          />
        </div>
        <div >
          <img className="img"
            src="	https://cdn.galaxycine.vn/media/2023/1/31/1200x1800-100_1675149392898.jpg"
            alt="hinh anh"
          />
        </div>
        <div >
          <img className="img"
            src="https://cdn.galaxycine.vn/media/2023/2/16/glx-q1-1200x1800_1676516168305.jpg"
            alt="hinh anh"
          />
        </div>
      </Slider>

      <h3 className="col-11 mx-auto pb-4">GANAXI CINEMA</h3>
      <div className="row content-seo ">
        <div className="col-xl-12 col-md-12 mx-auto pb-item">
          <div className="content-text ">
            <p>
              {" "}
              <b>Ganaxi Cinema</b> là một trong những công ty tư nhân đầu tiên
              về điện ảnh được thành lập từ năm 2003, đã khẳng định thương hiệu
              là 1 trong 10 địa điểm vui chơi giải trí được yêu thích nhất.
              Ngoài hệ thống rạp chiếu phim hiện đại, thu hút hàng triệu lượt
              người đến xem, <b>Ganaxi Cinema</b> còn hấp dẫn khán giả bởi không
              khí thân thiện cũng như chất lượng dịch vụ hàng đầu.
            </p>
            <p>
              Giờ đây đặt vé tại <b>Ganaxi Cinema</b> càng thêm dễ dàng chỉ với
              vài thao tác vô cùng đơn giản. Để mua vé, hãy vào tab Mua vé. Quý
              khách có thể chọn Mua vé theo phim, theo rạp, hoặc theo ngày. Sau
              đó, tiến hành mua vé theo các bước hướng dẫn. Chỉ trong vài phút,
              quý khách sẽ nhận được tin nhắn và email phản hồi Đặt vé thành
              công của <b>Ganaxi Cinema</b>. Quý khách có thể dùng tin nhắn lấy
              vé tại quầy vé của <b>Ganaxi Cinema</b> hoặc quét mã QR để một
              bước vào rạp mà không cần tốn thêm bất kỳ công đoạn nào nữa.
            </p>
            <p>
              Nếu bạn đã chọn được phim hay để xem, hãy đặt vé cực nhanh bằng
              box Mua Vé Nhanh ngay từ Trang Chủ. Chỉ cần một phút, tin nhắn và
              email phản hồi của <b>Ganaxi Cinema</b> sẽ gửi ngay vào điện thoại
              và hộp mail của bạn.
            </p>
            <p>
              Hiện nay, <b>Ganaxi Cinema</b> đang ngày càng phát triển hơn nữa
              với các chương trình đặc sắc, các khuyến mãi hấp dẫn, đem đến cho
              khán giả những bộ phim bom tấn của thế giới và Việt Nam nhanh
              chóng và sớm nhất.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

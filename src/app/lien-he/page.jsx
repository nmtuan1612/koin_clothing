import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col items-center bg-[#F9F9F9]">
      <div className="w-full max-w-[1480px]">
        <div className="pt-5">
          <div className="p-5 w-full">
            <div className="mb-5">
              <div className="pb-4">
                <h2 className="text-3xl uppercase text-center">
                  CÁCH THỨC LIÊN HỆ VỚI CHÚNG TÔI
                </h2>
              </div>
            </div>

            <div className="text-[#7a7a7a] text-[15px]">
              <p className="mb-5">
                Bất kỳ thắc mắc hay cần sự hỗ trợ, hãy liên hệ với KOIN bằng
                cách tiện nhất cho bạn dưới đây:
              </p>
              <p className="mb-5">
                <strong>GỌI TRỰC TIẾP</strong>
              </p>
              <p className="mb-5">
                Gọi trực tiếp cho đội ngũ CSKH, hotline: 0368 420 840
                <br />
                Đội ngũ CSKH của KOIN luôn sẵn sàng hỗ trợ từ 8h00 cho tới 22h00
                tất cả các ngày trong tuần bao gồm cả thứ 7 và Chủ Nhật.
              </p>

              <p className="mb-5">
                <strong>CHAT TRỰC TIẾP</strong>
              </p>
              <p className="mb-5">
                Chat trực tiếp qua Fanpage của chúng tôi:{" "}
                <Link
                  className="text-[#334862]"
                  href={"https://www.facebook.com/koinclothing"}
                >
                  https://www.facebook.com/koinclothing
                </Link>
                <br />
                Tương tự như tổng đài, đội ngũ CSKH của KOIN luôn sẵn sàng hỗ
                trợ từ 8h00 cho tới 22h00 tất cả các ngày trong tuần bao gồm cả
                thứ 7 và Chủ Nhật.
              </p>

              <p className="mb-5">
                Nếu như ngoài khung giờ, thì quý khách có thể để lại tin nhắn,
                chúng tôi sẽ phản hồi ngay vào đầu giờ làm buổi sáng ngày tiếp
                theo.
              </p>

              <p className="mb-5">
                <strong>EMAIL ĐẾN KOIN</strong>
              </p>
              <p className="mb-5">
                Email CSKH:{" "}
                <Link
                  className="text-[#334862]"
                  href="mailto:cskh.koin@gmail.com"
                >
                  cskh.koin@gmail.com
                </Link>
                <br />
                Hãy gửi cho chúng tôi tất cả những thắc mắc của quý khách. Không
                được như gọi điện hay chat trực tiếp, Email sẽ được trả lời lần
                lượt, chúng tôi cam kết sẽ phản hồi nhanh nhất.
              </p>

              <p className="mb-5">
                Các thắc mắc về{" "}
                <Link className="text-[#334862]" href="/chon-size">
                  chọn Size
                </Link>
                /{" "}
                <Link className="text-[#334862]" href="/">
                  Chính sách đổi trả
                </Link>
                / hay các thông tin thường gặp bạn có thể tham khảo ở{" "}
                <Link
                  className="text-[#334862]"
                  href={"https://koinclothing.vn/"}
                >
                  https://koinclothing.vn/
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

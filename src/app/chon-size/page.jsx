import Image from "next/image";
import React from "react";

const SizeGuidePage = () => {
  return (
    <div className="w-full flex flex-col items-center bg-[#F9F9F9]">
      <div className="w-full max-w-[1480px]">
        <div className="pt-5">
          <div className="p-5 w-full">
            <div className="mb-5">
              <div className="pb-4">
                <h2 className="text-3xl uppercase text-center">
                  CÁCH CHỌN SIZE ÁO CHUẨN
                </h2>
              </div>
            </div>

            <p className="mb-5 text-[15px] text-[#7a7a7a]">
              * Thông số cơ bản của các sản phẩm áo thun Thương hiệu KOIN: Bạn
              lấy chiếc áo mà các bạn đang mặc và cảm thấy vừa nhất sau đó đo
              các kích thước của áo,và đối chiếu với bảng thông số của chúng tôi
              theo các kích thước sau:
            </p>
            <div className="mb-5">
              <Image
                src={
                  "https://koinclothing.vn/wp-content/uploads/2023/11/chon-size-koin.webp"
                }
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>

            <div className="text-[#7a7a7a] text-[15px]">
              <p className="mb-5">
                <strong>
                  Nếu như số đo của bạn nằm trong khoảng giữa các Size với nhau:
                </strong>
              </p>
              <p className="mb-5">
                Với người gầy, hãy lựa chọn{" "}
                <strong>ưu tiên theo chiều cao</strong>
                <br />
                Ví dụ cân nặng của bạn theo size M nhưng chiều cao theo size L,
                hãy chọn L. <br />
                97% khách hàng của chúng tôi đã <strong>
                  {" "}
                  chọn đúng size
                </strong>{" "}
                theo cách này.
              </p>
              <p className="mb-5">
                * Lưu ý: Các hướng dẫn về chọn Size chỉ mang tính tương đối
                chính xác, nếu bạn chưa chắc chắn xin vui lòng liên hệ trực tiếp
                với chúng tôi để được tư vấn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuidePage;

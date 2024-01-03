import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full">
      <div className="pt-5 pb-4 w-full bg-[#E8E8E8] flex justify-center">
        <div className="max-w-[1480px] grid grid-cols-12">
          <div className="col-span-2 pl-1.5 pr-7 pt-[22px]">
            <Image
              src={
                "https://koinclothing.vn/wp-content/uploads/2023/10/logo-c.png"
              }
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="col-span-5 pr-[50px] pt-[22px]">
            <h3 className="font-bold text-xl leading-6 mb-2">
              THỜI TRANG UNISEX <br />
              ÁO THUN NAM NỮ FORM OVERSIZE
            </h3>
            <p className="text-sm mb-5">
              Chào mừng bạn đến với Thương hiệu Koin Clothing! <br />
              Chuyên Áo thun nam nữ Form Oversize trẻ trung và năng động.
            </p>
          </div>
          <div className="col-span-5">
            <div className="flex items-center mb-[14px] gap-2">
              <div className="py-1.5 px-4 border min-h-[47px] border-black flex-1 flex items-center">
                <input
                  type="text"
                  placeholder="Nhập địa chỉ Email để nhận khuyến mãi"
                  className="bg-transparent w-full"
                />
              </div>
              <button className="bg-black text-white min-h-[47px] px-[30px] mr-4 hover:text-black">
                SEND
              </button>
            </div>
            <div className="flex items-center border border-gray-400 text-xs min-w-fit w-1/4 px-1.5 py-1">
              <div className="flex-1 flex items-center gap-1">
                <div className="w-4">
                  <Image
                    src={
                      "https://koinclothing.vn/wp-content/plugins/gtranslate/flags/svg/vi.svg"
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-cover"
                  />
                </div>
                Vietnamese
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2.5 w-full bg-[#2323232B] flex justify-center">
        <div className="p-2.5 w-full max-w-[1480px] flex flex-wrap gap-3">
          <div className="px-6 py-1.5 font-light text-white text-sm leading-[14px] bg-[#0000002B] rounded-[99px]">
            áo thun
          </div>
          <div className="px-6 py-1.5 font-light text-white text-sm leading-[14px] bg-[#0000002B] rounded-[99px]">
            áo thun form rộng
          </div>
          <div className="px-6 py-1.5 font-light text-white text-sm leading-[14px] bg-[#0000002B] rounded-[99px]">
            áo thun unisex
          </div>
          <div className="px-6 py-1.5 font-light text-white text-sm leading-[14px] bg-[#0000002B] rounded-[99px]">
            áo thun nam nữ
          </div>
          <div className="px-6 py-1.5 font-light text-white text-sm leading-[14px] bg-[#0000002B] rounded-[99px]">
            áo thun oversize
          </div>
          <div className="px-6 py-1.5 font-light text-white text-sm leading-[14px] bg-[#0000002B] rounded-[99px]">
            koin
          </div>
          <div className="px-6 py-1.5 font-light text-white text-sm leading-[14px] bg-[#0000002B] rounded-[99px]">
            áo thun đường phố
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="py-2.5 w-full flex justify-center">
        <div className="pt-[30px] pb-5 w-full max-w-[1480px]">
          <div className="grid grid-cols-7">
            {/*  */}
            <div className="mr-5 md:col-span-2 col-span-7">
              <div className="p-2.5">
                <h5 className="uppercase font-bold">KOIN CLOTHING</h5>
                <div className="mt-4 border">
                  <div className="pl-3 py-2.5 border-b flex gap-2 items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                    <b>Opentime:</b> 08h00 - 22h00
                  </div>
                  <div className="pl-3 py-2.5 border-b flex gap-2 items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512"
                    >
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                    <b>Hotline, Zalo CSKH 1:</b> (+84) 0368 420 840
                  </div>
                  <div className="pl-3 py-2.5 flex gap-2 items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512"
                    >
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                    <b>Email:</b> cskh.koin@gmail.com
                  </div>
                </div>
                <div className="pt-2.5">
                  <p className="mb-5">
                    Copyright 2023 © Koin Clothing. <br />
                    All rights reserved.
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-span-7 md:col-span-1">
              <div className="p-2.5">
                <h5 className="uppercase font-bold mb-5">THÔNG TIN</h5>
                <Link
                  href={"/"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  Trang chủ
                </Link>
                <Link
                  href={"/"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  Về chúng tôi
                </Link>
                <Link
                  href={"/san-pham"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  Tất cả sản phẩm
                </Link>
                <Link
                  href={"/khuyen-mai"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  Khuyến mãi
                </Link>
                <Link
                  href={"/chon-size"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  Cách chọn size chuẩn
                </Link>
                <Link
                  href={"/blog"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  Góc kiến thức
                </Link>
                <Link
                  href={"/lien-he"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  Liên hệ
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="col-span-7 md:col-span-1">
              <div className="p-2.5">
                <h5 className="uppercase font-bold mb-5">CÁC CHÍNH SÁCH</h5>
                <Link
                  href={"/"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  Hướng dẫn mua hàng
                </Link>
                <Link
                  href={"/"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  Chính sách đổi trả
                </Link>
                <Link
                  href={"/san-pham"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  Chính sách thanh toán
                </Link>
                <Link
                  href={"/khuyen-mai"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  Chính sách kiểm hàng
                </Link>
                <Link
                  href={"/chon-size"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  Chính sách bảo mật
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="col-span-7 md:col-span-1">
              <div className="p-2.5">
                <h5 className="uppercase font-bold mb-5">SẢN PHẨM NỔI BẬT</h5>
                <Link
                  href={"/"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  1. Áo Thun Flexing Money
                </Link>
                <Link
                  href={"/"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  1. Áo Thun Flexing Money
                </Link>
                <Link
                  href={"/"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  1. Áo Thun Flexing Money
                </Link>
                <Link
                  href={"/"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  1. Áo Thun Flexing Money
                </Link>
                <Link
                  href={"/"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  1. Áo Thun Flexing Money
                </Link>
                <Link
                  href={"/"}
                  className="block py-1 leading-4 text-sm font-light"
                >
                  1. Áo Thun Flexing Money
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="col-span-7 md:col-span-2">
              <div className="p-2.5">
                <h5 className="uppercase font-semibold mb-5">
                  THEO DÕI FANPAGE
                </h5>

                <div className="flex items-center gap-1.5">
                  <Link
                    href={""}
                    className="inline-block rounded-full overflow-hidden h-10 w-10"
                  >
                    <Image
                      src={
                        "https://koinclothing.vn/wp-content/uploads/2023/10/34d7f8da0414d2c6c7c0c2ed1c26a12d.png"
                      }
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                  <Link
                    href={""}
                    className="inline-block rounded-full overflow-hidden h-10 w-10"
                  >
                    <Image
                      src={
                        "https://koinclothing.vn/wp-content/uploads/2023/10/44940989_10156852213527769_8794755487787646976_n.png"
                      }
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                  <Link
                    href={""}
                    className="rounded-full overflow-hidden h-10 w-10 inline-flex items-center justify-center bg-[#3b5998] text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                    >
                      <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                    </svg>
                  </Link>
                  <Link
                    href={""}
                    className="rounded-full overflow-hidden h-10 w-10 inline-flex items-center justify-center bg-black text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      height="20"
                      width="16"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </Link>
                  <Link
                    href={""}
                    className="rounded-full overflow-hidden h-10 w-10 inline-flex items-center justify-center bg-[#35465c] text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      height="20"
                      width="12"
                      viewBox="0 0 320 512"
                    >
                      <path d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1 .8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5 .9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z" />
                    </svg>
                  </Link>
                </div>

                <div className="pt-2.5">
                  <Image
                    src={
                      "https://koinclothing.vn/wp-content/uploads/2023/12/logoSaleNoti.png"
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "50%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

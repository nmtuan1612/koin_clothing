import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-2.5">
      {/* logo */}
      <div className="grid grid-cols-12 mt-1.5">
        <div className="col-span-5"></div>
        <Link href={"/"} className="col-span-2 flex justify-center">
          <Image
            src={
              "https://koinclothing.vn/wp-content/uploads/2023/03/logokoin-thumbnail.png"
            }
            width={71}
            height={71}
          />
        </Link>
        <div className="col-span-5 flex flex-wrap items-center justify-end">
          <div className="px-3 py-2 border border-[#69727d] text-[#69727d] flex items-center justify-center">
            <div className="relative inline-flex items-center text-sm font-medium text-center rounded-lg hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-1.5">
                0
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center text-gray-900 py-2.5">
        <div className="flex items-center flex-1">
          <Link href={"/"} className="px-3 uppercase">
            Trang chủ
          </Link>
          <Link href={"/"} className="px-3 uppercase">
            Về chúng tôi
          </Link>
          <Link href={"/san-pham"} className="px-3 uppercase">
            Tất cả sản phẩm
          </Link>
          <Link href={"/khuyen-mai"} className="px-3 uppercase">
            Khuyến mãi
          </Link>
          <Link href={"/chon-size"} className="px-3 uppercase">
            Cách chọn size chuẩn
          </Link>
          <Link href={"/blog"} className="px-3 uppercase">
            Kiến thức
          </Link>
          <Link href={"/lien-he"} className="px-3 uppercase">
            Liên hệ
          </Link>
        </div>
        <div className="px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <div className="border border-[#343434] h-10 flex items-center">
          <input
            type="text"
            className="text-[#343434] px-2"
            placeholder="Nhập từ khoá tìm kiếm"
          />
          <div className="border-l border-gray-300 w-10 h-[38px] items-center flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

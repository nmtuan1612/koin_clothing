"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppContext } from "@/context/Store";

const FavoriteListPage = () => {
  const { favorite, deleteFromFavorite } = useContext(AppContext);

  return (
    <div className="w-full flex flex-col items-center py-[30px]">
      <div className="max-w-[1480px] w-full pb-[30px] px-4">
        <h2 className="text-2xl mb-3 font-bold">Danh sách yêu thích</h2>
        {!favorite?.length ? (
          <div className="py-12 text-3xl text-[#666666] text-center">
            No products added to wishlist
          </div>
        ) : (
          <table className="mb-4 w-full">
            <thead className="hidden md:table-header-group border-b-[3px] text-sm">
              <tr>
                <th className="p-1.5"></th>
                <th className="p-1.5"></th>
                <th className="p-1.5 uppercase">
                  <span className="text-left w-full block">Product name</span>
                </th>
                <th className="p-1.5 uppercase">
                  <span className="text-left w-full block">Unit price</span>
                </th>
                <th className="p-1.5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {favorite?.map((product, idx) => (
                <tr key={idx}>
                  <td className="p-1.5 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={() => deleteFromFavorite(product?.name)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </td>
                  <td className="p-1.5 w-[72px] md:w-[92px] align-top md:align-super">
                    <Image
                      src={
                        product?.imgUrl ||
                        "https://koinclothing.vn/wp-content/uploads/2023/11/ao-thun-koin-oversize-nam-nu-5-800x1067.webp"
                      }
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[80px] h-auto object-cover"
                    />
                  </td>
                  <td className="p-1.5">
                    <Link
                      href={"/1"}
                      className="text-gray-500 text-ellipsis text-xl md:text-base"
                    >
                      {product?.name ||
                        "Áo Thun Trơn, Áo Phông Trơn, Áo Thun Đơn Giản Nhiều Màu Oversize 250Gsm"}
                    </Link>
                    <table className="w-full mt-4 text-xs md:hidden">
                      <tbody>
                        <tr>
                          <td className="py-1">Added on:</td>
                          <td className="py-1">6 Tháng Một, 2024</td>
                        </tr>
                        <tr>
                          <td className="py-1">Price:</td>
                          <td className="py-1 font-bold">
                            {product?.price}
                            <u>đ</u>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="p-1.5 font-bold hidden md:table-cell">
                    {product?.price}
                    <u>đ</u>
                  </td>
                  <td className="p-1.5 hidden md:table-cell">
                    Added on: Tháng Một, 2024
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default FavoriteListPage;

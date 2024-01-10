"use client";
import { AppContext } from "@/context/Store";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const ProductCard = () => {
  const { addToFavorite } = useContext(AppContext);
  return (
    <div className="px-2.5 pb-5 relative group">
      <div className="w-10 h-10 bg-black z-20 text-sm absolute left-2.5 flex justify-center items-center top-[30px] text-white pointer-events-none">
        -11%
      </div>
      <div
        onClick={() =>
          addToFavorite({
            price: 159000,
            name: "Áo Thun KOIN Dollarium Nam Nữ Form Rộng",
            imgUrl:
              "https://koinclothing.vn/wp-content/uploads/2023/11/ao-thun-unisex-form-rong-4-600x600.webp",
          })
        }
        className={`absolute hidden group-hover:block top-2.5 right-5 border-2 rounded-full p-1 text-gray-300 hover:bg-red-500 hover:text-white cursor-pointer`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
      </div>
      <Link
        href="/1"
        className="block rounded-lg border border-gray-200 overflow-hidden"
      >
        <Image
          src={
            "https://koinclothing.vn/wp-content/uploads/2023/11/ao-thun-koin-oversize-nam-nu-5-800x1067.webp"
          }
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover"
        />
      </Link>
      <div className="pt-2.5 pb-5">
        <p className="my-0.5">
          <Link
            href="/1"
            className="font-bold uppercase text-[15px] md:text-base"
          >
            Áo Thun KOIN Hình Chó Doberman Form Oversize
          </Link>
        </p>
        <div className="flex gap-1.5">
          <del>
            <span className="text-sm text-gray-400">
              179.000
              <span className="underline">đ</span>
            </span>
          </del>
          <span>
            <span className="text-sm text-black font-bold">
              159.000
              <span className="underline">đ</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

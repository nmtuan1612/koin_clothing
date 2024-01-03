import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <div className="px-2.5 pb-5 relative">
      <div className="w-10 h-10 bg-black z-20 text-sm absolute left-2.5 flex justify-center items-center top-[30px] text-white pointer-events-none">
        -11%
      </div>
      <Link href="/1" className="block">
        <Image
          src={
            "https://koinclothing.vn/wp-content/uploads/2023/11/ao-thun-koin-oversize-nam-nu-5-800x1067.webp"
          }
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover"
        />
      </Link>
      <div className="pt-2.5 pb-5">
        <p className="my-0.5">
          <Link href="/" className="font-bold uppercase">
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

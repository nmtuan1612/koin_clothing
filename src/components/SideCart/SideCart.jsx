import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const SideCart = ({ setOpenSideCart, cart, deleteFromCart }) => {
  const total = useMemo(() => {
    const totalBill = cart.reduce((total, prod) => {
      return total + Number(prod.quantity) * Number(prod.price);
    }, 0);
    return totalBill;
  }, [cart]);

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-[99999]"
      style={{ background: "rgba(0, 0, 0, 0.2)" }}
    >
      <div className="side__cart absolute right-0 top-0 bottom-0 bg-white w-[350px] py-5 px-[30px] flex flex-col items-stretch">
        <div
          onClick={() => setOpenSideCart(false)}
          className="mb-5 relative self-end cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        {/* products */}
        {!cart?.length ? (
          <span className="text-sm font-bold">No products in the cart.</span>
        ) : (
          <>
            {cart.map((product, idx) => (
              <div
                key={idx}
                className="pb-5 pr-7 relative grid grid-cols-7 text-sm border-b border-b-gray-300"
              >
                <div className="col-span-2">
                  <Image
                    src={
                      product?.imgUrl ||
                      "https://koinclothing.vn/wp-content/uploads/2023/11/ao-thun-koin-oversize-nam-nu-5-800x1067.webp"
                    }
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="col-span-5 pl-5 font-bold">
                  <Link href="/1">
                    {product?.name ||
                      "Áo Thun KOIN Hình Chó Doberman Form Oversize"}
                  </Link>
                  <div className="uppercase text-xs font-light my-2.5 grid grid-cols-5">
                    <div className="col-span-2 mr-1.5">Màu sắc:</div>
                    <div className="col-span-3 mx-1.5">white</div>
                    <div className="col-span-2 mr-1.5">Size:</div>
                    <div className="col-span-3 mx-1.5">{product?.size}</div>
                  </div>
                  <div className="text-gray-200">
                    {product?.quantity} x{" "}
                    <span className="text-black font-bold">
                      {product?.price || "85.000"}
                      <span className="underline">đ</span>
                    </span>
                  </div>
                </div>
                <div
                  className="absolute right-0 bottom-5 text-gray-500 cursor-pointer"
                  onClick={() => deleteFromCart(product?.name)}
                >
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
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </div>
            ))}
            {/* Total */}
            <div className="py-5 text-right font-bold text-xl border-b border-b-gray-300">
              Tạm tính: {total}
              <span className="underline">đ</span>
            </div>
            <div className="flex justify-right gap-3 pt-5">
              {/* <Link
                href="/"
                className="flex-1 bg-[#69727d] text-white text-center leading-4  p-4 font-bold"
              >
                Xem giỏ hàng
              </Link> */}
              <Link
                href="/thanh-toan"
                onClick={() => setOpenSideCart(false)}
                className="flex-1 bg-[#69727d] text-white text-center leading-4  p-4 font-bold"
              >
                Thanh toán
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SideCart;

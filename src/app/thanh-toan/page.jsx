"use client";
import { AppContext } from "@/context/Store";
import Link from "next/link";
import React, { useContext, useMemo } from "react";

const CheckoutPage = () => {
  const { cart } = useContext(AppContext);
  
  const total = useMemo(() => {
    const totalBill = cart.reduce((total, prod) => {
      return total + Number(prod.quantity) * Number(prod.price);
    }, 0);
    return totalBill;
  }, [cart]);
  
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1480px] w-full">
        <form className="w-full grid grid-cols-12">
          {/* info form */}
          <div className="pt-4 px-4 pb-[30px] col-span-12 lg:col-span-7">
            <h3 className="mb-2 pt-2.5 font-bold text-[17px] uppercase">
              Thông tin thanh toán
            </h3>
            <div className="w-full">
              <div className="grid grid-cols-2 gap-[4%]">
                <div className="mb-2">
                  <label
                    htmlFor="firstName"
                    className="mb-2 text-sm font-semibold block"
                  >
                    Tên *
                  </label>
                  <input
                    type="text"
                    required={true}
                    className="w-full mb-3 px-4 border h-9 text-sm shadow-inner"
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="firstName"
                    className="mb-2 text-sm font-semibold block"
                  >
                    Họ *
                  </label>
                  <input
                    type="text"
                    required={true}
                    className="w-full mb-3 px-4 border h-9 text-sm shadow-inner"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="firstName"
                  className="mb-2 text-sm font-semibold block"
                >
                  Địa chỉ *
                </label>
                <input
                  type="text"
                  placeholder="Địa chỉ"
                  required={true}
                  className="w-full mb-3 px-4 border h-9 text-sm shadow-inner"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="firstName"
                  className="mb-2 text-sm font-semibold block"
                >
                  Mã bưu điện (tuỳ chọn)
                </label>
                <input
                  type="text"
                  className="w-full mb-3 px-4 border h-9 text-sm shadow-inner"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="firstName"
                  className="mb-2 text-sm font-semibold block"
                >
                  Tỉnh / Thành phố *
                </label>
                <input
                  type="text"
                  required={true}
                  className="w-full mb-3 px-4 border h-9 text-sm shadow-inner"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="firstName"
                  className="mb-2 text-sm font-semibold block"
                >
                  Số điện thoại *
                </label>
                <input
                  type="text"
                  required={true}
                  className="w-full mb-3 px-4 border h-9 text-sm shadow-inner"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="firstName"
                  className="mb-2 text-sm font-semibold block"
                >
                  Địa chỉ email *
                </label>
                <input
                  type="text"
                  required={true}
                  className="w-full mb-3 px-4 border h-9 text-sm shadow-inner"
                />
              </div>
            </div>

            <h3 className="mb-2 pt-2.5 font-bold text-[17px] uppercase">
              Thông tin bổ sung
            </h3>
            <div className="mb-2">
              <label
                htmlFor="firstName"
                className="mb-2 text-sm font-semibold block"
              >
                Ghi chú đơn hàng (tuỳ chọn)
              </label>
              <textarea
                id=""
                rows={5}
                placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                className="w-full mb-4 px-3 pt-2.5 border text-sm shadow-inner"
              />
            </div>
          </div>
          {/* bill */}
          <div className="px-4 pb-[30px] col-span-12 lg:col-span-5">
            <div className="w-full pt-4 p-8 border-2 border-[#446084]">
              <h3 className="mb-2 pt-2.5 font-bold text-[17px] uppercase">
                Đơn hàng của bạn
              </h3>
              <table className="w-full text-sm mb-4">
                <thead>
                  <tr>
                    <th className="border-b-[3px] uppercase p-2 pl-0 text-left">
                      Sản phẩm
                    </th>
                    <th className="border-b-[3px] uppercase p-2 pr-0 text-right">
                      Tạm tính
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.map((prod, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="py-4 pr-2 text-gray-400 font-light">
                        {prod.name} <strong>x {prod.quantity}</strong>
                        <div className="flex gap-1.5 uppercase text-xs my-2">
                          <span>Màu sắc:</span>
                          <span className="capitalize">{prod.color}</span>
                          <span>Size:</span>
                          <span>{prod.size}</span>
                        </div>
                      </td>
                      <td className="py-4 pl-2 font-bold">
                        {prod.price}
                        <u>đ</u>
                      </td>
                    </tr>
                  ))}
                  <tr className="border-b">
                    <td className="p-1.5 pr-0 text-xs font-bold">Tạm tính</td>
                    <td className="p-1.5 pl-0 text-xs font-bold">
                      {total}
                      <u>đ</u>
                    </td>
                  </tr>
                  <tr className="border-b-[3px]">
                    <td className="p-1.5 pr-0 text-xs font-bold">Tổng</td>
                    <td className="p-1.5 pl-0 text-xs font-bold">
                      {total}
                      <u>đ</u>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-sm border-b mb-5">
                <p className="mb-2 font-bold">Trả tiền mặt khi nhận hàng</p>
              </div>
              <button
                type="submit"
                className="bg-black uppercase text-white h-[38px] mr-4 mb-4 px-[18px] text-[15px]"
              >
                Đặt hàng
              </button>
              <p className="mb-2 font-light text-[13px]">
                Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng,
                tăng trải nghiệm sử dụng website, và cho các mục đích cụ thể
                khác đã được mô tả trong{" "}
                <Link href="https://koinclothing.vn/chinh-sach-bao-mat/">
                  chính sách riêng tư
                </Link>{" "}
                của chúng tôi.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;

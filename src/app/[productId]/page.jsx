"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ProductCard from "@/components/ProductCard/ProductCard";
import { AppContext } from "@/context/Store";

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const ProductDetailPage = () => {
  const { addToCart } = useContext(AppContext);
  const { favorite, addToFavorite, deleteFromFavorite } =
    useContext(AppContext);

  const [expanded, setExpanded] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    color: "",
    size: "",
    quantity: "1",
    price: 159000,
    name: "Áo Thun KOIN Dollarium Nam Nữ Form Rộng",
    imgUrl:
      "https://koinclothing.vn/wp-content/uploads/2023/11/ao-thun-unisex-form-rong-4-600x600.webp",
  });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSelectColor = (color) => {
    setSelectedProduct((prev) => ({ ...prev, color }));
  };

  const handleSelectSize = (size) => {
    setSelectedProduct((prev) => ({ ...prev, size }));
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1480px]">
        {/* product */}
        <div className="grid md:grid-cols-2">
          {/* left */}
          <div className="relative px-4 group">
            <div className="w-10 h-10 bg-black z-20 text-sm absolute left-[15px] flex justify-center items-center top-[30px] text-white pointer-events-none">
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
              className={`absolute hidden group-hover:block top-3 right-7 border-2 rounded-full p-1.5 text-gray-300 hover:bg-red-500 hover:text-white cursor-pointer`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </div>
            <Image
              src={
                "https://koinclothing.vn/wp-content/uploads/2023/11/ao-thun-unisex-form-rong-4-600x600.webp"
              }
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-cover aspect-square"
            />
          </div>

          {/* right */}
          <div className="pt-2.5 px-4 pb-[30px]">
            <div className="mb-1.5 uppercase text-[13px] text-[#666666b3]">
              <Link href={"/"}>Trang chủ</Link>
              <span className="mx-1">/</span>
              <Link href={"/"}>Áo thun</Link>
            </div>

            <h1 className="font-bold text-[26px]">
              Áo Thun KOIN Dollarium Nam Nữ Form Rộng
            </h1>
            {/* price */}
            <div className="flex my-3 gap-3">
              <span className="text-[23px] flex items-start leading-[23px] line-through text-gray-400">
                179.000
                <span className="underline text-sm">đ</span>
              </span>
              <span className="text-[23px] flex items-start leading-[23px] text-black font-semibold">
                159.000
                <span className="underline text-sm">đ</span>
              </span>
            </div>

            {/* des */}
            <p className="mb-3">
              <span className="text-sm text-[#0a0a0a] text-[15px] md:text-base">
                Áo Thun Dollarium Nam Nữ KOIN mang đến nhiều mẫu thiết kế áo
                thun Nam Nữ form Oversize từ cơ bản đến cá tính sở hữu kiểu dáng
                đa dạng, mang đến cho bạn sự thoải mái, mát mẻ vượt trội. Ăn mặc
                đẹp, tự tin sẽ giúp tạo nguồn động lực cho bản thân mạnh dạn
                theo đuổi và dám làm những điều mình thích, mang lại cảm giác
                “được là chính mình”. Mong rằng KOIN sẽ trở thành thương hiệu
                đồng hành cùng với đam mê của các bạn.
              </span>
            </p>

            {/* Options */}
            <div className="mb-4">
              {/* color */}
              <div className="py-1 flex items-center justify-between">
                <span className="text-sm text-[#666666] font-bold">
                  Màu sắc
                </span>
                <span
                  className="uppercase text-[#666666] text-xs font-light cursor-pointer"
                  onClick={() => {
                    setSelectedProduct({
                      color: "",
                      size: "",
                      quantity: "1",
                    });
                  }}
                >
                  clear selection
                </span>
              </div>
              <div className="flex items-center">
                <div className="pr-2 pb-1">
                  <label
                    htmlFor=""
                    onClick={() => handleSelectColor("white")}
                    className={`my-1 w-8 h-8 cursor-pointer bg-white inline-block outline-1 outline-double outline-[#9c9999] border-2 border-white ${
                      selectedProduct.color === "white"
                        ? "outline-[3px] outline-black"
                        : ""
                    }`}
                  ></label>
                </div>
                <div className="pr-2 pb-1">
                  <label
                    htmlFor=""
                    onClick={() => handleSelectColor("black")}
                    className={`my-1 w-8 h-8 cursor-pointer bg-black inline-block outline-double border-2 border-white ${
                      selectedProduct.color === "black"
                        ? "outline-[3px] outline-black"
                        : "outline-1 outline-[#9c9999]"
                    }`}
                  ></label>
                </div>
                <div className="pr-2 pb-1">
                  <label
                    htmlFor=""
                    onClick={() => handleSelectColor("green")}
                    className={`my-1 w-8 h-8 cursor-pointer bg-green-800 inline-block outline-double border-2 border-white ${
                      selectedProduct.color === "green"
                        ? "outline-[3px] outline-black"
                        : "outline-1 outline-[#9c9999]"
                    }`}
                  ></label>
                </div>
                <div className="pr-2 pb-1">
                  <label
                    htmlFor=""
                    onClick={() => handleSelectColor("blue")}
                    className={`my-1 w-8 h-8 cursor-pointer bg-blue-900 inline-block outline-double border-2 border-white ${
                      selectedProduct.color === "blue"
                        ? "outline-[3px] outline-black"
                        : "outline-1 outline-[#9c9999]"
                    }`}
                  ></label>
                </div>
                <div className="pr-2 pb-1">
                  <label
                    htmlFor=""
                    onClick={() => handleSelectColor("brown")}
                    className={`my-1 w-8 h-8 cursor-pointer bg-[#512b00] inline-block outline-double border-2 border-white ${
                      selectedProduct.color === "brown"
                        ? "outline-[3px] outline-black"
                        : "outline-1 outline-[#9c9999]"
                    }`}
                  ></label>
                </div>
              </div>

              {/* size */}
              <div className="py-1">
                <span className="text-sm text-[#666666] font-bold">Size</span>
              </div>
              <div className="flex items-center">
                <div className="pr-2 pb-1">
                  <label
                    onClick={() => handleSelectSize("M")}
                    className={`my-1 leading-10 cursor-pointer min-w-[40px] text-center inline-block border ${
                      selectedProduct.size === "M"
                        ? "border-black border-2"
                        : "border-[#9c9999]"
                    }`}
                  >
                    M
                  </label>
                </div>
                <div className="pr-2 pb-1">
                  <label
                    onClick={() => handleSelectSize("L")}
                    className={`my-1 leading-10 cursor-pointer min-w-[40px] text-center inline-block border ${
                      selectedProduct.size === "L"
                        ? "border-black border-2"
                        : "border-[#9c9999]"
                    }`}
                  >
                    L
                  </label>
                </div>
                <div className="pr-2 pb-1">
                  <label
                    onClick={() => handleSelectSize("XL")}
                    className={`my-1 leading-10 cursor-pointer min-w-[40px] text-center inline-block border ${
                      selectedProduct.size === "XL"
                        ? "border-black border-2"
                        : "border-[#9c9999]"
                    }`}
                  >
                    XL
                  </label>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="py-2">
              {/* Quantity */}
              <div className="">
                <div className="inline-flex items-center mr-4 mb-4 h-10">
                  <button className="px-2 h-full border bg-gray-100 hover:bg-gray-300 cursor-pointer">
                    -
                  </button>
                  {/* <div className="flex items-center h-full w-8 overflow-hidden justify-center"> */}
                  <input
                    type="text"
                    value={selectedProduct.quantity}
                    onChange={(e) =>
                      setSelectedProduct((prev) => ({
                        ...prev,
                        quantity: e.target.value,
                      }))
                    }
                    className="h-full w-8 text-center border outline-none"
                  />
                  {/* </div> */}
                  <button className="px-2 h-full border bg-gray-100 hover:bg-gray-300 cursor-pointer">
                    +
                  </button>
                </div>

                <button
                  disabled={!selectedProduct.color || !selectedProduct.size}
                  onClick={() => addToCart(selectedProduct)}
                  className="mb-4 px-5 bg-black text-white min-h-[40px] uppercase disabled:opacity-50"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
              <Link href={""} className=" block mb-1.5">
                <Image
                  src={
                    "https://koinclothing.vn/wp-content/uploads/2023/12/buttonshopee.jpg"
                  }
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover"
                />
              </Link>
              <Link href={""} className=" block mb-1.5">
                <Image
                  src={
                    "https://koinclothing.vn/wp-content/uploads/2023/12/buttontiktok.jpg"
                  }
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover"
                />
              </Link>
              <Link href={""} className=" block mb-1.5">
                <Image
                  src={
                    "https://koinclothing.vn/wp-content/uploads/2023/12/buttontiki.jpg"
                  }
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover"
                />
              </Link>
            </div>

            {/* Detail */}
            <div className="mb-1 py-2.5">
              <div className="border">
                <Accordion
                  disableGutters
                  square
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded !== "panel1" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="#000"
                          dataslot="icon"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="#000"
                          dataslot="icon"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14"
                          />
                        </svg>
                      )
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="border-b"
                  >
                    <span className="font-bold text-sm">CHI TIẾT SẢN PHẨM</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="list-disc px-4">
                      <li className="text-sm mb-2 text-[#7a7a7a]">
                        Chất liệu: 100% Cotton 2 chiều.
                      </li>
                      <li className="text-sm mb-2 text-[#7a7a7a]">
                        Định lượng: 250Gsm.
                      </li>
                      <li className="text-sm mb-2 text-[#7a7a7a]">
                        Form áo: Oversize.
                      </li>
                      <li className="text-sm mb-2 text-[#7a7a7a]">
                        Cổ áo Bo Rib: Giúp hạn chế bị giãn theo thời gian.
                      </li>
                      <li className="text-sm mb-2 text-[#7a7a7a]">
                        Hình in: Công nghệ in PET chuyển nhiệt.
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  square
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded !== "panel2" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="#000"
                          dataslot="icon"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="#000"
                          dataslot="icon"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14"
                          />
                        </svg>
                      )
                    }
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className="border-b"
                  >
                    <span className="font-bold text-sm">KÍCH THƯỚC ÁO</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="px-4">
                      <p className="text-sm text-[#7a7a7a] mb-4">
                        * Để chọn Size áo chính xác hơn, hãy lấy chiếc áo mà bạn
                        mặc vừa nhất sau đó đo các kích thước và đối chiếu với
                        thông số sau:
                      </p>
                      <ul className="list-disc">
                        <li className="text-sm mb-2 text-[#7a7a7a]">
                          <strong>Size M:</strong> Dài 70cm Rộng 53cm Dài tay áo
                          23cm
                        </li>
                        <li className="text-sm mb-2 text-[#7a7a7a]">
                          <strong>Size L:</strong> Chiều dài 72cm | Rộng 56cm |
                          Dài tay áo 24cm
                        </li>
                        <li className="text-sm mb-2 text-[#7a7a7a]">
                          <strong>Size XL:</strong> Chiều dài 74cm | Rộng 59cm |
                          Dài tay áo 25cm
                        </li>
                      </ul>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  square
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded !== "panel3" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="#000"
                          dataslot="icon"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="#000"
                          dataslot="icon"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14"
                          />
                        </svg>
                      )
                    }
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className="border-b"
                  >
                    <span className="font-bold text-sm">
                      HƯỚNG DẪN BẢO QUẢN
                    </span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="px-4">
                      <p className="text-sm text-[#7a7a7a]">
                        – Không nên giặt sản phẩm trong nước nóng quá 30 độ.
                        <br />– Khi ủi nên lộn trái áo, không ủi trực tiếp lên
                        hình in sẽ khiến hình in bong tróc.
                      </p>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  square
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded !== "panel4" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="#000"
                          dataslot="icon"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="#000"
                          dataslot="icon"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14"
                          />
                        </svg>
                      )
                    }
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className="border-b"
                  >
                    <span className="font-bold text-sm">PHÍ GỬI HÀNG</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="px-4">
                      <p className="text-sm text-[#7a7a7a]">
                        <strong>- TPHCM: </strong> Đồng giá 20.000đ (Giao hàng
                        sau 4h).
                        <br />
                        <strong>- Các tỉnh ngoài TPHCM: </strong>35.000đ
                        <br />
                        <strong>- Miễn phí gửi hàng: </strong>Áp dụng cho đơn
                        hàng từ 500.000đ.
                      </p>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>

            {/* Share socials */}
            <div className="pb-5 flex gap-2.5">
              <div className="mb-2.5 w-11 h-11 flex items-center justify-center bg-[#3b5998] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
              </div>
              <div className="mb-2.5 w-11 h-11 flex items-center justify-center bg-[#1da1f2] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
              </div>
              <div className="mb-2.5 w-11 h-11 flex items-center justify-center bg-[#2ca5e0] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="15.5"
                  fill="currentColor"
                  viewBox="0 0 496 512"
                >
                  <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                </svg>
              </div>
            </div>

            {/* Keywords */}
            <div className="mb-4">
              <div className="py-1 border-t border-dotted">
                <span className="text-sm">Mã: N/A</span>
              </div>
              <div className="py-1 border-t border-dotted">
                <span className="text-sm">
                  Danh mục: <Link href={""}>Áo thun</Link>
                </span>
              </div>
              <div className="py-1 border-t border-dotted">
                <span className="text-sm">
                  Từ khoá: <Link href={""}>áo oversize</Link>,{" "}
                  <Link href={""}>áo oversize nam nữ</Link>,{" "}
                  <Link href={""}>áo thun</Link>, <Link href={""}>koin</Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4">
          {/* Description */}
          <div className="-mx-4">
            <div className="grid grid-cols-12 border-t">
              <div className="col-span-12 md:col-span-2 px-4">
                <h5 className="uppercase font-bold mb-1 mt-[30px]">Mô tả</h5>
              </div>
              <div className="col-span-12 border-t-0 md:col-span-10 px-4 py-6">
                <p className="mb-5 text-[15px] md:text-base">
                  Phong cách năng động và trẻ trung với Áo Thun KOIN Hình Chó
                  Doberman Form Oversize được in họa tiết các chú chó Doberman
                  độc đáo trước ngực giúp thiết kế không hề đơn điệu mà tạo điểm
                  nhấn năng động và trẻ trung. Form áo tiêu chuẩn vừa người, cổ
                  áo bo thun kết hợp cùng hình ảnh được in cao cấp nổi bật trước
                  tạo điểm nhấn độc đáo cho chiếc áo đen basic.
                </p>
                <p className="mb-5 text-[15px] md:text-base">
                  <Link href={""}>Áo thun in hình</Link> là một trong những kiểu
                  áo cơ bản và dễ sử dụng như đi hẹn hò, gặp gỡ bạn bè nhưng vẫn
                  rất năng động và nổi bật. Chất liệu cotton là một trong những
                  chất liệu thấm hút mồ hôi tốt, tạo sự thoáng mát và thoải mái
                  cho người mặc. Đây là một trong những kiểu áo cơ bản mà ai
                  cũng cần phải có trong tủ đồ, nhờ sự tiện lợi và phù hợp trong
                  nhiều hoàn cảnh khác nhau như đi hẹn hò, gặp gỡ bạn bè,…
                </p>
                <p className="mb-5 text-[15px] md:text-base">
                  <strong>CHI TIẾT SẢN PHẨM:</strong>
                </p>
                <p className="mb-5 text-[15px] md:text-base">
                  – Chất liệu: 100% Cotton 2 chiều. <br />
                  – Định lượng: 250Gsm. <br />– Hình in trên áo áp dụng công
                  nghệ in PET chuyển nhiệt. <br />– Form áo Oversize phù hợp với
                  nhiều kiểu hình thể.
                </p>
                <p className="mb-5 text-[15px] md:text-base">
                  ✔ Cam kết sản phẩm chất lượng y hình 100%. <br />✔ Hỗ trợ
                  đổi/trả miễn phí nếu khách hàng không hài lòng về sản phẩm.
                </p>
                <p className="mb-5 text-[15px] md:text-base">
                  <strong>ĐIỀU KIỆN ĐỔI TRẢ SẢN PHẨM:</strong>
                </p>
                <p className="mb-5 text-[15px] md:text-base">
                  1. Quay lại video Unbox sản phẩm. <br />
                  2. Nếu sản phẩm có vấn đề thì liên hệ ngay với KOIN để được hỗ
                  trợ đổi trả.
                </p>
              </div>
            </div>
          </div>

          {/* Same product */}
          <h3 className="font-bold uppercase mb-3 text-2xl">
            SẢN PHẨM TƯƠNG TỰ
          </h3>

          <div className="grid grid-cols-12">
            {Array(4)
              .fill(1)
              .map((prod, idx) => (
                <div
                  key={idx}
                  className="col-span-6 md:col-span-4 lg:col-span-3"
                >
                  <ProductCard />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

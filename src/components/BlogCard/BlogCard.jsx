import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <div className="px-2.5 pb-5 relative">
      <Link
        href={"/blog/bi-kip-tao-dang-chup-hinh-cho-nam-dep"}
        className="mb-5 block rounded-tl-[20px] rounded-br-[20px] overflow-hidden"
      >
        <Image
          src={
            "https://koinclothing.vn/wp-content/uploads/2023/11/tao-dang-chuphinh_11zon.webp"
          }
          alt="thumb"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </Link>
      <div className="">
        <h3 className="my-0.5 leading-6 text-[18px] uppercase">
          <Link
            href="/blog/bi-kip-tao-dang-chup-hinh-cho-nam-dep"
            className="font-semibold uppercase"
          >
            Bí kíp tạo dáng chụp hình cho nam đẹp ngầu như mẫu Hàn Quốc
          </Link>
        </h3>
        <div className="leading-6 mb-3 text-[#adadad] text-xs">
          <span className="">24 Tháng Mười Một, 2023 </span>
          <span>/ Không có phản hồi</span>
        </div>
        <p className="mb-2.5 text-[#777777] text-xs">
          Chắc rằng không ít chàng trai cảm thấy việc chụp hình là vô cùng khó
          khăn. Tâm lý ngại ống kính máy ảnh, không tìm được cách pose dáng phù
          hợp chính là nguyên
        </p>

        <Link
          href={"/blog/bi-kip-tao-dang-chup-hinh-cho-nam-dep"}
          className="text-[#adadad] text-xs"
        >
          Xem thêm »
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

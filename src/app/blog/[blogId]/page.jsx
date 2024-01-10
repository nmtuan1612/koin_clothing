import React from "react";
import Image from "next/image";

const ViewBlogPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1480px]">
        <div className="py-[30px]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-9">
              <div className="px-[30px] pb-[30px]">
                <div className="text-center p-8 pt-0">
                  <h6 className="text-xs uppercase text-[#334862] text-center mb-2">
                    Tips mặc đẹp
                  </h6>
                  <h1 className="font-bold mb-3 text-[26px]">
                    Bí kíp tạo dáng chụp hình cho nam đẹp ngầu như mẫu Hàn Quốc
                  </h1>
                  <div className="uppercase text-[11px]">
                    Posted on 24 Tháng Mười Một, 2023 by admin
                  </div>
                </div>
                {/* img */}
                <div className="">
                  <Image
                    src={
                      "https://koinclothing.vn/wp-content/uploads/2023/11/tao-dang-chuphinh_11zon-1024x576.webp"
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="py-8">
                  <p className="mb-5 text-[#0a0a0a]">
                    Chắc rằng không ít chàng trai cảm thấy việc chụp hình là vô
                    cùng khó khăn. Tâm lý ngại ống kính máy ảnh, không tìm được
                    cách pose dáng phù hợp chính là nguyên nhân khiến profile
                    của họ thiếu vắng đi những khoảnh khắc để đời. Trong bài
                    viết này, KOIN sẽ hướng dẫn một số cách{" "}
                    <strong>tạo dáng chụp ảnh nam</strong> đẹp và cool ngầu.
                    Mong rằng với những bí kíp này sẽ gạt bỏ được những lo ngại
                    của bạn nhé.
                  </p>
                  <h2 className="text-2xl font-bold">
                    Tư thế tạo dáng chụp ảnh nam cực đẹp và thần thái
                  </h2>
                  <p className="mb-5 text-[#0a0a0a]">
                    Chắc rằng không ít chàng trai cảm thấy việc chụp hình là vô
                    cùng khó khăn. Tâm lý ngại ống kính máy ảnh, không tìm được
                    cách pose dáng phù hợp chính là nguyên nhân khiến profile
                    của họ thiếu vắng đi những khoảnh khắc để đời. Trong bài
                    viết này, KOIN sẽ hướng dẫn một số cách{" "}
                    <strong>tạo dáng chụp ảnh nam</strong> đẹp và cool ngầu.
                    Mong rằng với những bí kíp này sẽ gạt bỏ được những lo ngại
                    của bạn nhé.
                  </p>
                  <p className="mb-5 text-[#0a0a0a]">
                    Chắc rằng không ít chàng trai cảm thấy việc chụp hình là vô
                    cùng khó khăn. Tâm lý ngại ống kính máy ảnh, không tìm được
                    cách pose dáng phù hợp chính là nguyên nhân khiến profile
                    của họ thiếu vắng đi những khoảnh khắc để đời. Trong bài
                    viết này, KOIN sẽ hướng dẫn một số cách{" "}
                    <strong>tạo dáng chụp ảnh nam</strong> đẹp và cool ngầu.
                    Mong rằng với những bí kíp này sẽ gạt bỏ được những lo ngại
                    của bạn nhé.
                  </p>
                  <h2 className="text-2xl font-bold">
                    Tư thế tạo dáng chụp ảnh nam cực đẹp và thần thái
                  </h2>
                  <p className="mb-5 text-[#0a0a0a]">
                    Chắc rằng không ít chàng trai cảm thấy việc chụp hình là vô
                    cùng khó khăn. Tâm lý ngại ống kính máy ảnh, không tìm được
                    cách pose dáng phù hợp chính là nguyên nhân khiến profile
                    của họ thiếu vắng đi những khoảnh khắc để đời. Trong bài
                    viết này, KOIN sẽ hướng dẫn một số cách{" "}
                    <strong>tạo dáng chụp ảnh nam</strong> đẹp và cool ngầu.
                    Mong rằng với những bí kíp này sẽ gạt bỏ được những lo ngại
                    của bạn nhé.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-0 md:col-span-3">
              <div className="px-[30px] pb-[30px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlogPage;

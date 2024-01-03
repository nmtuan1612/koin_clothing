import BlogCard from "@/components/BlogCard/BlogCard";
import ProductCard from "@/components/ProductCard/ProductCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* hero */}
      <div className="max-w-[1480px]">
        <div className="flex flex-col-reverse md:flex-row md: items-center">
          <div className="flex-1 p-2.5 flex flex-col items-center gap-5">
            <h2 className="text-6xl text-black uppercase font-bold pb-4">
              ÁO THUN <br />
              LOCAL BRAND FORM <br />
              OVERSIZE
            </h2>
            <Image
              src={
                "https://koinclothing.vn/wp-content/uploads/2023/03/chu-ky-koin-fashion.png"
              }
              width={180}
              height={46}
            />
            <p className="text-center">
              Chào mừng bạn đến với Thương hiệu Koin Clothing! <br />
              Chuyên cung cấp{" "}
              <Link href={"/"} className="text-[#334862]">
                Áo thun nam nữ Form Oversize
              </Link>{" "}
              trẻ trung và năng động.
            </p>
            <p className="text-center pb-5">
              – Chất liệu: Vải 100% Cotton 2 Chiều (Định lượng: 250Gsm) <br />
              – Phần cổ Bo Rib giúp cổ áo không bị giãn theo thời gian. <br />–
              Form áo Oversize (M, L, XL) phù hợp với nhiều kiểu hình thể.{" "}
              <br />– Hỗ trợ đổi/trả miễn phí nếu khách hàng không hài lòng về
              sản phẩm.
            </p>
          </div>
          <div className="flex-1 p-2.5">
            <Image
              src={
                "https://koinclothing.vn/wp-content/uploads/2023/11/ao-thun-unisex-oversize-koin-clothing-banner.webp"
              }
              width={936}
              height={1248}
            />
          </div>
        </div>
      </div>

      {/* product list */}
      <div className="max-w-[1480px] p-2.5">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <ProductCard />
          </div>
          <div className="col-span-3">
            <ProductCard />
          </div>
          <div className="col-span-3">
            <ProductCard />
          </div>
          <div className="col-span-3">
            <ProductCard />
          </div>
        </div>

        <div className="flex justify-center pb-[50px]">
          <Link
            href={"/san-pham"}
            className="border-2 border-black px-10 py-[15px] leading-4 rounded-md uppercase"
          >
            Tất cả sản phẩm
          </Link>
        </div>
      </div>

      {/* about */}
      <div
        className="py-10 w-full flex justify-center"
        style={{
          backgroundImage:
            'url("https://koinclothing.vn/wp-content/uploads/2023/03/bg@.jpg")',
        }}
      >
        <div className="max-w-[1480px] grid grid-cols-10">
          <div className="col-span-10 md:col-span-2 flex items-center">
            <div className="px-4 pb-[30px]">
              <div className="mb-10 text-3xl uppercase">
                Câu chuyện về <br />
                <b>#KOIN</b>
              </div>
            </div>
          </div>
          <div className="col-span-10 md:col-span-3 p-2.5">
            <Image
              src={
                "https://koinclothing.vn/wp-content/uploads/2023/03/bg40.webp"
              }
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />

            <Image
              src={
                "https://koinclothing.vn/wp-content/uploads/2023/11/koin-fashion-2023-unisex.webp"
              }
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>

          <div className="col-span-10 md:col-span-5 p-2.5 text-[15px] flex flex-col justify-center">
            <p className="pb-5 text-justify">
              Bằng chính những trải nghiệm thực tế và nghiên cứu về xu hướng
              thời trang. Đầu năm 2021, <b>KOIN</b> chính thức cho ra mắt các
              sản phẩm Áo Thun Local Brand Form Oversize có thiết kế đơn giản,
              được sử dụng phương pháp thiết kế Graphic artwork, hứa hẹn sẽ là
              những chiếc áo thun được giới trẻ yêu thích sự trẻ trung, năng
              động đặc biệt cho cộng đồng yêu mến streetwear. Các sản phẩm được
              hoàn thiện trong nhà máy đạt tiêu chuẩn xuất khẩu và bởi những bàn
              tay khéo léo mang lại những sản phẩm đáng tự hào{" "}
              <b>“Sản xuất tại Việt Nam”.</b>
            </p>
            <p className="pb-5 text-justify">
              Đi cùng với niềm tự hào đó là đôi mắt sáng tạo đầy thẩm mỹ của đội
              ngũ thiết kế tài năng, sức sáng tạo của các bạn trong team luôn
              độc đáo đã tạo nên các mẫu thiết kế áo thun streetwear hội tụ đủ
              các yếu tố <b>[Xu hướng, chất lượng, mức giá tốt]</b>, một item
              phù hợp với tín đồ yêu mến phong cách năng động và trẻ trung.
            </p>
            <div className="grid grid-cols-3">
              <div className="col-span-3 md:col-span-1 flex flex-col items-center">
                <div className="w-[30%] mb-4">
                  <Image
                    src={
                      "https://koinclothing.vn/wp-content/uploads/2023/03/icon-3.png"
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
                </div>
                <span className="text-center">
                  Giao hàng <b>Nhanh</b>
                  <br />
                  Mọi nơi trên toàn quốc
                </span>
              </div>
              <div className="col-span-3 md:col-span-1 flex flex-col items-center">
                <div className="w-[30%] mb-4">
                  <Image
                    src={
                      "https://koinclothing.vn/wp-content/uploads/2023/03/icon-2.png"
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
                </div>
                <span className="text-center">
                  <b>Free Ship</b> toàn quốc
                  <br />
                  Khi mua sản phẩm tại Shopee
                </span>
              </div>
              <div className="col-span-3 md:col-span-1 flex flex-col items-center">
                <div className="w-[30%] mb-4">
                  <Image
                    src={
                      "https://koinclothing.vn/wp-content/uploads/2023/03/icon-1.png"
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
                </div>
                <span className="text-center">
                  Đổi trả miễn phí
                  <br />
                  <b>7 ngày</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 pb-17 bg-black w-full flex justify-center">
        <div className="max-w-[1210px] flex mr-auto ml-auto">
          <div className="p-2.5">
            <div className="mt-10 mb-5">
              <Link href={"/blog"} className="text-3xl">
                <span className="text-[#c0c0c0]">MẶC ĐẸP SỐNG “CHẤT” </span>
                <span className="text-white">CÙNG #KOIN</span>
              </Link>
            </div>
            {/* blog */}
            <div className="mb-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-white">
                <div className="col-span-1">
                  <BlogCard />
                </div>
                <div className="col-span-1">
                  <BlogCard />
                </div>
                <div className="col-span-1">
                  <BlogCard />
                </div>
              </div>
            </div>
            {/* feedbacks */}
            <div className="mt-10">
              <div className="bg-[#c0c0c0] h-[2px]"></div>
            </div>

            <div className="mt-10 mb-5">
              <Link href={"/blog"} className="text-3xl">
                <span className="text-[#c0c0c0]">FEEDBACK CỦA</span>
                <span className="text-white"> KHÁCH HÀNG</span>
              </Link>
            </div>
            <div className="pb-[30px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="col-span-1">
                  <Image
                    src={
                      "https://koinclothing.vn/wp-content/uploads/2023/10/feedback-khach-hang-koin-1.webp"
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={
                      "https://koinclothing.vn/wp-content/uploads/2023/10/feedback-khach-hang-koin-1.webp"
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={
                      "https://koinclothing.vn/wp-content/uploads/2023/10/feedback-khach-hang-koin-1.webp"
                    }
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 w-full flex justify-center">
        <div className="max-w-[1225px] w-full flex flex-col mr-auto ml-auto p-5">
          <div className="pt-[30px] pb-6 mb-5">
            <h3 className="uppercase text-3xl text-center">
              NHỮNG CÂU HỎI THƯỜNG GẶP
            </h3>
          </div>
          <div className="pb-[50px] w-full">
            <div className="border py-4 px-5">
              <Link href={"/"} className="font-bold">
                01. Địa chỉ cửa hàng KOIN ở đâu?
              </Link>
            </div>
            <div className="border py-4 px-5">
              <Link href={"/"} className="font-bold">
                02. Sản phẩm Áo thun của KOIN làm từ chất liệu gì?
              </Link>
            </div>
            <div className="border py-4 px-5">
              <Link href={"/"} className="font-bold">
                03. Các sản phẩm được sản xuất ở đâu?
              </Link>
            </div>
            <div className="border py-4 px-5">
              <Link href={"/"} className="font-bold">
                04. Sản phẩm mua rồi có được đổi trả hay không?
              </Link>
            </div>
            <div className="border py-4 px-5">
              <Link href={"/"} className="font-bold">
                05. Bao lâu kể từ khi đặt hàng thành công tôi sẽ nhận được hàng?
              </Link>
            </div>
            <div className="border py-4 px-5">
              <Link href={"/"} className="font-bold">
                06. Hiện tại có thể mua sản phẩm KOIN tại những sàn nào?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

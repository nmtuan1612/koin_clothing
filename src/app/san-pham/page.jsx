import ProductCard from "@/components/ProductCard/ProductCard";
import React from "react";

const ProductPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1480px] w-full">
        <div className="pt-[70px] pb-[30px]">
          <div className="py-5 px-2.5">
            <div className="mb-5">
              <h2 className="uppercase text-3xl pb-4">TẤT CẢ SẢN PHẨM</h2>
            </div>
            <div className="mb-5 text-[#7A7A7A]">
              <p>
                Chúng tôi tin bằng tất cả sự nổ lực, tâm huyết và tỉ mỉ vào từng
                sản phẩm, những sản phẩm của KOIN sẽ là những chiếc áo thun 100%
                Cotton chất lượng cao mà nhiều bạn trẻ muốn có trong tủ đồ của
                mình. Rất nhiều người đã chọn KOIN, còn bạn ngại gì mà không lựa
                ngay cho mình một chiếc áo để tủ đồ thêm đa dạng chứ?
              </p>
            </div>
          </div>
        </div>

        {/* list */}
        <div className="py-5">
          <div className="p-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

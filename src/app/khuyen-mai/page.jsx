import ProductCard from "@/components/ProductCard/ProductCard";
import React from "react";

const SaleProductPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1480px] w-full">
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

export default SaleProductPage;

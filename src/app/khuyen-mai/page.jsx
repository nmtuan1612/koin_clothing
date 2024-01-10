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
              {Array(16)
                .fill(0)
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
    </div>
  );
};

export default SaleProductPage;

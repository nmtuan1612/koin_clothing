import BlogCard from "@/components/BlogCard/BlogCard";
import React from "react";

const BlogPage = () => {
  return (
    <div className="w-full flex flex-col items-center bg-[#F9F9F9]">
      <div className="w-full max-w-[1480px]">
        <div className="pt-5 pb-8">
          <div className="p-5 w-full">
            <div className="mb-5">
              <div className="pb-4">
                <h2 className="text-3xl uppercase text-center">
                  TIPS MẶC ĐẸP & SỐNG CHẤT CÙNG KOIN
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-3">
                <BlogCard />
              </div>
              <div className="col-span-3">
                <BlogCard />
              </div>
              <div className="col-span-3">
                <BlogCard />
              </div>
              <div className="col-span-3">
                <BlogCard />
              </div>
              <div className="col-span-3">
                <BlogCard />
              </div>
              <div className="col-span-3">
                <BlogCard />
              </div>
              <div className="col-span-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

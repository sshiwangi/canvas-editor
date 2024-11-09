import React from "react";
import { Search } from "lucide-react";

const AllTemplates = () => {
  return (
    <div className="min-h-screen py-20 bg-[#718768]">
      {/* Hero Section */}
      <div className="relative px-8 pt-8 pb-32">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-white text-[42px] font-semibold leading-tight max-w-[500px]">
            Enter the digital bazaar, where every click leads to excitement
          </h1>
          <p className="text-white/90 text-sm mt-2 max-w-[400px]">
            Celebrate convenience, embrace choice, and experience seamless
            shopping with us! discover a world where every click leads to
            excitement.
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="max-w-[1200px] mx-auto px-8 -mt-14 relative z-10 flex justify-between items-center">
        <div className="flex gap-3">
          <button className="bg-white rounded-full px-5 py-2 text-sm font-medium">
            Product categories
          </button>
          <div className="flex gap-3">
            {["Men", "Women", "Accessories", "Sales"].map((item) => (
              <button
                key={item}
                className="text-white px-4 py-2 text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <button className="bg-white rounded-full px-5 py-2 text-sm font-medium">
            Go to lifestore
          </button>
          <button className="bg-white rounded-full px-5 py-2 text-sm font-medium">
            Request new products
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto mt-8 bg-white rounded-3xl px-8 py-6">
        {/* Featured Section */}
        <div className="flex items-center justify-between mb-6">
          <button className="flex items-center gap-2 text-[15px] font-medium">
            Featured clothing
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 py-2.5 rounded-full border border-gray-200 text-sm"
            />
          </div>
          <button className="bg-black text-white rounded-full px-6 py-2.5 text-sm font-medium">
            Filters
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              code: "CPN-#54dvs",
              category: "district version / featured",
              name: 'Ochar distict shirt, halft light wight-Godji black and orange" g7',
              price: "$39.09",
              status: "PNL-Sold out",
              image: "/api/placeholder/400/320",
            },
            {
              code: "CPN-#37nb",
              category: "new balance / offers",
              name: "Combo hooded open sweter- White and grey",
              price: "$13.13",
              image: "/api/placeholder/400/320",
            },
            {
              code: "CPN-#63dvs",
              category: "district version / latest",
              name: "Women DV- NB twin layered recycled Midweight Jacket- Clay Pink",
              price: "$116.44",
              status: "PNL-Sold out",
              image: "/api/placeholder/400/320",
            },
            {
              code: "CPN-#44ads",
              category: "nike / latest",
              name: "Man adizero nike pro 3-preloved scalted/Aura soft-orange T shirt",
              price: "$56.08",
              image: "/api/placeholder/400/320",
            },
          ].map((product, index) => (
            <div key={index} className="group">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[280px] object-cover"
                />
                <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded px-2.5 py-1 text-xs text-white">
                  {product.code}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-gray-500 text-sm">{product.category}</p>
                <h3 className="mt-1 font-medium text-[15px] leading-snug">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-semibold">{product.price}</span>
                  {product.status && (
                    <span className="text-gray-400 text-sm">
                      {product.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Categories */}
        <div className="mt-8 space-y-4">
          {["Shoes and sandals", "Shop classics"].map((category) => (
            <button
              key={category}
              className="flex items-center gap-2 text-[15px] font-medium"
            >
              {category}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTemplates;

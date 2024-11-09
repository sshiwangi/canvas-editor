import React from "react";

function CTA() {
  return (
    <section className='className="bg-gradient-to-b from-white via-[#FAFAFA] to-[#F5F5F5] dark:bg-gradient-to-b dark:from-[#1A1A1A] dark:via-[#333333] dark:to-[#000000] pt-20 pb-12'>
      <div className="container mx-auto px-4 mb-20">
        <div className=" bg-primary-600 dark:bg-primary-700 rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
            {/* Left side - 3D Hexagon Image */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 ">
              <img
                src="https://images.pexels.com/photos/7976210/pexels-photo-7976210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="3D Hexagon Grid"
                className="w-full object-cover rounded-xl"
              />
            </div>

            {/* Right side - Text and Button */}
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-4xl md:text-5xl font-normal text-black dark:text-white leading-tight mb-6">
                Unlock the power of AI for everyone—start using CanvasEdge
                today!
              </h2>
              <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                <span>GET A DEMO</span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;

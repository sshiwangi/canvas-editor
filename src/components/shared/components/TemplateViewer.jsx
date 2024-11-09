import React from "react";
import { Share, X, BarChart2, MessageCircle, ExternalLink, Plus } from "lucide-react";

const HeaderBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-teal-400 to-purple-600">
      {/* Left side */}
      <div className="flex items-center space-x-2">
        <button className="text-white hover:bg-white/10 p-2 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M16 18l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="text-white font-medium">File</span>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-2">
        <button className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm hover:bg-white/30">
          👑 Upgrade to Canva Pro
        </button>

        <button className="w-8 h-8 bg-purple-700 text-white rounded-full flex items-center justify-center font-semibold">
          S
        </button>

        <button className="p-2 text-white hover:bg-white/10 rounded">
          <Plus className="h-5 w-5" />
        </button>

        <button className="p-2 text-white hover:bg-white/10 rounded">
          <BarChart2 className="h-5 w-5" />
        </button>

        <button className="p-2 text-white hover:bg-white/10 rounded">
          <MessageCircle className="h-5 w-5" />
        </button>

        <button className="px-4 py-1.5 bg-white text-gray-700 rounded-md font-medium hover:bg-gray-100 flex items-center space-x-2">
          <Share className="h-4 w-4" />
          <span>Share</span>
        </button>

        <button className="p-2 text-white hover:bg-white/10 rounded">
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};


const TemplateViewer = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FD]">
      {/* Top Toolbar */}
      <div className="h-14 bg-gradient-to-r from-[#7BB9B6] via-[#7471CA] to-[#7E54D1] flex items-center justify-between px-4">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button className="text-white hover:bg-white/10 p-2 rounded">
            <ExternalLink className="w-5 h-5" />
          </button>
          <span className="text-white font-medium">File</span>
        </div>

        {/* Center Section */}
        <div className="flex items-center gap-4">
          <button className="bg-[#7E54D1] text-white px-4 py-1.5 rounded-full flex items-center gap-2">
            <span className="text-yellow-400 text-sm">👑</span>
            Upgrade to Canva Pro
          </button>
          
          <div className="flex items-center">
            <button className="w-8 h-8 bg-[#66B99B] rounded-full flex items-center justify-center text-white font-medium">
              S
            </button>
            <button className="w-8 h-8 bg-[#7E54D1]/30 rounded-full flex items-center justify-center text-white ml-1">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button className="text-white hover:bg-white/10 p-2 rounded">
            <BarChart2 className="w-5 h-5" />
          </button>
          <button className="text-white hover:bg-white/10 p-2 rounded">
            <MessageCircle className="w-5 h-5" />
          </button>
          <button className="bg-white text-[#7E54D1] px-4 py-1.5 rounded-full font-medium flex items-center gap-2">
            <Share2 className="w-4 h-4" /> 
            Share
          </button>
          <button className="text-white hover:bg-white/10 p-2 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content Area with Jewelry Design */}
      <div className="p-8 flex justify-center items-center bg-[#F8F9FD] flex-1">
        <div className="bg-[#FEF5E7] p-12 w-[800px] relative">
          {/* Header */}
          <div className="space-y-1 mb-8">
            <p className="text-sm">Larana Jewelry</p>
            <div className="flex items-baseline gap-4">
              <h1 className="font-serif italic text-6xl leading-none">Limited</h1>
              <h2 className="font-serif text-4xl">Edition</h2>
            </div>
          </div>

          {/* Message Box with Line */}
          <div className="relative mb-12">
            <div className="border-t border-black pt-4">
              <div className="max-w-md">
                <div className="border border-black rounded-full py-3 px-6">
                  <p className="text-lg">
                    Get our limited edition jewelry collection, make sure you get it.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-4 w-[40%] h-px bg-black"></div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-5 gap-6 mb-8">
            <div className="col-span-3">
              <img
                src="/api/placeholder/600/600"
                alt="Gold bracelet on silk"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="col-span-2">
              <img
                src="/api/placeholder/400/400"
                alt="Pearl ring"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Footer Text */}
          <div className="space-y-2">
            <p className="text-lg">Check out our latest collections on the website.</p>
            <p className="text-lg">@reallygreatsite</p>
          </div>
        </div>
      </div>

      {/* Bottom Toolbar */}
      <div className="h-12 bg-white border-t flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Page 1/1</span>
          <div className="flex items-center gap-4">
            <input 
              type="range" 
              className="w-32 accent-[#7E54D1]"
              defaultValue="62"
            />
            <span className="text-sm text-gray-600">62%</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateViewer;
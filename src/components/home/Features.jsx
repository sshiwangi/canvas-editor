import React from "react";
import { Zap, Globe, Coins, Shield } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="bg-gradient-to-b from-white via-[#FAFAFA] to-[#F5F5F5] dark:bg-gradient-to-b dark:from-[#1A1A1A] dark:via-[#333333] dark:to-[#1b1b1b] py-32">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header with exact styling */}
        <div className="inline-flex bg-emerald-500/10 dark:bg-emerald-500/20 px-2 py-1 rounded-full">
          <span className="text-[#1A1A1A] dark:text-white text-sm font-medium">
            Why CanvasEdge?
          </span>
        </div>

        <h2 className="text-[64px] leading-[1.1] text-[#1A1A1A] dark:text-white font-normal mt-4 mb-4 tracking-[-0.02em]">
          We are the best platform for
          <br />
          creative design
        </h2>

        <p className="text-xl text-[#666666] dark:text-gray-300 mb-8 font-normal">
          Fast, flexible and powerful design tools to bring your ideas to life.
        </p>

        <div className="inline-block bg-[#D2FF6B]/10 dark:bg-[#D2FF6B]/20 p-1 rounded-full mb-32">
          <a
            href="/dashboard"
            className="inline-flex items-center rounded-full bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-500 text-black dark:text-white px-8 py-4 font-normal text-base transition-all"
          >
            Create account
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Features with exact styling */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              Icon: Zap,
              title: "Fast, reliable tools",
              description:
                "Create stunning designs with our optimized interface.",
            },
            {
              Icon: Globe,
              title: "Template library",
              description:
                "Access thousands of professional templates globally.",
            },
            {
              Icon: Coins,
              title: "Cost effective",
              description: "Premium features at competitive pricing.",
            },
            {
              Icon: Shield,
              title: "Secure & Trusted",
              description: "Enterprise-grade security for all your designs.",
            },
          ].map(({ Icon, title, description }) => (
            <div key={title} className="group">
              <div className="inline-block bg-[#D2FF6B]/10 dark:bg-[#D2FF6B]/20 p-1 rounded-full mb-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500 dark:bg-emerald-500 flex items-center justify-center">
                  <Icon
                    className="w-8 h-8 text-black dark:text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <h3 className="text-[#1A1A1A] dark:text-white text-xl font-medium mb-3">
                {title}
              </h3>
              <p className="text-[#666666] dark:text-gray-300 text-base leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

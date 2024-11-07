import React from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
// import AnimatedEditorPreview from "../components/custom/animated-hero";

function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-16 dark:bg-gray-800 bg-white">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Create Stunning Designs with Ease
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Upload images, adjust text, change colors, and generate creative
                content seamlessly with our powerful canvas editor.
              </p>
              <div className="flex space-x-4">
                <a
                  href="/dashboard"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="bg-white text-primary-600 border border-primary-600 dark:bg-gray-800 dark:text-white dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-primary-50 transition"
                >
                  Watch Demo
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              {/* <AnimatedEditorPreview /> */}
              {/* <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 aspect-video flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Canvas Editor Preview</span>
              </div> */}
            </div>
          </div>
        </section>
      </main>
      <section id="features" className="bg-gray-50 dark:bg-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            Powerful Features for Creative Minds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-primary-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Image Upload &amp; Editing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Easily upload and edit images with our intuitive tools. Crop,
                resize, and apply filters effortlessly.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-primary-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Text Customization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Add and customize text with a wide range of fonts, sizes, and
                styles. Perfect for creating eye-catching designs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-primary-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Color Palette</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access a vast color palette and color picker to find the perfect
                hues for your designs. Create stunning color schemes
                effortlessly.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-primary-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                AI-Powered Content Generation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Leverage our AI to generate creative content, from catchy
                headlines to unique design elements, enhancing your projects.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-primary-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create designs that look great on any device. Our editor ensures
                your work is responsive and adaptable.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-primary-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Template Library</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access a vast library of professionally designed templates to
                jumpstart your creative process.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <div className="bg-primary-100 dark:bg-primary-600 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                  <span className="text-primary-600 dark:text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Sign Up and Create a Project
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Create your account and start a new project. Choose from our
                  wide range of templates or start with a blank canvas.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 aspect-video flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Sign Up Illustration</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center mb-16">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                <div className="bg-primary-100 dark:bg-primary-600 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                  <span className="text-primary-600 dark:text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Upload and Edit Images
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Easily upload your images and use our intuitive tools to edit,
                  crop, and enhance them to perfection.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 aspect-video flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">
                    Image Editing Illustration
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <div className="bg-primary-100 dark:bg-primary-600 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                  <span className="text-primary-600 dark:text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Customize Text and Colors
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Add text to your design and customize fonts, sizes, and
                  colors. Use our color picker to find the perfect palette for
                  your project.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 aspect-video flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">
                    Text and Color Customization Illustration
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                <div className="bg-primary-100 dark:bg-primary-600 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                  <span className="text-primary-600 dark:text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Generate Creative Content
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Use our AI-powered tools to generate unique content, from
                  catchy headlines to creative design elements that enhance your
                  project.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 aspect-video flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">
                    AI Content Generation Illustration
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="#"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition inline-block"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>
      <section id="showcase" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            Showcase of Creative Possibilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project 1 Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Social Media Post
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A vibrant social media post design created using our canvas
                  editor.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project 2 Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Event Flyer</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  An eye-catching event flyer designed with custom graphics and
                  text.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project 3 Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Business Card</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A professional business card design with a unique color
                  scheme.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project 4 Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Instagram Story</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  An engaging Instagram story template with custom
                  illustrations.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project 5 Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Label</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A sleek product label design showcasing our color adjustment
                  features.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project 6 Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Email Header</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A captivating email header created with our AI-powered content
                  generation.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 font-semibold text-lg inline-flex items-center"
            >
              View More Examples
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
                <button className="flex items-center justify-between w-full text-left">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    How easy is it to use the canvas editor?
                  </span>
                  <svg
                    className="w-6 h-6 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="mt-3">
                  <p className="text-gray-600 dark:text-gray-300">
                    Our canvas editor is designed with user-friendliness in
                    mind. It features an intuitive interface that allows users
                    of all skill levels to easily upload images, adjust text,
                    and change colors without any prior design experience.
                  </p>
                </div>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
                <button className="flex items-center justify-between w-full text-left">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Can I use the editor on mobile devices?
                  </span>
                  <svg
                    className="w-6 h-6 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="mt-3">
                  <p className="text-gray-600 dark:text-gray-300">
                    Yes, our canvas editor is fully responsive and works
                    seamlessly on mobile devices, tablets, and desktop
                    computers. You can create and edit your designs on the go,
                    anytime, anywhere.
                  </p>
                </div>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
                <button className="flex items-center justify-between w-full text-left">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    What kind of AI-generated content can I create?
                  </span>
                  <svg
                    className="w-6 h-6 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="mt-3">
                  <p className="text-gray-600 dark:text-gray-300">
                    Our AI-powered tools can help you generate various types of
                    creative content, including catchy headlines, social media
                    captions, product descriptions, and even design elements
                    like color palettes and layout suggestions.
                  </p>
                </div>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
                <button className="flex items-center justify-between w-full text-left">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Is there a limit to the number of designs I can create?
                  </span>
                  <svg
                    className="w-6 h-6 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="mt-3">
                  <p className="text-gray-600 dark:text-gray-300">
                    The number of designs you can create depends on your
                    subscription plan. Our Basic plan allows for 5 projects,
                    while our Pro and Enterprise plans offer unlimited design
                    creation. Check our pricing page for more details on each
                    plan's features.
                  </p>
                </div>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-600 pb-6">
                <button className="flex items-center justify-between w-full text-left">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Can I collaborate with my team on designs?
                  </span>
                  <svg
                    className="w-6 h-6 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="mt-3">
                  <p className="text-gray-600 dark:text-gray-300">
                    Yes, our Pro and Enterprise plans include collaboration
                    features that allow you to work with your team members on
                    designs in real-time. You can share projects, leave
                    comments, and manage permissions for seamless teamwork.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Still have questions? Feel free to contact our support team.
              </p>
              <a
                href="#"
                className="inline-block mt-4 bg-primary-600 text-white py-2 px-6 rounded-lg hover:bg-primary-700 transition"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="cta" className="bg-primary-600 dark:bg-primary-700 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Unleash Your Creativity?
            </h2>
            <p className="text-xl text-white mb-8">
              Join thousands of users who are creating stunning designs with our
              powerful canvas editor. Start your free trial today and experience
              the difference!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a
                href="#"
                className="text-white border-2 border-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Schedule a Demo
              </a>
            </div>
            <p className="text-white text-sm mt-6">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;

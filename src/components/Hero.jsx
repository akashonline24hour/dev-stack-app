import heroImage from "../assets/images/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text Content & Actions */}
          <div className="text-center lg:text-left space-y-6">
            {/* Title Text & Gradient Text */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Build Your Ideal <br className="hidden sm:inline" />
              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            {/* Description Text */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Gradient Button */}
              <a
                href="#technologies"
                className="btn border-none bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-medium text-sm sm:text-base px-6 py-3 rounded-md shadow-md transition-all duration-200"
              >
                Explore Technologies
              </a>

              {/* Outlined Button */}
              <a
                href="#about"
                className="btn btn-outline border-slate-300 hover:border-slate-400 hover:bg-slate-100 text-slate-700 font-medium text-sm sm:text-base px-6 py-3 rounded-md transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column: Banner Image */}
          <div className="flex justify-center items-center">
            <img
              src={heroImage}
              alt="Build Your Ideal Development Stack Graphic"
              className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

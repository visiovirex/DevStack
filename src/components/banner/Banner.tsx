import BannerImage from "../../assets/banner-stack.png";

function Banner() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-6">
      <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Build Your Ideal <br />{" "}
            <span className="brand-gradient-text">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 max-w-xl mx-auto md:mx-0 text-sm md:text-base leading-6 text-gray-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-7 items-center flex flex-col sm:flex-row justify-center md:justify-start gap-3">
            <button className="btn btn-wide w-full sm:w-auto brand-gradient border-none text-white rounded-lg">
              Explore Technologies
            </button>

            <button className="btn btn-wide w-full sm:w-auto rounded-lg border border-gray-200 bg-white text-gray-600">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-95 sm:max-w-100 md:w-120"
            src={BannerImage}
            alt="DevStack"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;

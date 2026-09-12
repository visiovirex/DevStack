import BannerImage from "../../assets/banner-stack.png";

function Banner() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-10">
      <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Build Your Ideal <br />{" "}
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-base leading-6 text-gray-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="btn btn-wide bg-linear-to-r from-[#F97316] to-[#EC4899] border-none text-white rounded-lg">
              Explore Technologies
            </button>
            <button className="btn btn-wide rounded-lg border border-gray-200 bg-white text-gray-600">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full justify-center md:w-1/2 flex">
          <img src={BannerImage} alt="DevStack" />
        </div>
      </div>
    </div>
  );
}

export default Banner;

import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <div className="w-full max-w-[800px] mx-auto p-4">
      <div className="mt-40">
        <div className="bg-[#ffffff7c] rounded-2xl text-[#03045e] py-6 mb-20">
          <h1 className="text-lg sm:text-2xl md:text-3xl text-center font-bold mb-5">
            Welcome to{" "}
            <span className="ml-2 text-[40px] sm:text-[60px] md:text-[80px]">
              SkySphere
            </span>
          </h1>
          <h2 className="text-sm sm:text-base text-center font-semibold text-gray-600">
            Enter a locality name to get the weather forecast
          </h2>
        </div>
        <SearchBox />
      </div>
    </div>
  );
}

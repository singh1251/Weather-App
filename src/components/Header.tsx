import Link from "next/link";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <>
      <div className="p-4 flex justify-between items-center bg-[#ffffff7c]">
        <div className="w-[70%] max-w-[450px]">
          <SearchBox />
        </div>
        <Link href={"/"}>
          <p className="text-[#03045e] font-bold text-base sm:text-xl">
            SkySphere
          </p>
        </Link>
      </div>
    </>
  );
}

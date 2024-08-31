import Link from "next/link";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <>
      <div className="p-4 flex flex-col sm:flex-row items-center gap-5 bg-[#ffffff7c]">
        <Link href={"/"}>
          <p className="text-[#03045e] text-2xl font-bold">SkySphere</p>
        </Link>

        <div className="w-full max-w-[450px]">
          <SearchBox />
        </div>
      </div>
    </>
  );
}

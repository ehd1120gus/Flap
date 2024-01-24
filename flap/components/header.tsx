import Link from "next/link";
import FlapLogo from "./flaplogo";
import { HiOutlineMenu, HiOutlineSearch } from "react-icons/hi";

export default function Header() {
  return (
    <div className="text-md w-full h-16 px-4 py-4 bg-neutral-900 items-center gap-2 inline-flex">
      <div className="flex h-8 w-8 bg-transparent rounded-md flex-col border border-neutral-700 hover:border-neutral-400 cursor-pointer items-center justify-center">
        <HiOutlineMenu className="h-5 w-5 text-neutral-400" />
      </div>
      <div className="flex h-full items-center">
        <Link href="/">
          <FlapLogo />
        </Link>
      </div>
      <div className="flex px-2 py-[6px] rounded-lg shrink-0 justify-center items-center bg-transparent hover:bg-neutral-800 ">
        <div className="flex text-white text-sm font-semibold font-['SF Pro Text'] leading-tight">
          Product
        </div>
      </div>
      <div className="flex justify-end w-[500px]">
        <div className="flex h-8 w-60 bg-transparent rounded-md border border-neutral-700 hover:border-neutral-400 cursor-pointer items-center">
          <HiOutlineSearch className="h-4 w-4 text-neutral-400" />
          <div className="text-white text-opacity-70 text-sm font-['SF Pro Text'] leading-tight">
            Search GitHub
          </div>
        </div>
        <div className="px-3 py-1.5 justify-start items-center gap-2 inline-flex">
          <div className="text-white font-semibold font-['SF Pro Text'] leading-tight">
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
}

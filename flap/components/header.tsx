import Link from "next/link";
import FlapLogo from "./flaplogo";
import { HiOutlineMenu } from "react-icons/hi";

export default function Header() {
  return (
    <div className="self-stretch text-md w-full h-[100px] px-5 py-5 bg-zinc-900 justify-start items-center gap-2 inline-flex">
      <div className="flex h-12 w-12 bg-transparent rounded-lg flex-col border-[1px] border-gray-700 hover:border-gray-400 cursor-pointer items-center justify-center">
        <HiOutlineMenu className="h-7 w-7 text-gray-400" />
      </div>
      <div className="flex h-full items-center">
        <Link href="/">
          <FlapLogo />
        </Link>
      </div>
      <div className="grow shrink basis-0 h-8 justify-start items-center flex">
        <div className="bg-white bg-opacity-0 rounded-md flex-col justify-start items-center gap-2 inline-flex">
          <div className="px-2 py-1.5 justify-start items-center gap-2 inline-flex">
            <div className="text-white font-semibold font-['SF Pro Text'] leading-tight">
              Product
            </div>
            <div className="w-4 h-4 px-[3px] pt-[5px] pb-[5.25px] justify-center items-center flex" />
          </div>
        </div>
      </div>
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch h-8 px-2 rounded-md border border-gray-600 justify-start items-center gap-2 inline-flex">
          <div className="w-4 h-4 px-px py-px justify-center items-center flex" />
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-white text-opacity-70 font-normal font-['SF Pro Text'] leading-tight">
              Search GitHub
            </div>
          </div>
          <div className="rounded-[3px] border border-gray-600 justify-center items-center gap-2 flex">
            <div className="w-5 h-5 justify-center items-center gap-2 flex">
              <div className="w-2.5 h-[0px] origin-top-left rotate-[-53.13deg] border border-white border-opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white bg-opacity-0 rounded-md border border-gray-400 border-opacity-20 flex-col justify-start items-center gap-2 inline-flex">
        <div className="px-3 py-1.5 justify-start items-center gap-2 inline-flex">
          <div className="text-white font-semibold font-['SF Pro Text'] leading-tight">
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
}

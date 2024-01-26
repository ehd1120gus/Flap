import Link from "next/link";
import FlapLogo from "./flaplogo";
import { HiOutlineMenu, HiOutlineSearch } from "react-icons/hi";
import { IoAdd } from "react-icons/io5";
import { VscInbox } from "react-icons/vsc";
import {
  GoCommandPalette,
  GoTriangleDown,
  GoIssueOpened,
  GoGitPullRequest,
} from "react-icons/go";

export default function Header() {
  return (
    <div className="text-md w-full h-16 pl-1 pr-4 py-4 items-center gap-2 inline-flex bg-secondary border-b">
      <div className="flex h-full items-center">
        <Link href="/">
          <FlapLogo />
        </Link>
      </div>
      <div className="flex px-2 py-[6px] rounded-lg shrink-0 justify-center items-center btn-invisible">
        <div className="flex text-sm font-semibold font-['SF Pro Text'] leading-tight text-foreground">
          Product
        </div>
      </div>
      <div className="flex ml-auto space-x-2 items-center">
        <div className="hidden md:block">
          <div className="flex h-8 w-60 rounded-md border cursor-pointer items-center btn-secondary">
            <HiOutlineSearch className="h-4 w-4 mx-2" />
            <div className="text-sm font-['SF Pro Text']">Type / to search</div>
            <div className="flex ml-auto items-center">
              <div className="text-sm font-thin font-['SF Pro Text']">|</div>
              <GoCommandPalette className="h-4 w-4 mx-2 justify-center" />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="text-secondary-foreground text-md font-thin font-['SF Pro Text'] ">
            |
          </div>
        </div>
        <div className="flex items-center justify-center h-8 rounded-md px-2 btn-secondary">
          <IoAdd className="h-5 w-5" />
          <GoTriangleDown className="h-4 w-4" />
        </div>
        <div className="flex items-center justify-center w-8 h-8 rounded-md btn-secondary">
          <GoIssueOpened className="h-4 w-4" />
        </div>
        <div className="flex items-center justify-center w-8 h-8 rounded-md btn-secondary">
          <GoGitPullRequest className="h-4 w-4" />
        </div>
        <div className="flex items-center justify-center w-8 h-8 rounded-md btn-secondary">
          <VscInbox className="h-4 w-4" />
        </div>
        <div className="px-3 py-1.5 justify-start items-center gap-2 inline-flex btn-primary">
          <div className="font-semibold font-['SF Pro Text'] leading-tight">
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
}

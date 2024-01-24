import Link from "next/link";

export function Button() {
  return (
    <div className="bg-white bg-opacity-0 rounded-md border border-gray-400 border-opacity-20 flex-col justify-start items-center gap-2 inline-flex">
      <div className="px-3 py-1.5 justify-start items-center gap-2 inline-flex">
        <div className="text-white font-semibold font-['SF Pro Text'] leading-tight">
          Sign up
        </div>
      </div>
    </div>
  );
}

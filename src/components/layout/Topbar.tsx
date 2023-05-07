import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconNotification, IconSearch } from "../icons";

const Topbar = () => {
  return (
    <div className="bg-grayfc py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-x-[82px] flex-1">
        <Link href="/" className="flex items-center gap-x-3">
          <Image width={173} height={35} src="/logo.png" alt="Yariga" />
        </Link>
        <div className="flex items-center gap-x-2 flex-[0_1_405px] px-[10px] py-[11px] bg-grayf4 rounded-lg">
          <IconSearch></IconSearch>
          <input
            type="text"
            placeholder="Search Property, Customer etc"
            className="bg-transparent outline-none text-xs text-textPrimary w-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-5 flex-shrink-0">
        <span className="flex-shrink-0">
          <IconNotification></IconNotification>
        </span>
        <div className="flex items-center gap-x-[10px] flex-shrink-0">
          <div className="rounded-[20px] object-cover">
            <Image
              width={40}
              height={40}
              src="/profile.png"
              alt="avatar"
            ></Image>
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm text-textPrimary font-semibold">
              Hawkins Maru
            </h1>
            <span className="text-sm">Company Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

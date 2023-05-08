import { sidebarLink } from "@/constants/general.const";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="bg-grayfc py-[25px] px-4">
      <div className="flex flex-col">
        {sidebarLink.length > 0 &&
          sidebarLink.map((item) => (
            <Link
              href={item.path}
              key={item.title}
              className={`flex items-center gap-c10 py-4 px-6 rounded-xl ${
                pathname === item.path
                  ? "bg-primaryColor text-grayfc"
                  : "hover:text-primaryColor"
              }`}
            >
              <span>{item.icon}</span>
              <span className="text-base font-bold">{item.title}</span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;

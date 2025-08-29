"use client";

import Image from "next/image";
import * as React from "react";
import { Menu } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { sidebarData } from "./sidebar.data";
import { useScreen } from "@/lib/hooks/useScreen";

export default function Sidebar() {
  const { isLgUp } = useScreen();
  const [collapsed, setCollapsed] = React.useState(false);

  React.useEffect(() => {
    // only set initial from storage once
    const stored = localStorage.getItem("sidebar:collapsed");
    if (stored !== null) {
      setCollapsed(stored === "1");
    } else {
      // default: collapsed on < lg, expanded on >= lg
      setCollapsed(!isLgUp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <aside
      className={[
        "sticky top-0 flex h-screen flex-col border-r border-white/10 bg-[#0b1f1d]/90 backdrop-blur",
        "transition-[width] duration-200 rounded-tr-2xl",
        collapsed ? "w-16" : "w-72",
      ].join(" ")}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          {isLgUp && !collapsed && (
            <Image
              src="/logos/main.png"
              alt="CarbonScan.ai"
              width={28}
              height={28}
              className="rounded-md"
            />
          )}
          {!collapsed && (
            <span className="truncate text-sm font-semibold text-white">
              CarbonScan.ai
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => setCollapsed((s) => !s)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-white/80 hover:bg-[#2b5f5d]/30"
          title={collapsed ? "Expand" : "Collapse"}
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>

      <nav className="mt-2 flex-1 overflow-y-hidden px-2 pb-4">
        <div className="space-y-1">
          {sidebarData.map((item) => (
            <SidebarItem key={item.label} item={item} collapsed={collapsed} />
          ))}
        </div>
      </nav>

      <div className="border-t border-white/10 px-3 py-3 text-xs text-white/40">
        {!collapsed && <span>© CarbonScan.ai</span>}
      </div>
    </aside>
  );
}

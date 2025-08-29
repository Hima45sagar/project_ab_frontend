"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SidebarItem as Item } from "./sidebar.data";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  item: Item;
  depth?: number;
  collapsed?: boolean;
};

export default function SidebarItem({
  item,
  depth = 0,
  collapsed = false,
}: Props) {
  const pathname = usePathname();
  const isActive = item.href ? pathname.startsWith(item.href) : false;
  const hasChildren = !!item.children?.length;

  const padding = collapsed ? "px-2" : depth === 0 ? "px-3" : "pl-10 pr-3";
  const Icon = item.icon;

  if (!hasChildren) {
    return (
      <Link
        href={item.href ?? "#"}
        className={cn(
          "group flex items-center gap-3 rounded-lg py-2 text-sm transition",
          padding,
          isActive
            ? "bg-[#2b5f5d] text-white"
            : "text-white/90 hover:bg-[#2b5f5d]/20"
        )}
        title={collapsed ? item.label : undefined}
      >
        {Icon && (
          <Icon
            className={cn(
              "h-5 w-5 shrink-0",
              isActive ? "text-white" : "text-white/90"
            )}
          />
        )}
        {!collapsed && <span className="truncate">{item.label}</span>}
      </Link>
    );
  }

  return (
    <AccordionGroup
      label={item.label}
      icon={Icon}
      depth={depth}
      collapsed={collapsed}
      defaultOpen={isActive} // auto-open when active descendant
    >
      {item.children!.map((child) => (
        <SidebarItem
          key={child.label}
          item={child}
          depth={depth + 1}
          collapsed={collapsed}
        />
      ))}
    </AccordionGroup>
  );
}

/* -------------------------- Group (Accordion-like) ------------------------- */

function AccordionGroup({
  label,
  icon: Icon,
  children,
  depth,
  collapsed,
  defaultOpen = false,
}: {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  depth: number;
  collapsed: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className={cn(
          "flex w-full items-center justify-between rounded-lg py-2 text-left text-sm transition",
          collapsed ? "px-2" : depth === 0 ? "px-3" : "pl-3 pr-2",
          "text-white/90 hover:bg-[#2b5f5d]/20"
        )}
        title={collapsed ? label : undefined}
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-5 w-5 shrink-0 text-white/90" />}
          {!collapsed && <span className="truncate">{label}</span>}
        </div>
        {!collapsed && (
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              open ? "rotate-180" : "rotate-0"
            )}
          />
        )}
      </button>

      <AnimatePresence initial={false}>
        {open && !collapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-1 space-y-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

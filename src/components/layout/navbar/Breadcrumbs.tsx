"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const LABELS: Record<string, string> = {
  dashboard: "Dashboard",
  "create-project": "Create Project",
  "my-projects": "My Projects",
  "add-facility": "Add Facility",
  "download-report": "Download Report",
  "raise-a-request": "Raise a Request",
  "notifications-tasks": "Notifications / Tasks",
  "settings-admin": "Settings & Admin",
};

function toLabel(seg: string) {
  if (LABELS[seg]) return LABELS[seg];
  return seg
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const baseHref = "/dashboard";

  let hrefAccumulator = "";

  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm">
      <Link
        href={baseHref}
        className="inline-flex items-center gap-1 rounded-md px-1 py-1.5  hover:bg-[#2b5f5d]/20"
      >
        <Home className="h-4 w-4" />
        <span className="hidden md:inline">Home</span>
      </Link>

      {parts.map((seg, idx) => {
        hrefAccumulator += `/${seg}`;
        const isLast = idx === parts.length - 1;
        const label = toLabel(seg);

        return (
          <div key={hrefAccumulator} className="flex items-center gap-1">
            <span className="text-gray-400">
              <ChevronRight />
            </span>
            {isLast ? (
              <span>{label}</span>
            ) : (
              <Link
                href={hrefAccumulator}
                className="rounded-md px-2 py-1.5 hover:bg-[#2b5f5d]/20"
              >
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}

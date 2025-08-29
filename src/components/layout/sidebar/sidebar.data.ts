import {
    LayoutDashboard,
    FolderPlus,
    FolderKanban,
    Building2,
    FileBarChart,
    Inbox,
    Bell,
    Settings,
} from "lucide-react";

export type SidebarItem = {
    label: string;
    href?: string;
    icon?: React.ComponentType<{ className?: string }>;
    children?: SidebarItem[];
};

export const sidebarData: SidebarItem[] = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        children: [
            { label: "CBAM", href: "/dashboard/cbam" },
            { label: "GHG", href: "/dashboard/ghg" },
        ],
    },
    {
        label: "Create Project",
        icon: FolderPlus,
        children: [
            { label: "Project", href: "/create-project/project" },
            { label: "Dashboard", href: "/create-project/dashboard" },
            { label: "Download report", href: "/create-project/report" },
            { label: "Mange team", href: "/create-project/team" },
            {
                label: "Raise a Request",
                children: [
                    { label: "Data Request", href: "/create-project/request/data" },
                    { label: "Verification Request", href: "/create-project/request/verification" },
                ],
            },
            {
                label: "Notifications / Tasks",
                children: [
                    { label: "Pending data submissions", href: "/create-project/tasks/pending" },
                    { label: "Alerts (missing data, anomalies)", href: "/create-project/tasks/alerts" },
                ],
            },
        ],
    },
    {
        label: "My Projects",
        icon: FolderKanban,
        children: [
            { label: "All Projects (list view with filters)", href: "/projects/all" },
            { label: "Live projects", href: "/projects/live" },
            { label: "Completed projects", href: "/projects/completed" },
        ],
    },
    {
        label: "Add Facility",
        icon: Building2,
        children: [
            { label: "Register Facility (location, type, operations)", href: "/facilities/register" },
            { label: "Organisation structure", href: "/facilities/organisation" },
        ],
    },
    {
        label: "Download report",
        icon: FileBarChart,
        children: [
            { label: "CBAM", href: "/reports/cbam" },
            { label: "GHG", href: "/reports/ghg" },
        ],
    },
    {
        label: "Raise a Request",
        icon: Inbox,
        children: [
            { label: "Data Request", href: "/requests/data" },
            { label: "Verification Request", href: "/requests/verification" },
            { label: "Support Request", href: "/requests/support" },
            { label: "Custom Request", href: "/requests/custom" },
        ],
    },
    {
        label: "Notifications / Tasks",
        icon: Bell,
        children: [
            { label: "Pending data submissions", href: "/notifications/pending" },
            { label: "Alerts (missing data, anomalies)", href: "/notifications/alerts" },
        ],
    },
    {
        label: "Settings & Admin",
        icon: Settings,
        children: [
            { label: "Company Profile", href: "/settings/company" },
            { label: "Change password", href: "/settings/password" },
        ],
    },
];

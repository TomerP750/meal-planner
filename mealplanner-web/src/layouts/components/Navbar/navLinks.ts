import { BookOpen, CalendarDays, ClipboardList, LayoutDashboard, type LucideIcon } from "lucide-react";

export type NavLinkItem = {
    to: string;
    label: string;
    icon: LucideIcon;
};

export const navLinks: readonly NavLinkItem[] = [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/planner", label: "Planner", icon: CalendarDays },
    { to: "/recipes", label: "Recipes", icon: BookOpen },
    { to: "/grocery-list", label: "Grocery List", icon: ClipboardList },
];

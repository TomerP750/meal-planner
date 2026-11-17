import { MenuIcon, UserIcon } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { navLinks } from "./navLinks";
import logo from "../../../assets/logo.webp";
import { Menu } from "../../../shared/ui/Menu/Menu";

const navLinkClassName =
    "relative inline-flex items-center gap-2 text-base tracking-wide text-foreground transition-colors duration-200 hover:text-primary-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-strong after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-center after:bg-primary-strong after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none";

export function Navbar() {
    const navigate = useNavigate();

    const menuItems = navLinks.map(({ to, label, icon }) => ({
        id: to,
        label,
        icon,
        onSelect: () => navigate(to),
    }));

    return (
        <nav
            aria-label="Main navigation"
            className="relative border-t-4 border-t-primary border-b border-b-border/10 bg-background text-foreground shadow-navbar"
        >
            <div className="mx-auto flex min-h-20 max-w-8xl items-center justify-between gap-4 px-4 py-3 sm:min-h-24 sm:gap-6 sm:px-8 sm:py-5 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:px-12">
                <NavLink to={"/"} className="shrink-0 lg:justify-self-start">
                    <img src={logo} alt="Meal Planner home" className="h-12 w-auto sm:h-20" />
                </NavLink>

                <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
                    {navLinks.map(({ to, label, icon: Icon }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `${navLinkClassName} ${isActive ? "font-semibold text-primary-strong after:scale-x-100" : "after:scale-x-0"}`
                                }
                            >
                                <Icon aria-hidden="true" className="shrink-0 text-primary" size={20} strokeWidth={1.5} />
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3 sm:gap-5 lg:justify-self-end">
                    <NavLink to={"/auth/sign-in"} aria-label="Sign in" className="inline-flex size-11 items-center justify-center rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-strong">
                        <UserIcon aria-hidden="true" className="text-primary hover:text-primary-strong" size={30} strokeWidth={1} />
                    </NavLink>

                    <div className="lg:hidden">
                        <Menu
                            trigger={<MenuIcon aria-hidden="true" className="text-primary-strong" size={26} strokeWidth={1.5} />}
                            triggerLabel="Open menu"
                            items={menuItems}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}

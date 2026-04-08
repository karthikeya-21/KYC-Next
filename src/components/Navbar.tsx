"use client";

import { FaCompass, FaHeart, FaHome, FaUser } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isLoggedIn = false;

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: FaHome,
    },
    {
      href: "/explore",
      label: "Explore",
      icon: FaCompass,
    },
    {
      href: "/wishlist",
      label: "Wishlist",
      icon: FaHeart,
    },
  ];

  const authItems = isLoggedIn
    ? [
        {
          href: "/profile",
          label: "Profile",
          icon: FaUser,
        },
      ]
    : [
        {
          href: "/login",
          label: "Login / Register",
          icon: FaUser,
        },
      ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 text-white sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-300/30 bg-gradient-to-br from-amber-300/25 to-zinc-900 text-sm font-semibold text-amber-200 shadow-lg shadow-amber-400/10">
            KYC
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">
              Premium Auto
            </p>
            <p className="text-lg font-semibold tracking-wide text-zinc-100">
              Know Your Car
            </p>
          </div>
        </Link>

        <div className="flex w-full items-center gap-2 overflow-x-auto rounded-full border border-zinc-800 bg-white/5 p-1.5 text-sm text-zinc-200 lg:w-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 transition ${
                  isActive
                    ? "bg-amber-300 font-medium text-zinc-950 hover:bg-amber-200"
                    : "hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon
                  className={`text-xs ${
                    isActive ? "text-zinc-950" : "text-amber-300"
                  }`}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}

          {authItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 transition ${
                  isActive
                    ? "bg-amber-300 font-medium text-zinc-950 hover:bg-amber-200"
                    : "border border-white/10 font-medium text-zinc-100 hover:border-amber-300/30 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon
                  className={`text-xs ${
                    isActive ? "text-zinc-950" : "text-amber-300"
                  }`}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

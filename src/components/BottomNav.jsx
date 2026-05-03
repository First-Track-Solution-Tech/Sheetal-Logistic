import { Link, useLocation } from "react-router-dom";
import { IoHome, IoDocumentText, IoLocationSharp, IoPricetag } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";

export default function BottomNav() {
  const { pathname } = useLocation();

  const links = [
    { to: "/",        label: "Home",    icon: IoHome },
    { to: "/track",   label: "Track",   icon: IoLocationSharp },
    { to: "/blog",    label: "Blogs",   icon: IoDocumentText },
    { to: "/pricing", label: "Pricing", icon: IoPricetag },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <div className="h-[1.5px] bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 opacity-60" />
      <div
        className="bg-gradient-to-r from-blue-700 via-cyan-600 to-emerald-600"
        style={{ boxShadow: "0 -3px 14px rgba(6,182,212,0.25)" }}
      >
        <div className="flex items-center justify-around px-2 py-2">

          {links.map(({ to, label, icon: Icon }) => {
            const isActive = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className="flex flex-col items-center gap-[2px] px-2 relative"
              >
                {isActive && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-[2.5px] rounded-full bg-amber-400" />
                )}
                <Icon
                  size={20}
                  className={`transition-all duration-200 ${
                    isActive ? "text-white" : "text-white"
                  }`}
                />
                <span
                  className={`text-[10px] leading-tight transition-colors duration-200 ${
                    isActive ? "text-white font-semibold" : "text-white/50 font-medium"
                  }`}
                >
                  {label}
                </span>
              </Link>
            );
          })}

          {/* Sign In — clean pill */}
          <Link
            to="/signin"
            className={`flex flex-col items-center gap-[2px] px-2 relative`}
          >
            {pathname === "/signin" && (
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-[2.5px] rounded-full bg-amber-400" />
            )}
            <RiUserLine
              size={20}
              className={pathname === "/signin" ? "text-white" : "text-white"}
            />
            <span
              className={`text-[10px] leading-tight font-medium ${
                pathname === "/signin" ? "text-white font-semibold" : "text-white/50"
              }`}
            >
              Sign In
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
}
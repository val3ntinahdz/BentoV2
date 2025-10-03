import { Link, useLocation } from "react-router-dom";
import { Home, Users, Settings, LogOut } from "lucide-react";

export const Sidebar = ({ sidebarToggle }) => {
  const location = useLocation();
  
  const menuItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/clients", icon: Users, label: "Clients" },
  ];

  return (
    <div 
      className={`${
        sidebarToggle ? "hidden" : "block"
      } w-64 bg-[#27272a] fixed h-full px-4 py-6 border-r border-neutral-800 transition-all duration-300 flex flex-col`}
    >
      {/* Logo */}
      <div className="mb-8 px-3">
        <h1 className="text-2xl font-onest text-white tracking-tight font-bold">
          bento<span className="text-[#C8E678]">.</span>
        </h1>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-6" />

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg
                    font-onest font-semibold text-sm
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#967be7] text-white shadow-lg shadow-[#967be7]/20"
                        : "text-neutral-400 hover:text-white hover:bg-neutral-800/50"
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer (opcional) */}
      <div className="pt-4 border-t border-neutral-800">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-neutral-400 hover:text-white hover:bg-neutral-800/50 transition-all duration-200 font-onest font-semibold text-sm">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};
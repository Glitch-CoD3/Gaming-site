import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { supabase } from "../lib/config";
import { useAuth } from "../context/AuthContext";


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const navLinkClass = ({ isActive }) =>
    `transition-colors ${isActive
      ? "text-white"
      : "text-gray-400 hover:text-white"
    }`;


  return (
    <header className="sticky top-0 z-50 border-b border-emerald-400/10 bg-[#030505]/90 backdrop-blur-xl">

      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="group flex items-center gap-3"
        >
          {/* Terminal Icon */}
          <div
            className="
            flex h-10 w-10
            items-center justify-center
            border border-emerald-400/30
            bg-emerald-400/[0.04]
            font-mono text-sm
            font-bold text-emerald-400
            transition
            group-hover:border-emerald-400/60
            group-hover:bg-emerald-400/[0.08]
            group-hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]
          "
          >
            &gt;_
          </div>

          {/* Brand */}
          <div className="leading-none">
            <div className="font-mono text-lg font-black tracking-[0.08em] text-white">
              THE
              <span className="text-emerald-400">
                GAMER
              </span>
            </div>

            <div className="mt-1 hidden font-mono text-[8px] uppercase tracking-[0.3em] text-gray-600 sm:block">
            // gaming.network
            </div>
          </div>
        </Link>


        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-8 md:flex">

          <NavLink
            to="/"
            className={navLinkClass}
          >
            <span className="mr-1 text-emerald-500/50">&gt;</span>
            Home
          </NavLink>

          {user && (
            <NavLink
              to="/games"
              className={navLinkClass}
            >
              <span className="mr-1 text-emerald-500/50">&gt;</span>
              Games
            </NavLink>
          )}

          <NavLink
            to="/shopping"
            className={navLinkClass}
          >
            <span className="mr-1 text-emerald-500/50">&gt;</span>
            Product
          </NavLink>

          <NavLink
            to="/support"
            className={navLinkClass}
          >
            <span className="mr-1 text-emerald-500/50">&gt;</span>
            Support
          </NavLink>

          <NavLink
            to="/contact"
            className={navLinkClass}
          >
            <span className="mr-1 text-emerald-500/50">&gt;</span>
            Contact
          </NavLink>

        </nav>


        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden items-center gap-3 md:flex">

          {user ? (
            <>

              {/* Online Status */}
              <div className="mr-2 flex items-center gap-2 border-r border-white/10 pr-5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                  Online
                </span>
              </div>


              {/* Profile */}
              <Link
                to="/profile"
                className="
                group flex items-center gap-2
                border border-white/10
                bg-white/[0.02]
                px-3 py-2
                font-mono text-xs
                text-gray-400
                transition
                hover:border-emerald-400/30
                hover:bg-emerald-400/[0.04]
                hover:text-emerald-400
              "
              >
                <User
                  size={15}
                  className="transition group-hover:text-emerald-400"
                />

                <span>
                  Profile
                </span>
              </Link>


              {/* Logout */}
              <button
                onClick={handleLogout}
                className="
                group flex items-center gap-2
                border border-red-500/20
                bg-red-500/[0.03]
                px-4 py-2
                font-mono text-xs
                uppercase tracking-wider
                text-red-400/70
                transition
                hover:border-red-500/40
                hover:bg-red-500/[0.07]
                hover:text-red-400
              "
              >
                <LogOut
                  size={14}
                  className="transition group-hover:translate-x-0.5"
                />

                Logout
              </button>

            </>
          ) : (
            <>

              {/* Login */}
              <Link
                to="/login"
                className="
                border border-white/10
                px-4 py-2.5
                font-mono text-[10px]
                font-bold uppercase
                tracking-[0.18em]
                text-gray-400
                transition
                hover:border-emerald-400/30
                hover:text-emerald-400
              "
              >
                [ LOGIN ]
              </Link>


              {/* Get Started */}
              <Link
                to="/login"
                className="
                border border-emerald-400/40
                bg-emerald-400
                px-5 py-2.5
                font-mono text-[10px]
                font-bold uppercase
                tracking-[0.18em]
                text-black
                transition
                hover:bg-emerald-300
                hover:shadow-[0_0_25px_rgba(52,211,153,0.2)]
              "
              >
                [ ENTER ]
              </Link>

            </>
          )}

        </div>


        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="
          border border-white/10
          bg-white/[0.02]
          p-2.5
          font-mono
          text-gray-400
          transition
          hover:border-emerald-400/30
          hover:bg-emerald-400/[0.04]
          hover:text-emerald-400
          md:hidden
        "
        >
          {mobileOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div
          className="
          border-t border-emerald-400/10
          bg-[#030505]/95
          px-4 py-5
          backdrop-blur-xl
          md:hidden
        "
        >

          {/* Terminal header */}
          <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">

            <span className="text-emerald-400 font-mono text-sm">
              &gt;_
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray-600">
              gamer@network:~
            </span>

            <span className="ml-auto flex items-center gap-2 font-mono text-[8px] uppercase tracking-wider text-gray-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Online
            </span>

          </div>


          <nav className="flex flex-col gap-1">

            {/* Home */}
            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              className={navLinkClass}
            >
              <span className="mr-2 text-emerald-400">&gt;</span>
              Home
            </NavLink>


            {/* products */}
            {user && (
              <NavLink
                to="/games"
                onClick={() => setMobileOpen(false)}
                className={navLinkClass}
              >
                <span className="mr-2 text-emerald-400">&gt;</span>
                Game
              </NavLink>
            )}

            {/* products */}
            {user && (
              <NavLink
                to="/shopping"
                onClick={() => setMobileOpen(false)}
                className={navLinkClass}
              >
                <span className="mr-2 text-emerald-400">&gt;</span>
                Products
              </NavLink>
            )}


            {/* support */}
            <NavLink
              to="/support"
              onClick={() => setMobileOpen(false)}
              className={navLinkClass}
            >
              <span className="mr-2 text-emerald-400">&gt;</span>
              Support
            </NavLink>

            {/* contact */}
            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className={navLinkClass}
            >
              <span className="mr-2 text-emerald-400">&gt;</span>
              Contact
            </NavLink>


            <div className="my-4 h-px bg-white/10" />


            {/* Auth */}
            {user ? (
              <>

                <Link
                  to="/home"
                  onClick={() => setMobileOpen(false)}
                  className="
                  flex items-center gap-3
                  border border-white/10
                  px-4 py-3
                  font-mono text-xs
                  text-gray-400
                  transition
                  hover:border-emerald-400/30
                  hover:text-emerald-400
                "
                >
                  <User size={16} />
                  Profile
                </Link>


                <button
                  onClick={() => {
                    handleLogout();
                    setMobileOpen(false);
                  }}
                  className="
                  mt-2
                  flex items-center gap-3
                  border border-red-500/20
                  px-4 py-3
                  font-mono text-xs
                  text-red-400/70
                  transition
                  hover:border-red-500/40
                  hover:text-red-400
                "
                >
                  <LogOut size={16} />
                  Logout
                </button>

              </>
            ) : (
              <div className="flex flex-col gap-2">

                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="
                  border border-white/10
                  px-4 py-3
                  text-center
                  font-mono text-[10px]
                  font-bold uppercase
                  tracking-[0.2em]
                  text-gray-400
                  transition
                  hover:border-emerald-400/30
                  hover:text-emerald-400
                "
                >
                  [ LOGIN ]
                </Link>


                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="
                  border border-emerald-400/40
                  bg-emerald-400
                  px-4 py-3
                  text-center
                  font-mono text-[10px]
                  font-bold uppercase
                  tracking-[0.2em]
                  text-black
                  transition
                  hover:bg-emerald-300
                "
                >
                  [ ENTER NETWORK ]
                </Link>

              </div>
            )}

          </nav>
        </div>
      )}

    </header>
  );


};

export default Header;
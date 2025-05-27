
"use client";
import { useSession } from 'next-auth/react';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

type SessionUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  isPremium?: boolean;
};

type Session = {
  user?: SessionUser;
};

const Navbar = () => {
  const { data: session } = useSession() as { data: Session };
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="nav flex items-center justify-between ">
        {/* Logo and Name */}
        <div className="flex items-center gap-1">
          <Link href="/" className='flex items-center gap-1'>
          <Image
            src="/assets/icons/logo.png"
            width={120}
            height={120}
            alt="logo"
          />
          
          <p className="nav-logo hidden md:block">
            Right<span className="text-primary">Price</span>
          </p>
          </Link>
                      {session?.user && (
                        <p className="text-sm md:hidden">Hello, {session.user.name}</p>
                      )}
                      {session.user?.isPremium && (
                <span className="ml-2 px-2 py-1 text-xs rounded bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold shadow">
                  PRO
                </span>
              )}

        </div>

        {/* Hamburger Toggle Button (Mobile Only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block h-1 w-6 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-1 w-6 bg-gray-800 rounded my-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-1 w-6 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Desktop Buttons */}
        {session?.user ? (
          <div className="hidden md:flex items-center md:gap-2">
            <p className="text-sm">Hello, {session.user.name}</p>
            <button
              onClick={() => router.push("/pricing")}
              className="ml-2 text-sm w-auto p-4 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-red-500 to-yellow-400 hover:from-red-600 hover:to-yellow-500 transition"
            >
              Pricing
            </button>
            <button
              onClick={() => signOut()}
              className="text-sm ml-2 w-auto p-4 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-red-500 to-yellow-400 hover:from-red-600 hover:to-yellow-500 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="hidden md:block text-blue-500"
          >
            Login with Google
          </button>
        )}

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-20 right-4 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 md:hidden z-50">
            {session?.user ? (
              <>
                <button
                  onClick={() => {
                    router.push("/pricing");
                    setMenuOpen(false);
                  }}
                  className="text-sm w-auto p-4 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-red-500 to-yellow-400 hover:from-red-600 hover:to-yellow-500 transition"
                >
                  Pricing
                </button>
                <button
                  onClick={() => {
                    signOut();
                    setMenuOpen(false);
                  }}
                  className="text-sm w-auto p-4 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-red-500 to-yellow-400 hover:from-red-600 hover:to-yellow-500 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  signIn("google");
                  setMenuOpen(false);
                }}
                className="text-blue-500"
              >
                Login with Google
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
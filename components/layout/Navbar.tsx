'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  ChevronRight,
  Home,
  LogOut,
  ShoppingBag,
  Users,
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { Logo } from '../reusable/Logo';
import { useAuth } from '@/features/auth/context/AuthContext';

export function Navbar({ overlay = false }: { overlay?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    if (isProfileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isProfileOpen]);

  const isHomeActive = pathname === '/';
  const isCoursesActive = pathname.startsWith('/courses');
  const isCreatorsActive = pathname.startsWith('/creators');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/courses', label: 'Courses', icon: BookOpen },
    { href: '/creators', label: 'Creators', icon: Users },
    { href: '/courses', label: 'Course Bag', icon: ShoppingBag, badge: '0' },
  ];

  return (
    <>
      <header
        className={`z-50 w-full text-white transition-all duration-300 ease-in-out ${
          overlay ? 'fixed inset-x-0 top-0' : 'sticky top-0'
        } ${
          isScrolled
            ? 'h-[72px] bg-brand-blue/80 backdrop-blur-md border-b border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-md:h-[64px]'
            : overlay
              ? 'h-[110px] bg-transparent border-b border-transparent max-md:h-[78px]'
              : 'h-[110px] bg-brand-blue border-b border-transparent max-md:h-[78px]'
        }`}
      >
        <div className="relative mx-auto flex h-full w-[min(90%,1200px)] items-center justify-between gap-3 max-[420px]:w-[94%] max-[420px]:gap-2">
          <Logo className="shrink-0 text-2xl font-extrabold tracking-[-.04em] text-white max-md:text-[19px] max-[420px]:gap-1 max-[420px]:text-[15px] max-[420px]:[&_svg]:size-6" />

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden shrink-0 items-center gap-7 whitespace-nowrap text-[15px] md:flex [&_a]:focus-visible:rounded-sm [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-brand-lime"
          >
            <Link
              href="/"
              className={`transition-colors ${
                isHomeActive
                  ? 'text-brand-lime font-bold'
                  : 'text-white hover:opacity-75 transition-opacity'
              }`}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className={`transition-colors ${
                isCoursesActive
                  ? 'text-brand-lime font-bold'
                  : 'text-white hover:opacity-75 transition-opacity'
              }`}
            >
              Courses
            </Link>
            <Link
              href="/creators"
              className={`max-[420px]:hidden transition-colors ${
                isCreatorsActive
                  ? 'text-brand-lime font-bold'
                  : 'text-white hover:opacity-75 transition-opacity'
              }`}
            >
              Creators
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden shrink-0 items-center gap-6 whitespace-nowrap text-[15px] md:flex [&_a]:transition-opacity [&_a]:hover:opacity-75 [&_a]:focus-visible:rounded-sm [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-brand-lime">
            {isAuthenticated && user ? (
              <div ref={profileRef} className="relative flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 py-1 pl-1 pr-3 text-white transition-all hover:bg-white/20 active:scale-95 focus-visible:outline-brand-lime"
                  aria-label="User account menu"
                  aria-expanded={isProfileOpen}
                >
                  <div className="relative size-8 overflow-hidden rounded-full bg-brand-lime font-bold text-brand-black flex items-center justify-center text-xs">
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.name} className="size-full object-cover" />
                    ) : (
                      user.name.slice(0, 2).toUpperCase()
                    )}
                  </div>
                  <span className="text-sm font-semibold tracking-tight">{user.name.split(' ')[0]}</span>
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 rounded-2xl bg-white p-2 text-brand-black shadow-2xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-150 z-50">
                    <div className="px-3 py-2.5 border-b border-gray-100">
                      <p className="text-xs font-bold text-gray-900 truncate">{user.name}</p>
                      <p className="text-[11px] text-gray-500 truncate">{user.email}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setIsProfileOpen(false);
                      }}
                      className="mt-1 flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
                    >
                      <LogOut size={14} /> Sign Out
                    </button>
                  </div>
                )}

                <Link
                  href="/courses"
                  aria-label="Course bag"
                  className="grid place-items-center max-md:hidden"
                >
                  <ShoppingBag size={19} />
                </Link>
              </div>
            ) : (
              <>
                <Link href="/login">Sign In</Link>
                <Link href="/register">Join Us</Link>
                <Link
                  href="/courses"
                  aria-label="Course bag"
                  className="grid place-items-center max-md:hidden"
                >
                  <ShoppingBag size={19} />
                </Link>
              </>
            )}
          </div>

          {/* Mobile Right Controls: Bag + Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/courses"
              aria-label="Course bag"
              className="grid size-10 place-items-center rounded-xl text-white transition-colors hover:bg-white/10 active:scale-95"
            >
              <ShoppingBag size={20} />
            </Link>

            <button
              type="button"
              className="relative flex size-10 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-200 hover:bg-white/20 active:scale-95 focus-visible:outline-2 focus-visible:outline-brand-lime"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen(true)}
            >
              <div className="relative flex h-3.5 w-4.5 flex-col justify-between">
                <span className="h-0.5 w-full rounded-full bg-white" />
                <span className="h-0.5 w-full rounded-full bg-white" />
                <span className="h-0.5 w-full rounded-full bg-white" />
              </div>
            </button>
          </div>
        </div>
      </header>

      
      <div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-[60] flex h-[100dvh] w-full flex-col bg-brand-blue text-white md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-3'
        }`}
      >
        {/* Mobile Header Bar: Identical Logo, Bag, and Animated X close button */}
        <div className="mx-auto flex h-[78px] w-[min(90%,1200px)] shrink-0 items-center justify-between gap-3 max-[420px]:w-[94%] max-[420px]:gap-2 border-b border-white/10">
          <Logo
            onClick={() => setIsMenuOpen(false)}
            className="shrink-0 text-2xl font-extrabold tracking-[-.04em] text-white max-md:text-[19px] max-[420px]:gap-1 max-[420px]:text-[15px] max-[420px]:[&_svg]:size-6"
          />

          <div className="flex items-center gap-2">
            <Link
              href="/courses"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Course bag"
              className="grid size-10 place-items-center rounded-xl text-white transition-colors hover:bg-white/10 active:scale-95"
            >
              <ShoppingBag size={20} />
            </Link>

            <button
              type="button"
              className="relative flex size-10 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-200 hover:bg-white/20 active:scale-95 focus-visible:outline-2 focus-visible:outline-brand-lime"
              aria-label="Close navigation menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="relative flex h-3.5 w-4.5 flex-col justify-between">
                <span className="h-0.5 w-full rounded-full bg-white translate-y-[6px] rotate-45" />
                <span className="h-0.5 w-full rounded-full bg-white opacity-0" />
                <span className="h-0.5 w-full rounded-full bg-white -translate-y-[6px] -rotate-45" />
              </div>
            </button>
          </div>
        </div>

  
        <div className="mx-auto flex w-[min(90%,1200px)] flex-1 flex-col justify-between overflow-y-auto py-6 pb-10 max-[420px]:w-[94%]">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    transitionDelay: isMenuOpen ? `${(index + 1) * 45}ms` : '0ms',
                  }}
                  className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-base transition-all duration-300 active:scale-[0.98] ${
                    isActive
                      ? 'bg-white/10 text-brand-lime font-bold'
                      : 'text-white/90 font-medium hover:bg-white/10 hover:text-white'
                  } ${
                    isMenuOpen
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-3 opacity-0'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`grid size-9 place-items-center rounded-lg transition-colors ${
                        isActive
                          ? 'bg-brand-lime text-brand-black'
                          : 'bg-white/10 text-white group-hover:bg-white/20'
                      }`}
                    >
                      <Icon size={18} />
                    </span>
                    <span className={isActive ? 'text-brand-lime font-bold' : ''}>
                      {link.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {link.badge ? (
                      <span className="rounded-full bg-brand-lime px-2.5 py-0.5 text-xs font-semibold text-brand-black">
                        {link.badge}
                      </span>
                    ) : null}
                    <ChevronRight
                      size={18}
                      className="text-white/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div
            style={{
              transitionDelay: isMenuOpen ? '250ms' : '0ms',
            }}
            className={`mt-6 border-t border-white/10 pt-5 transition-all duration-300 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
          >
            {isAuthenticated && user ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">
                  <div className="relative size-10 overflow-hidden rounded-full bg-brand-lime font-bold text-brand-black flex items-center justify-center text-sm">
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.name} className="size-full object-cover" />
                    ) : (
                      user.name.slice(0, 2).toUpperCase()
                    )}
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-semibold text-white truncate text-sm">{user.name}</p>
                    <p className="text-xs text-white/60 truncate">{user.email}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-rose-500/20 py-3 text-sm font-semibold text-rose-300 transition-colors hover:bg-rose-500/30"
                >
                  <LogOut size={16} /> Sign Out
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center rounded-xl border border-white/20 bg-white/5 py-3.5 text-[15px] font-medium text-white transition-all duration-200 hover:bg-white/15 hover:border-white/30 active:scale-[0.98]"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center rounded-xl bg-brand-lime py-3.5 text-[15px] font-semibold text-brand-black shadow-lg shadow-brand-lime/20 transition-all duration-200 hover:brightness-105 active:scale-[0.98]"
                >
                  Join Us
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

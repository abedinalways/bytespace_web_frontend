'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navColumnOne = [
  { label: 'Featured Courses', href: '/courses' },
  { label: 'Featured Categories', href: '/courses' },
  { label: 'Business', href: '/courses' },
  { label: 'IT', href: '/courses' },
  { label: 'Design', href: '/courses' },
];

const navColumnTwo = [
  { label: 'Development', href: '/courses' },
  { label: 'Marketing', href: '/courses' },
  { label: 'Photography', href: '/courses' },
  { label: 'Finance', href: '/courses' },
  { label: 'Sport', href: '/courses' },
];

const navColumnThree = [
  { label: 'Become a Creator', href: '/creators' },
  { label: 'Affiliate Program', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Help', href: '#' },
  { label: 'About', href: '#' },
];

export function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname === '/register' || pathname === '/login') {
    return null;
  }

  return (
    <footer className="w-full shrink-0 bg-white dark:bg-card border-t border-gray-100 dark:border-border/60 text-brand-black dark:text-foreground pt-12 sm:pt-14 lg:pt-16 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Newsletter + 3 Columns Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16 xl:gap-24">
          {/* Left Column: Logo & Newsletter */}
          <div className="flex flex-col max-w-md w-full">
            {/* Brand Logo using footer SVGs */}
            <Link href="/" className="inline-flex items-center gap-2.5 w-fit">
              <Image
                src="/images/footer/logo.svg"
                alt="ByteSpace Logo"
                width={29}
                height={32}
                className="h-7 sm:h-8 w-auto object-contain"
              />
              <Image
                src="/images/footer/ByteSpace.svg"
                alt="ByteSpace"
                width={133}
                height={21}
                className="h-4.5 sm:h-5 w-auto object-contain dark:invert"
              />
            </Link>

            <p className="text-xs sm:text-sm lg:text-[14.5px] text-brand-gray mt-4 mb-5 leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input + Search Button */}
            <form
              onSubmit={e => e.preventDefault()}
              className="flex items-center gap-2.5 sm:gap-3 w-full max-w-md"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 rounded-full border border-gray-300 dark:border-border/80 px-4 sm:px-5 py-2.5 text-xs sm:text-sm text-brand-black dark:text-foreground bg-transparent placeholder:text-gray-400 focus:outline-none focus:border-brand-blue transition-colors"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-brand-lime hover:bg-[#c2e81d] active:scale-95 text-brand-black font-semibold text-xs sm:text-sm px-6 sm:px-7 py-2.5 transition-all shadow-xs cursor-pointer text-center shrink-0"
              >
                Search
              </button>
            </form>

            {/* Disclaimer */}
            <p className="text-[10px] sm:text-xs text-brand-gray mt-3 max-w-sm leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our
              company.
            </p>
          </div>

          {/* Right Columns: Always 3 clean symmetrical columns */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 w-full lg:w-auto">
            {/* Column 1 */}
            <div className="flex flex-col gap-2.5 sm:gap-3.5">
              {navColumnOne.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs sm:text-sm lg:text-[14.5px] text-brand-black dark:text-foreground hover:text-brand-blue transition-colors py-0.5"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2.5 sm:gap-3.5">
              {navColumnTwo.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs sm:text-sm lg:text-[14.5px] text-brand-black dark:text-foreground hover:text-brand-blue transition-colors py-0.5"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-2.5 sm:gap-3.5">
              {navColumnThree.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs sm:text-sm lg:text-[14.5px] text-brand-black dark:text-foreground hover:text-brand-blue transition-colors py-0.5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200/80 dark:border-border/80 mt-10 sm:mt-12 lg:mt-14 pt-6 sm:pt-7">
          {/* Bottom Bar: Copyright + Legal Links */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-brand-gray text-center sm:text-left">
            <p className="text-[11px] sm:text-xs lg:text-sm">
              © {currentYear} ByteSpace. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2 text-[11px] sm:text-xs lg:text-sm">
              <Link
                href="#"
                className="hover:text-brand-black dark:hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-brand-black dark:hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:text-brand-black dark:hover:text-foreground transition-colors"
              >
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

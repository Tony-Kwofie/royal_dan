"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/locations", label: "Our Locations" },
    { href: "/contact", label: "Contact Us" },
];

export default function SiteHeader({ activePath = "/" }: { activePath?: string }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-4">
                <Link
                    href="/"
                    aria-label="Royal-Dan Chemical Pharmacy homepage"
                    onClick={() => setMenuOpen(false)}
                    className="min-w-0 shrink"
                >
                    <Image
                        src="/images/Royal dan.png"
                        alt="Royal-Dan Chemical Pharmacy"
                        width={280}
                        height={100}
                        priority
                        className="h-auto w-32 object-contain sm:w-44"
                    />
                </Link>

                <nav
                    aria-label="Main navigation"
                    className="hidden items-center gap-6 text-sm font-medium lg:flex"
                >
                    {links.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={activePath === item.href ? "page" : undefined}
                            className={
                                activePath === item.href
                                    ? "font-semibold text-blue-900"
                                    : "transition hover:text-green-700"
                            }
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex shrink-0 items-center gap-2">
                    <Link
                        href="/locations"
                        className="hidden rounded-full bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800 sm:inline-flex"
                    >
                        Find a Shop
                    </Link>
                    <button
                        type="button"
                        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-blue-950 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 lg:hidden"
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={menuOpen}
                        aria-controls="royal-dan-mobile-navigation"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? (
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M18 6 6 18M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <nav
                    id="royal-dan-mobile-navigation"
                    aria-label="Mobile navigation"
                    className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-lg lg:hidden"
                >
                    <ul className="mx-auto max-w-7xl space-y-1">
                        {links.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    aria-current={activePath === item.href ? "page" : undefined}
                                    onClick={() => setMenuOpen(false)}
                                    className={`block rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-slate-50 hover:text-green-700 ${activePath === item.href
                                        ? "bg-blue-50 text-blue-900"
                                        : "text-slate-700"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2">
                            <Link
                                href="/locations"
                                onClick={() => setMenuOpen(false)}
                                className="flex min-h-12 items-center justify-center rounded-full bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
                            >
                                Find a Shop
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

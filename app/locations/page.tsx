
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Locations | Royal Dan Limited",
    description:
        "Find Royal Dan Limited's medicine shops in Abokobi Boi and Comet Estate, Greater Accra, Ghana. View addresses, GhanaPost GPS digital addresses, opening hours and directions.",
    openGraph: {
        title: "Our Locations | Royal Dan Limited",
        description:
            "Visit Royal Dan Limited at Abokobi Boi or Comet Estate. Find our shop addresses, GhanaPost GPS codes and opening hours.",
        type: "website",
        images: [
            {
                url: "/images/royal-dan-location.png",
                width: 1728,
                height: 972,
                alt: "Royal Dan Limited medicine shop",
            },
        ],
    },
};

const locations = [
    {
        name: "Comet Estate Branch",
        area: "Comet Estate, Greater Accra",
        address: "Tigo Poll, Comet Estate, Greater Accra Region, Ghana",
        gps: "GE-123-5146",
        hours: "Monday – Sunday",
        time: "7:00 AM – 9:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=GE-123-5146%2C%20Ghana",
    },
    {
        name: "Abokobi Branch",
        area: "Abokobi Boi, Greater Accra",
        address: "Quist Town Street, Abokobi Boi, Greater Accra Region, Ghana",
        gps: "GE-043-9602",
        hours: "Monday – Sunday",
        time: "7:00 AM – 9:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=GE-043-9602%2C%20Ghana",
    },
];

export default function LocationsPage() {
    return (
        <main className="min-h-screen bg-white text-slate-800">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
                    <Link href="/" aria-label="Royal Dan Limited homepage">
                        <Image
                            src="/images/Royal dan.png"
                            alt="Royal Dan Limited"
                            width={280}
                            height={100}
                            priority
                            className="h-auto w-36 object-contain sm:w-48"
                        />
                    </Link>

                    <nav
                        aria-label="Main navigation"
                        className="hidden items-center gap-6 text-sm font-medium lg:flex"
                    >
                        <Link href="/" className="transition hover:text-green-700">
                            Home
                        </Link>
                        <Link href="/about" className="transition hover:text-green-700">
                            About Us
                        </Link>
                        <Link href="/services" className="transition hover:text-green-700">
                            Our Services
                        </Link>
                        <Link
                            href="/locations"
                            aria-current="page"
                            className="text-blue-900"
                        >
                            Our Locations
                        </Link>
                        <Link href="/contact" className="transition hover:text-green-700">
                            Contact Us
                        </Link>
                    </nav>

                    <Link
                        href="/contact"
                        className="shrink-0 rounded-full bg-green-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-800 sm:px-5"
                    >
                        Contact Us
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:py-24">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            Find us near you
                        </p>

                        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
                            Two locations.
                            <span className="block text-green-700">
                                Here to serve you.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            Find your nearest Royal Dan medicine shop in Greater Accra.
                            Use our street addresses and GhanaPost GPS digital addresses to
                            help plan your visit.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#shop-locations"
                                className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-900 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
                            >
                                View Our Shops
                                <span className="ml-2" aria-hidden="true">
                                    ↓
                                </span>
                            </a>

                            <Link
                                href="/services"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 font-semibold text-blue-950 transition hover:border-green-600 hover:text-green-800"
                            >
                                Explore Our Services
                            </Link>
                        </div>

                        <div className="mt-10 grid max-w-md grid-cols-2 gap-4 border-t border-slate-200 pt-6">
                            <div>
                                <p className="text-2xl font-bold text-blue-950">2</p>
                                <p className="mt-1 text-sm text-slate-600">
                                    Customer-facing shops
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-blue-950">7 days</p>
                                <p className="mt-1 text-sm text-slate-600">
                                    Open every week
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-950/10">
                        <Image
                            src="/images/royal-dan-location.png"
                            alt="A staff member assisting a customer in a modern medicine shop"
                            width={1728}
                            height={972}
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="h-full min-h-[280px] w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Locations */}
            <section
                id="shop-locations"
                className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 sm:px-8 lg:py-24"
            >
                <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                        Our branches
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                        Find your Royal Dan shop.
                    </h2>

                    <p className="mt-5 leading-8 text-slate-600">
                        Both branches are open daily from 7:00 AM to 9:00 PM. Use the
                        GhanaPost GPS address shown for each location when planning your
                        journey.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                    {locations.map((location) => (
                        <article
                            key={location.name}
                            className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-green-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-8"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-900">
                                    <span aria-hidden="true">⌖</span>
                                </div>

                                <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-800">
                                    Open daily
                                </span>
                            </div>

                            <p className="mt-6 text-sm font-medium text-green-700">
                                {location.area}
                            </p>

                            <h3 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl">
                                {location.name}
                            </h3>

                            <div className="mt-7 space-y-5">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                        Street address
                                    </p>
                                    <p className="mt-2 leading-7 text-slate-700">
                                        {location.address}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-green-100 bg-green-50/70 p-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-green-800">
                                        GhanaPost GPS digital address
                                    </p>

                                    <p className="mt-2 text-2xl font-bold tracking-wide text-blue-950">
                                        {location.gps}
                                    </p>

                                    <p className="mt-2 text-xs leading-5 text-slate-600">
                                        Use this digital address to help identify the branch.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                        Opening hours
                                    </p>
                                    <p className="mt-2 font-semibold text-blue-950">
                                        {location.hours}
                                    </p>
                                    <p className="mt-1 text-sm text-slate-600">
                                        {location.time}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row">
                                <a
                                    href={location.map}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                                >
                                    Open in Google Maps
                                    <span className="ml-2" aria-hidden="true">
                                        ↗
                                    </span>
                                </a>

                                <a
                                    href={`https://www.google.com/search?q=${encodeURIComponent(
                                        `GhanaPost GPS ${location.gps}`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-blue-950 transition hover:border-green-600 hover:text-green-800"
                                >
                                    Verify GPS address
                                    <span className="ml-2" aria-hidden="true">
                                        ↗
                                    </span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Visit information */}
            <section className="bg-slate-50 py-16 sm:py-20">
                <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            Plan your visit
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                            Your visit starts here.
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Choose the branch that is most convenient for you. For specific
                            medicines or health testing services, contact us to confirm
                            availability at your preferred location before travelling.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 font-bold text-green-800">
                                    1
                                </span>
                                <div>
                                    <h3 className="font-bold text-blue-950">
                                        Choose your branch
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Select Abokobi Boi or Comet Estate.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 font-bold text-green-800">
                                    2
                                </span>
                                <div>
                                    <h3 className="font-bold text-blue-950">
                                        Use the digital address
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Enter the branch's GhanaPost GPS code in your navigation
                                        or address lookup service.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 font-bold text-green-800">
                                    3
                                </span>
                                <div>
                                    <h3 className="font-bold text-blue-950">
                                        Visit during opening hours
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Both branches are open from 7:00 AM to 9:00 PM, Monday
                                        through Sunday.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-950 px-5 py-16 sm:px-8 sm:py-20">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                            Need assistance?
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                            We are happy to help.
                        </h2>

                        <p className="mt-4 leading-7 text-blue-100">
                            Explore our services or contact Royal Dan Limited with general
                            questions about visiting our branches.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/services"
                            className="inline-flex min-h-12 items-center justify-center rounded-full bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-500"
                        >
                            Explore Services
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white">
                <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2">
                    <div>
                        <Link href="/" aria-label="Royal Dan Limited homepage">
                            <Image
                                src="/images/Royal dan.png"
                                alt="Royal Dan Limited"
                                width={240}
                                height={90}
                                className="h-auto w-40 object-contain"
                            />
                        </Link>

                        <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                            Royal Dan Limited operates medicine shops at Abokobi Boi and
                            Comet Estate in Greater Accra, Ghana.
                        </p>
                    </div>

                    <div className="md:justify-self-end">
                        <h2 className="font-bold text-blue-950">Explore</h2>

                        <ul className="mt-4 space-y-3 text-sm text-slate-600">
                            <li>
                                <Link className="hover:text-green-700" href="/about">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-green-700" href="/services">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-green-700"
                                    href="/locations"
                                    aria-current="page"
                                >
                                    Our Locations
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-green-700" href="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-100">
                    <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                        <p>© 2026 Royal Dan Limited. All rights reserved.</p>
                        <p>Greater Accra Region, Ghana</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}

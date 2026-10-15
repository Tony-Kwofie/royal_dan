import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const siteName = "Royal-Dan Chemical Pharmacy";

export const metadata: Metadata = {
    title: `Our Locations | ${siteName}`,
    description:
        "Find Royal-Dan Chemical Pharmacy's OTC medicine shops in Abokobi Boi and Comet Estate, and the central office at Wallace Street, Greater Accra, Ghana.",
    openGraph: {
        title: `Our Locations | ${siteName}`,
        description:
            "Visit our OTC medicine shops in Abokobi Boi and Comet Estate or contact our central office at Wallace Street, Comet Estate.",
        type: "website",
        images: [
            {
                url: "/images/royal-dan-location.png",
                width: 1728,
                height: 972,
                alt: "Royal-Dan Chemical Pharmacy location",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `Our Locations | ${siteName}`,
        description:
            "Find Royal-Dan Chemical Pharmacy's medicine shops in Abokobi Boi and Comet Estate, Greater Accra, Ghana.",
        images: ["/images/royal-dan-location.png"],
    },
};

const shops = [
    {
        name: "Abokobi Boi Shop",
        area: "Abokobi Boi, Greater Accra",
        address: "Quist Town Street, Abokobi Boi, Greater Accra Region, Ghana",
        hours: "Monday – Sunday",
        time: "7:00 AM – 9:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=Quist%20Town%20Street%2C%20Abokobi%20Boi%2C%20Ghana",
    },
    {
        name: "Comet Estate Shop",
        area: "Comet Estate, Greater Accra",
        address: "Tigo Poll, Comet Estate, Greater Accra Region, Ghana",
        hours: "Monday – Sunday",
        time: "7:00 AM – 9:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=Tigo%20Poll%2C%20Comet%20Estate%2C%20Ghana",
    },
];

const centralOffice = {
    name: "Central Office",
    area: "Comet Estate, Greater Accra",
    address: "Wallace Street, Comet Estate, Greater Accra Region, Ghana",
    hours: "Monday – Saturday",
    time: "8:00 AM – 5:00 PM",
    map: "https://www.google.com/maps/search/?api=1&query=Wallace%20Street%2C%20Comet%20Estate%2C%20Ghana",
};

function LocationDetails({
    address,
    hours,
    time,
}: {
    address: string;
    hours: string;
    time: string;
}) {
    return (
        <div className="mt-7 space-y-5">
            <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Address
                </p>
                <p className="mt-2 leading-7 text-slate-700">{address}</p>
            </div>
            <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Opening hours
                </p>
                <p className="mt-2 font-semibold text-blue-950">{hours}</p>
                <p className="mt-1 text-sm text-slate-600">{time}</p>
            </div>
        </div>
    );
}

export default function LocationsPage() {
    return (
        <main className="min-h-screen bg-white text-slate-800">
            <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
                    <Link href="/" aria-label={`${siteName} homepage`}>
                        <Image
                            src="/images/Royal dan.png"
                            alt={siteName}
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
                        <Link href="/" className="transition hover:text-green-700">Home</Link>
                        <Link href="/about" className="transition hover:text-green-700">About Us</Link>
                        <Link href="/services" className="transition hover:text-green-700">Our Services</Link>
                        <Link href="/locations" aria-current="page" className="text-blue-900">Our Locations</Link>
                        <Link href="/contact" className="transition hover:text-green-700">Contact Us</Link>
                    </nav>

                    <Link
                        href="/contact"
                        className="shrink-0 rounded-full bg-green-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-800 sm:px-5"
                    >
                        <span className="hidden sm:inline">Find a Shop</span>
                        <span className="sm:hidden">Find Shop</span>
                    </Link>
                </div>
            </header>

            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:py-24">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            Find us in Greater Accra
                        </p>
                        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
                            Two medicine shops.
                            <span className="block text-green-700">One central office.</span>
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            Visit our OTC medicine shops at Abokobi Boi and Comet Estate.
                            Our central office is also located at Comet Estate on Wallace Street.
                            Check the relevant opening hours before you visit.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#shop-locations"
                                className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-900 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
                            >
                                View Our Shops <span className="ml-2" aria-hidden="true">↓</span>
                            </a>
                            <a
                                href="#central-office"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 font-semibold text-blue-950 transition hover:border-green-600 hover:text-green-800"
                            >
                                Central Office
                            </a>
                        </div>
                        <div className="mt-10 grid max-w-md grid-cols-2 gap-4 border-t border-slate-200 pt-6">
                            <div>
                                <p className="text-2xl font-bold text-blue-950">2</p>
                                <p className="mt-1 text-sm text-slate-600">Customer-facing medicine shops</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-blue-950">1</p>
                                <p className="mt-1 text-sm text-slate-600">Central office</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-950/10">
                        <Image
                            src="/images/royal-dan-location.png"
                            alt="A staff member assisting a customer in a medicine shop"
                            width={1728}
                            height={972}
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="h-full min-h-[280px] w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section id="shop-locations" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 sm:px-8 lg:py-24">
                <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">Our branches</p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                        Find your nearest medicine shop.
                    </h2>
                    <p className="mt-5 leading-8 text-slate-600">
                        Both OTC medicine shops are open every day from 7:00 AM to 9:00 PM.
                        Choose the location that is most convenient for you.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                    {shops.map((shop) => (
                        <article
                            key={shop.name}
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
                            <p className="mt-6 text-sm font-medium text-green-700">{shop.area}</p>
                            <h3 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl">{shop.name}</h3>
                            <LocationDetails address={shop.address} hours={shop.hours} time={shop.time} />
                            <div className="mt-8 border-t border-slate-100 pt-6">
                                <a
                                    href={shop.map}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                                >
                                    Find this shop on Google Maps <span className="ml-2" aria-hidden="true">↗</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="central-office" className="scroll-mt-28 bg-slate-50 py-16 sm:py-20">
                <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">Company office</p>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                            Royal-Dan central office
                        </h2>
                        <p className="mt-5 leading-8 text-slate-600">
                            Our central office is located on Wallace Street in Comet Estate.
                            Please note that this is the company office, separate from our two
                            customer-facing OTC medicine shops.
                        </p>
                    </div>

                    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-2xl text-green-800">
                                <span aria-hidden="true">⌂</span>
                            </div>
                            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-900">
                                Central office
                            </span>
                        </div>
                        <p className="mt-6 text-sm font-medium text-green-700">{centralOffice.area}</p>
                        <h3 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl">{centralOffice.name}</h3>
                        <LocationDetails
                            address={centralOffice.address}
                            hours={centralOffice.hours}
                            time={centralOffice.time}
                        />
                        <div className="mt-8 border-t border-slate-100 pt-6">
                            <a
                                href={centralOffice.map}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                            >
                                Find the central office on Google Maps <span className="ml-2" aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </article>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
                <div className="flex flex-col items-start justify-between gap-7 rounded-3xl bg-blue-950 p-8 sm:p-10 lg:flex-row lg:items-center">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">Need assistance?</p>
                        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">We are happy to help.</h2>
                        <p className="mt-4 leading-7 text-blue-100">
                            Contact Royal-Dan Chemical Pharmacy with general enquiries about our
                            locations, products or services before making your visit.
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

            {/* Shared site footer: keep this structure consistent across every page */}
            <footer className="bg-white">
                <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2">
                    <div>
                        <Link href="/" aria-label="Royal-Dan Chemical Pharmacy homepage">
                            <Image
                                src="/images/Royal dan.png"
                                alt="Royal-Dan Chemical Pharmacy"
                                width={240}
                                height={90}
                                className="h-auto w-40 object-contain"
                            />
                        </Link>
                        <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                            Royal-Dan Chemical Pharmacy operates OTC medicine shops at
                            Abokobi Boi and Comet Estate in Greater Accra, Ghana.
                        </p>
                        <p className="mt-3 text-sm font-semibold text-blue-900">
                            Your Health, Our Concern.
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
                                <Link className="hover:text-green-700" href="/locations" aria-current="page">
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
                        <p>© 2026 Royal-Dan Chemical Pharmacy. All rights reserved.</p>
                        <p>Greater Accra Region, Ghana</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}

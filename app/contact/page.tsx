
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Royal-Dan Chemical Pharmacy",
    description:
        "Get information about Royal-Dan Chemical Pharmacy's medicine shops, health testing services, first aid and everyday essentials. Find our Abokobi Boi and Comet Estate branches in Greater Accra, Ghana.",
    openGraph: {
        title: "Contact Royal-Dan Chemical Pharmacy",
        description:
            "Find your nearest Royal-Dan medicine shop and explore our medicines, essential health checks, first aid and everyday essentials.",
        type: "website",
        images: [
            {
                url: "/images/royal-dan-contact.png",
                width: 1600,
                height: 900,
                alt: "Royal-Dan staff member assisting a customer in a modern medicine shop",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | Royal-Dan Chemical Pharmacy",
        description:
            "Contact Royal-Dan Chemical Pharmacy for medicine shop locations, product availability and service enquiries in Greater Accra, Ghana.",
        images: ["/images/royal-dan-contact.png"],
    },
};

const branches = [
    {
        name: "Comet Estate Branch",
        area: "Comet Estate, Greater Accra",
        address: "Tigo Poll, Comet Estate, Greater Accra Region, Ghana",
        gps: "GE-123-5146",
        hours: "Monday – Sunday, 7:00 AM – 9:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=GE-123-5146%2C%20Ghana",
    },
    {
        name: "Abokobi Branch",
        area: "Abokobi Boi, Greater Accra",
        address: "Quist Town Street, Abokobi Boi, Greater Accra Region, Ghana",
        gps: "GE-043-9602",
        hours: "Monday – Sunday, 7:00 AM – 9:00 PM",
        map: "https://www.google.com/maps/search/?api=1&query=GE-043-9602%2C%20Ghana",
    },
];

const enquiryOptions = [
    {
        number: "01",
        title: "Shop locations",
        description:
            "Find branch addresses, GhanaPost GPS digital addresses and opening hours.",
        href: "/locations",
        linkText: "Find a shop",
    },
    {
        number: "02",
        title: "Medicines and health services",
        description:
            "Explore our medicines, health testing, blood pressure checks, first aid and aftercare.",
        href: "/services",
        linkText: "Explore services",
    },
    {
        number: "03",
        title: "Products and availability",
        description:
            "Review our service information and check availability for a particular product or service before visiting.",
        href: "/locations",
        linkText: "Plan your visit",
    },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white text-slate-800">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
                    <Link href="/" aria-label="Royal-Dan Chemical Pharmacy homepage">
                        <Image
                            src="/images/Royal dan.png"
                            alt="Royal-Dan Chemical Pharmacy"
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
                        <Link href="/locations" className="transition hover:text-green-700">
                            Our Locations
                        </Link>
                        <Link
                            href="/contact"
                            aria-current="page"
                            className="font-semibold text-blue-900"
                        >
                            Contact Us
                        </Link>
                    </nav>

                    <Link
                        href="/locations"
                        className="shrink-0 rounded-full bg-green-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-800 sm:px-5"
                    >
                        <span className="hidden sm:inline">Find a Shop</span>
                        <span className="sm:hidden">Locations</span>
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:py-24">
                    <div className="max-w-2xl">
                        <p className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-white px-4 py-2 text-sm font-semibold text-green-800 shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-green-600" />
                            Contact Royal-Dan Chemical Pharmacy
                        </p>

                        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
                            We are here to{" "}
                            <span className="text-green-700">help.</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            Need information about medicines, health testing, first aid or
                            everyday essentials? Explore our services and find the Royal-Dan
                            shop that is most convenient for your visit.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/locations"
                                className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-900 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
                            >
                                Find a Shop
                                <span className="ml-2" aria-hidden="true">
                                    →
                                </span>
                            </Link>

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
                                    Shop locations
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

                    <div className="relative">
                        <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-green-100/60 blur-2xl" />

                        <div className="overflow-hidden rounded-3xl border border-white shadow-2xl shadow-blue-950/10">
                            <Image
                                src="/images/royal-dan-contact.png"
                                alt="A Royal-Dan staff member assisting a customer at the medicine shop counter"
                                width={1600}
                                height={900}
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="h-auto w-full object-cover"
                            />
                        </div>

                        <div className="relative mx-4 -mt-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:mx-8 sm:p-5">
                            <p className="font-semibold text-blue-950">
                                Your Health, Our Concern.
                            </p>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                Medicines, health services, first aid and everyday essentials.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enquiry options */}
            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
                <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                        How can we help?
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                        Find the information you need.
                    </h2>

                    <p className="mt-5 leading-8 text-slate-600">
                        Choose a topic to learn more, prepare for your visit or find the
                        right Royal-Dan medicine shop.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {enquiryOptions.map((option) => (
                        <article
                            key={option.number}
                            className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-7"
                        >
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 font-bold text-green-800">
                                {option.number}
                            </span>

                            <h3 className="mt-6 text-xl font-bold text-blue-950">
                                {option.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                {option.description}
                            </p>

                            <Link
                                href={option.href}
                                className="mt-5 inline-flex items-center font-semibold text-green-800 transition hover:text-green-900"
                            >
                                {option.linkText}
                                <span className="ml-2" aria-hidden="true">
                                    →
                                </span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            {/* Branch information */}
            <section className="bg-slate-50 py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-8">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <div className="max-w-2xl">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                                Visit our shops
                            </p>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                                We are in Greater Accra.
                            </h2>

                            <p className="mt-5 leading-8 text-slate-600">
                                Both Royal-Dan medicine shopes are open daily from 7:00 AM to
                                9:00 PM. Use the address and GhanaPost GPS code to help
                                identify your preferred shop.
                            </p>
                        </div>

                        <Link
                            href="/locations"
                            className="font-semibold text-green-800 transition hover:text-green-900"
                        >
                            View full location details →
                        </Link>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {branches.map((branch) => (
                            <article
                                key={branch.name}
                                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
                            >
                                <p className="text-sm font-medium text-green-700">
                                    {branch.area}
                                </p>

                                <h3 className="mt-2 text-2xl font-bold text-blue-950">
                                    {branch.name}
                                </h3>

                                <div className="mt-6">
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                        Street address
                                    </p>
                                    <p className="mt-2 leading-7 text-slate-600">
                                        {branch.address}
                                    </p>
                                </div>

                                <div className="mt-5 rounded-xl bg-green-50 p-4">
                                    <p className="text-xs font-bold uppercase tracking-wider text-green-800">
                                        GhanaPost GPS
                                    </p>
                                    <p className="mt-2 text-xl font-bold tracking-wide text-blue-950">
                                        {branch.gps}
                                    </p>
                                </div>

                                <div className="mt-5">
                                    <p className="text-sm font-semibold text-blue-950">
                                        Opening hours
                                    </p>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        {branch.hours}
                                    </p>
                                </div>

                                <a
                                    href={branch.map}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                                >
                                    Get directions
                                    <span className="ml-2" aria-hidden="true">
                                        ↗
                                    </span>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before visiting */}
            <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
                <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-10">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                        Before your visit
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-blue-950 sm:text-3xl">
                        Need a specific medicine or health service?
                    </h2>

                    <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                        Availability of particular products and testing services may vary
                        by location. Review our services and confirm availability before
                        travelling if you need something specific. Prescription medicines
                        and testing are subject to applicable requirements.
                    </p>

                    <Link
                        href="/services"
                        className="mt-6 inline-flex items-center font-semibold text-green-800 hover:text-green-900"
                    >
                        View our services
                        <span className="ml-2" aria-hidden="true">
                            →
                        </span>
                    </Link>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-blue-950 px-5 py-16 sm:px-8 sm:py-20">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                            Royal-Dan Chemical Pharmacy
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                            We look forward to welcoming you.
                        </h2>

                        <p className="mt-4 leading-7 text-blue-100">
                            Find your nearest branch and discover the services available
                            through Royal-Dan Chemical Pharmacy.
                        </p>
                    </div>

                    <Link
                        href="/locations"
                        className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-500"
                    >
                        Find a Shop
                        <span className="ml-2" aria-hidden="true">
                            →
                        </span>
                    </Link>
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
                                <Link className="hover:text-green-700" href="/locations">
                                    Our Locations
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-green-700" href="/contact" aria-current="page">
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


import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products & Services | Royal-Dan Chemical Pharmacy",
    description:
        "Explore Royal-Dan Chemical Pharmacy's over-the-counter medicines, medical supplies, pharmaceutical distribution and mobile clinic services in Ghana.",
    openGraph: {
        title: "Products & Services | Royal-Dan Chemical Pharmacy",
        description:
            "OTC medicines, first aid kits, medical consumables, pharmaceutical distribution and mobile clinic services.",
        type: "website",
        images: [
            {
                url: "/images/hero.png",
                width: 1728,
                height: 972,
                alt: "Royal-Dan Chemical Pharmacy healthcare services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Products & Services | Royal-Dan Chemical Pharmacy",
        description:
            "Explore OTC medicines, medical supplies, pharmaceutical distribution and mobile clinic services in Ghana.",
        images: ["/images/royal-dan-hero-v2.png"],
    },
};

const services = [
    {
        number: "01",
        label: "Medicine retail",
        title: "Over-the-Counter Medicines",
        description:
            "Royal-Dan provides over-the-counter medicines and related healthcare products through our two medicine shops in Greater Accra.",
        items: [
            "Over-the-counter medicines",
            "Related healthcare products",
            "Product availability enquiries",
        ],
        note: "Available through our Abokobi Boi and Comet Estate branches.",
    },
    {
        number: "02",
        label: "Healthcare essentials",
        title: "Medical Supplies",
        description:
            "We supply essential medical products and healthcare consumables to support everyday needs across homes, businesses and institutions.",
        items: [
            "First aid kits",
            "Medical consumables",
            "Basic healthcare supplies",
        ],
        note:
            "Contact our team to discuss your requirements and confirm product availability.",
    },
    {
        number: "03",
        label: "Supply services",
        title: "Pharmaceutical Distribution",
        description:
            "Royal-Dan provides pharmaceutical medicine distribution services to support medicine supply needs for eligible customers and healthcare businesses.",
        items: [
            "Pharmaceutical medicine distribution",
            "Supply enquiries from eligible customers",
            "Healthcare business supply requests",
        ],
        note:
            "All distribution activities and medicine supplies are subject to applicable regulatory requirements.",
    },
    {
        number: "04",
        label: "Community healthcare",
        title: "Mobile Clinic",
        description:
            "Our mobile clinic service is intended to bring healthcare services closer to communities and improve access to convenient healthcare support.",
        items: [
            "Community-focused healthcare access",
            "Mobile healthcare service delivery",
            "Service information and enquiries",
        ],
        note:
            "Specific services, operating schedules and service locations will be published once confirmed.",
    },
];

const audiences = [
    {
        title: "Individuals and households",
        description:
            "Access OTC medicines through our branches and enquire about essential medical supplies for personal and household needs.",
    },
    {
        title: "Businesses and organisations",
        description:
            "Discuss first aid kits and basic healthcare supplies for your workplace, business or organisation.",
    },
    {
        title: "Healthcare providers and institutions",
        description:
            "Contact our team regarding pharmaceutical distribution and healthcare supply requirements, subject to eligibility and applicable regulations.",
    },
];

const phoneNumbers = [
    { label: "0551903525", href: "tel:+233551903525" },
    { label: "0541577775", href: "tel:+233541577775" },
    { label: "0593773174", href: "tel:+233593773174" },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white text-slate-800">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
                    <Link href="/" aria-label="Royal-Dan homepage">
                        <Image
                            src="/images/Royal dan.png"
                            alt="Royal-Dan Chemical Pharmacy"
                            width={280}
                            height={100}
                            priority
                            className="h-auto w-40 object-contain sm:w-48"
                        />
                    </Link>

                    <nav
                        aria-label="Main navigation"
                        className="hidden items-center gap-7 text-sm font-medium lg:flex"
                    >
                        <Link href="/" className="transition hover:text-green-700">
                            Home
                        </Link>
                        <Link href="/about" className="transition hover:text-green-700">
                            About Us
                        </Link>
                        <Link
                            href="/services"
                            aria-current="page"
                            className="text-blue-900"
                        >
                            Our Services
                        </Link>
                        <Link href="/locations" className="transition hover:text-green-700">
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
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:py-28">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            Products & Services
                        </p>

                        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
                            Healthcare supplies and services for everyday needs.
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            From over-the-counter medicines and medical supplies to
                            pharmaceutical distribution and mobile clinic services,
                            Royal-Dan Chemical Pharmacy works to make healthcare products
                            and services more accessible.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="#our-services"
                                className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-900 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
                            >
                                Explore Our Services
                                <span className="ml-3" aria-hidden="true">
                                    ↓
                                </span>
                            </Link>

                            <Link
                                href="/locations"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 font-semibold text-blue-950 transition hover:border-green-600 hover:text-green-800"
                            >
                                Find a Medicine Shop
                            </Link>
                        </div>

                        <p className="mt-6 text-sm leading-6 text-slate-500">
                            Established in 2024 · Serving customers and healthcare supply
                            needs in Ghana.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-green-100/60 blur-2xl" />
                        <div className="overflow-hidden rounded-3xl border border-white shadow-2xl shadow-blue-950/10">
                            <Image
                                src="/images/royal-dan-hero-v2.png"
                                alt="Healthcare customer service at Royal-Dan"
                                width={1728}
                                height={972}
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service categories */}
            <section
                id="our-services"
                className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24"
            >
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                        What we provide
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                        Four areas of healthcare support.
                    </h2>

                    <p className="mt-5 leading-8 text-slate-600">
                        Our services address medicine access, essential healthcare
                        supplies, distribution requirements and community-focused
                        healthcare access.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {services.map((service) => (
                        <article
                            key={service.number}
                            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-9"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 font-bold text-green-800">
                                    {service.number}
                                </span>

                                <span className="text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    {service.label}
                                </span>
                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-blue-950">
                                {service.title}
                            </h3>

                            <p className="mt-4 leading-7 text-slate-600">
                                {service.description}
                            </p>

                            <ul className="mt-6 space-y-3">
                                {service.items.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                                    >
                                        <span
                                            className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600"
                                            aria-hidden="true"
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-7">
                                <div className="rounded-xl bg-slate-50 p-4">
                                    <p className="text-sm leading-6 text-slate-600">
                                        {service.note}
                                    </p>
                                </div>

                                <Link
                                    href="/contact"
                                    className="mt-5 inline-flex items-center font-semibold text-green-800 transition hover:text-green-900"
                                >
                                    Enquire about this service
                                    <span className="ml-2" aria-hidden="true">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Who we serve */}
            <section className="bg-slate-50 py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            Who we serve
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                            Supporting people, businesses and healthcare institutions.
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Whether you need medicines for everyday use, healthcare supplies
                            for an organisation or information about distribution, our team
                            can help you make the appropriate enquiry.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {audiences.map((audience, index) => (
                            <article
                                key={audience.title}
                                className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
                            >
                                <span className="text-sm font-bold tracking-widest text-green-700">
                                    0{index + 1}
                                </span>

                                <h3 className="mt-4 text-xl font-bold text-blue-950">
                                    {audience.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {audience.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service information */}
            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
                <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            Important information
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                            Clear information before you make a request.
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            We want customers and organisations to understand how to enquire
                            about the products and services they need.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-bold text-blue-950">
                                Medicine shops
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                OTC medicines and related healthcare products are provided
                                through our Abokobi Boi and Comet Estate branches. Availability
                                may vary by product.
                            </p>
                            <Link
                                href="/locations"
                                className="mt-4 inline-flex font-semibold text-green-800 hover:text-green-900"
                            >
                                View shop locations →
                            </Link>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-bold text-blue-950">
                                Medical supplies and distribution
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Contact us to discuss supply requirements, quantities and
                                eligibility. Pharmaceutical distribution and medicine supply
                                remain subject to applicable regulatory requirements.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h3 className="font-bold text-blue-950">
                                Mobile clinic services
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Specific mobile clinic services, schedules and locations will
                                be published when confirmed. Contact us for information about
                                future service updates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-blue-950 px-5 py-16 sm:px-8 sm:py-20">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                            Contact Royal-Dan
                        </p>

                        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                            Tell us what you need.
                        </h2>

                        <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                            Contact our team for product availability, first aid kits,
                            medical consumables, pharmaceutical distribution enquiries and
                            mobile clinic service information.
                        </p>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex min-h-12 items-center justify-center rounded-full bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-500"
                            >
                                Contact Us
                                <span className="ml-2" aria-hidden="true">
                                    →
                                </span>
                            </Link>

                            <Link
                                href="/locations"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                Find a Medicine Shop
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
                        <h3 className="text-lg font-bold text-white">
                            Call our team
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-blue-100">
                            Call for general enquiries and product or service information.
                        </p>

                        <div className="mt-5 space-y-4">
                            {phoneNumbers.map((phone) => (
                                <a
                                    key={phone.label}
                                    href={phone.href}
                                    className="flex items-center justify-between gap-4 rounded-xl border border-white/10 px-4 py-3 text-white transition hover:border-green-400"
                                >
                                    <span className="font-semibold">{phone.label}</span>
                                    <span className="text-sm text-green-300">Call →</span>
                                </a>
                            ))}
                        </div>
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
                                <Link className="hover:text-green-700" href="/locations">
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

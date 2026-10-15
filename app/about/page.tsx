
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

const siteName = "Royal-Dan Chemical Pharmacy";

export const metadata: Metadata = {
    title: "About Us | Royal-Dan Chemical Pharmacy",
    description:
        "Learn about Royal-Dan Chemical Pharmacy, established in 2024 to provide OTC medicines, medical supplies, pharmaceutical distribution and mobile clinic services in Ghana.",
    openGraph: {
        title: "About Royal-Dan Chemical Pharmacy",
        description:
            "Accessible medicines, medical consumables, pharmaceutical distribution and mobile healthcare services in Ghana.",
        type: "website",
        images: [
            {
                url: "/images/royal-dan-about.png",
                width: 1728,
                height: 972,
                alt: "Royal-Dan Chemical Pharmacy",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Royal-Dan Chemical Pharmacy",
        description:
            "Learn about Royal-Dan Chemical Pharmacy and our healthcare products and services in Ghana.",
        images: ["/images/royal-dan-about.png"],
    },
};

const businessAreas = [
    {
        number: "01",
        title: "OTC medicines",
        description:
            "Access over-the-counter medicines through our customer-facing medicine shops, with assistance to help customers make informed enquiries about products and availability.",
    },
    {
        number: "02",
        title: "Medical supplies",
        description:
            "We supply first aid kits, medical consumables and essential healthcare supplies for individuals, households, healthcare providers and institutions.",
    },
    {
        number: "03",
        title: "Pharmaceutical distribution",
        description:
            "Our business includes pharmaceutical medicine distribution services to support healthcare supply needs. Product supply is subject to applicable regulatory requirements.",
    },
    {
        number: "04",
        title: "Mobile clinic services",
        description:
            "Our mobile clinic services are designed to bring healthcare closer to communities and make essential healthcare services more accessible.",
    },
    {
        number: "05",
        title: "Health checks and testing",
        description:
            "Our service offering includes malaria, typhoid, pregnancy and HIV testing, blood pressure checks, BMI assessment and other essential tests, subject to service availability and applicable requirements.",
    },
    {
        number: "06",
        title: "First aid and everyday essentials",
        description:
            "We support everyday needs through first aid products, aftercare essentials and selected everyday retail products.",
    },
];

const commitments = [
    {
        number: "01",
        title: "Accessibility",
        description:
            "We aim to make healthcare products and services more convenient for individuals, households and communities.",
    },
    {
        number: "02",
        title: "Dependable service",
        description:
            "We strive to provide helpful customer support and reliable information about products, medical supplies and our services.",
    },
    {
        number: "03",
        title: "Professional care",
        description:
            "We value responsible service, customer safety and the appropriate handling of healthcare-related enquiries.",
    },
];

const contactNumbers = [
    {
        number: "0551903525",
        href: "tel:+233551903525",
    },
    {
        number: "0541577775",
        href: "tel:+233541577775",
    },
    {
        number: "0593773174",
        href: "tel:+233593773174",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-slate-800">
            {/* Shared responsive header: desktop navigation and mobile menu */}
            <SiteHeader activePath="/about" />

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:py-28">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            About Royal-Dan
                        </p>

                        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
                            Healthcare products and services, closer to you.
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            Established in 2024, Royal-Dan Chemical Pharmacy is a
                            healthcare-focused business providing access to over-the-counter
                            medicines, medical supplies, pharmaceutical distribution and
                            mobile clinic services.
                        </p>

                        <p className="mt-4 max-w-xl leading-8 text-slate-600">
                            We serve individuals, households, healthcare providers and
                            institutions, with a focus on accessibility, customer care and
                            dependable service.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/services"
                                className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-900 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
                            >
                                Explore Our Services
                                <span className="ml-3" aria-hidden="true">
                                    →
                                </span>
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 font-semibold text-blue-950 transition hover:border-green-600 hover:text-green-800"
                            >
                                Contact Our Team
                            </Link>
                        </div>

                        <p className="mt-6 text-sm font-medium text-slate-500">
                            Serving communities and healthcare supply needs in Ghana.
                        </p>
                        <p className="mt-3 text-sm font-semibold text-blue-900">
                            Your Health, Our Concern.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-green-100/60 blur-2xl" />

                        <div className="overflow-hidden rounded-3xl border border-white shadow-2xl shadow-blue-950/10">
                            <Image
                                src="/images/royal-dan-about.png"
                                alt="Royal-Dan healthcare team and customer service"
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

            {/* Company profile */}
            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            Who we are
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                            One business with a broader healthcare focus.
                        </h2>

                        <div className="mt-7 inline-flex flex-col rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
                            <span className="text-sm text-slate-500">
                                Year established
                            </span>
                            <span className="mt-1 text-3xl font-bold text-blue-950">
                                2024
                            </span>
                        </div>
                    </div>

                    <div className="space-y-5 text-base leading-8 text-slate-600">
                        <p>
                            Royal-Dan Chemical Pharmacy was established in 2024 with a
                            healthcare-focused mission: to make essential healthcare products
                            and services more accessible and convenient.
                        </p>

                        <p>
                            Our business serves individuals and households through our
                            medicine shops while also supporting healthcare providers and
                            institutions through medical supplies and pharmaceutical
                            distribution services.
                        </p>

                        <p>
                            Our broader service areas include first aid kits, medical
                            consumables and mobile clinic services designed to bring
                            healthcare closer to communities.
                        </p>

                        <p>
                            As we grow, we aim to build a trusted healthcare solutions
                            business recognised for professionalism, reliability and care.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission and vision */}
            <section className="bg-blue-950 py-20 text-white sm:py-24">
                <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
                    <article className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                            Our mission
                        </span>

                        <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                            Making healthcare more accessible.
                        </h2>

                        <p className="mt-5 leading-8 text-blue-100">
                            To make quality healthcare products and services accessible and
                            convenient through reliable medicine supply, medical consumables,
                            pharmaceutical distribution and mobile healthcare services.
                        </p>
                    </article>

                    <article className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                            Our vision
                        </span>

                        <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                            Becoming a trusted healthcare partner.
                        </h2>

                        <p className="mt-5 leading-8 text-blue-100">
                            To become a trusted and recognised healthcare solutions provider
                            in Ghana, serving communities and healthcare institutions with
                            professionalism, reliability and care.
                        </p>
                    </article>
                </div>
            </section>

            {/* Services and business areas */}
            <section className="bg-slate-50 py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            What we do
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                            Healthcare support across multiple service areas.
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Our business combines medicine retail, healthcare supplies,
                            distribution and mobile healthcare services to address a range of
                            customer and institutional needs.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {businessAreas.map((area) => (
                            <article
                                key={area.number}
                                className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-8"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 font-bold text-green-800">
                                    {area.number}
                                </span>

                                <h3 className="mt-6 text-xl font-bold text-blue-950">
                                    {area.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {area.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8">
                        <Link
                            href="/services"
                            className="inline-flex items-center font-semibold text-green-800 transition hover:text-green-900"
                        >
                            View our service information
                            <span className="ml-2" aria-hidden="true">
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* What makes us unique */}
            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            Why Royal-Dan
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                            Connected services. A practical approach to healthcare.
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            We are building a business that supports everyday customers as
                            well as the supply needs of healthcare providers and institutions.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {commitments.map((commitment) => (
                            <article
                                key={commitment.number}
                                className="rounded-2xl border border-slate-200 p-6 transition hover:border-green-200 hover:shadow-lg sm:p-7"
                            >
                                <span className="text-sm font-bold tracking-widest text-green-700">
                                    {commitment.number}
                                </span>

                                <h3 className="mt-4 text-xl font-bold text-blue-950">
                                    {commitment.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {commitment.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact numbers */}
            <section className="border-y border-slate-100 bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            Get in touch
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                            Speak with Royal-Dan.
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Contact us for general enquiries, product availability, medical
                            supply requests, pharmaceutical distribution and mobile clinic
                            services.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
                        {contactNumbers.map((contact) => (
                            <a
                                key={contact.number}
                                href={contact.href}
                                className="group rounded-2xl border border-slate-200 p-6 text-center transition hover:border-green-300 hover:shadow-lg"
                            >
                                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-800 transition group-hover:bg-green-100">
                                    <svg
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 4h4l2 5-2.5 1.5a14 14 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 2-2Z"
                                        />
                                    </svg>
                                </span>

                                <p className="mt-4 text-sm text-slate-500">
                                    Official contact number
                                </p>

                                <p className="mt-2 text-xl font-bold text-blue-950">
                                    {contact.number}
                                </p>

                                <p className="mt-3 text-sm font-semibold text-green-800">
                                    Call now →
                                </p>
                            </a>
                        ))}
                    </div>

                    <p className="mt-6 text-center text-sm leading-6 text-slate-500">
                        WhatsApp and official email details will be published when
                        confirmed.
                    </p>
                </div>
            </section>

            {/* Locations CTA */}
            <section className="bg-blue-950 px-5 py-16 sm:px-8 sm:py-20">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                            Find us
                        </p>

                        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                            Visit a Royal-Dan medicine shop.
                        </h2>

                        <p className="mt-4 leading-8 text-blue-100">
                            Find our current customer-facing shop locations in Greater Accra
                            and check the available location information before visiting.
                        </p>
                    </div>

                    <Link
                        href="/locations"
                        className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-500"
                    >
                        View Shop Locations
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
                                <Link className="hover:text-green-700" href="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-100">
                    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-slate-500 sm:px-8">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <p>© 2026 Royal-Dan Chemical Pharmacy. All rights reserved.</p>
                            <p>Greater Accra Region, Ghana</p>
                        </div>
                        <div className="flex flex-col gap-2 border-t border-slate-100 pt-3 sm:flex-row sm:items-center sm:justify-between">
                            <p>
                                Powered by{" "}
                                <a
                                    href="https://intellixio.tech"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-blue-900 transition hover:text-green-700"
                                >
                                    Intellixio Technologies Limited
                                </a>
                            </p>
                            <a
                                href="mailto:contact@intellixio.tech"
                                className="transition hover:text-green-700"
                            >
                                contact@intellixio.tech
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

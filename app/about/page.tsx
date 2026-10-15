
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Royal Dan Limited | Medicines & Health Services",
    description:
        "Discover Royal Dan Limited, a Ghanaian business providing medicines, first aid, aftercare, mart products and health testing services in Greater Accra.",
    openGraph: {
        title: "About Royal Dan Limited",
        description:
            "Learn about our medicine shops, healthcare services and locations in Greater Accra, Ghana.",
        type: "website",
        images: [
            {
                url: "/images/royal-dan-about.png",
                width: 1728,
                height: 972,
                alt: "Royal Dan medicine shop staff assisting a customer",
            },
        ],
    },
};

const businessAreas = [
    {
        number: "01",
        title: "Medicines",
        description:
            "Our medicine retail offering includes over-the-counter medicines and selected prescription medicines, subject to applicable requirements.",
    },
    {
        number: "02",
        title: "First aid and aftercare",
        description:
            "We provide first aid supplies and aftercare products for everyday care and recovery needs.",
    },
    {
        number: "03",
        title: "Health testing",
        description:
            "Our services include essential health tests and basic checks, including malaria, blood pressure, typhoid, pregnancy and HIV testing, as well as BMI assessment.",
    },
    {
        number: "04",
        title: "Mart and essentials",
        description:
            "Our mart offering extends our everyday retail range with convenient products for customers' daily needs.",
    },
];

const commitments = [
    {
        number: "01",
        title: "Accessible services",
        description:
            "We help customers understand where to find our shops and how to access the services offered at our locations.",
    },
    {
        number: "02",
        title: "Customer support",
        description:
            "We aim to make visits straightforward by providing useful information and assistance with service and product enquiries.",
    },
    {
        number: "03",
        title: "Responsible service",
        description:
            "Medicines and health testing must be provided in line with applicable requirements, with appropriate attention to customer safety and privacy.",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-slate-800">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
                    <Link href="/" aria-label="Royal Dan Limited homepage">
                        <Image
                            src="/images/Royal dan.png"
                            alt="Royal Dan Limited"
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
                        <Link
                            href="/about"
                            aria-current="page"
                            className="text-blue-900"
                        >
                            About Us
                        </Link>
                        <Link href="/services" className="transition hover:text-green-700">
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
                        href="/locations"
                        className="shrink-0 rounded-full bg-green-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-800 sm:px-5"
                    >
                        <span className="hidden sm:inline">Find a Shop</span>
                        <span className="sm:hidden">Locations</span>
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:py-28">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            About Royal Dan
                        </p>

                        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
                            More than medicines. Support for everyday needs.
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            Royal Dan Limited is a Ghanaian business bringing
                            together medicine retail, first aid and aftercare,
                            essential health testing and everyday mart products
                            through our shops in Greater Accra.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/services"
                                className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-900 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
                            >
                                Discover Our Services
                                <span className="ml-3" aria-hidden="true">
                                    →
                                </span>
                            </Link>

                            <Link
                                href="/locations"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 font-semibold text-blue-950 transition hover:border-green-600 hover:text-green-800"
                            >
                                Find Our Shops
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-green-100/60 blur-2xl" />

                        <div className="overflow-hidden rounded-3xl border border-white shadow-2xl shadow-blue-950/10">
                            <Image
                                src="/images/royal-dan-about.png"
                                alt="A staff member assisting a customer inside a modern medicine shop"
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

            {/* Who we are */}
            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            Who we are
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                            A growing Ghanaian business with a practical focus.
                        </h2>
                    </div>

                    <div className="space-y-5 text-base leading-8 text-slate-600">
                        <p>
                            Royal Dan Limited operates customer-facing shops in
                            Greater Accra, Ghana. Our current business brings
                            together medicine retail, healthcare essentials,
                            health testing services and everyday mart products.
                        </p>

                        <p>
                            Our offering includes over-the-counter medicines,
                            selected prescription medicines, first aid and
                            aftercare products, alongside services such as
                            malaria testing, blood pressure checks, typhoid
                            testing, pregnancy testing, HIV testing and BMI
                            assessment.
                        </p>

                        <p>
                            We are building Royal Dan Limited as a company with
                            room to grow beyond its current operations while
                            continuing to serve customers through our existing
                            shops.
                        </p>
                    </div>
                </div>
            </section>

            {/* Business areas */}
            <section className="bg-slate-50 py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            What we do
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                            Different needs, one familiar business.
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Our business combines several related areas to help
                            customers access medicines, basic health checks and
                            everyday essentials.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {businessAreas.map((area) => (
                            <article
                                key={area.number}
                                className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-9"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 font-bold text-green-800">
                                    {area.number}
                                </span>

                                <h3 className="mt-6 text-xl font-bold text-blue-950 sm:text-2xl">
                                    {area.title}
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
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
                            View our full service information
                            <span className="ml-2" aria-hidden="true">
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Our approach */}
            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            Our approach
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                            Clear information. Responsible service.
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            We want customers to understand what we offer,
                            where to find us and what to expect when they visit.
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

            {/* Our locations */}
            <section className="bg-blue-950 px-5 py-16 sm:px-8 sm:py-20">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                            Our presence
                        </p>

                        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                            Serving customers in Greater Accra.
                        </h2>

                        <p className="mt-4 leading-8 text-blue-100">
                            Find our shops at Abokobi Boi and Comet Estate.
                            Both locations are open Monday to Sunday,
                            from 7:00 AM to 9:00 PM.
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

            {/* Footer */}
            <footer className="border-t border-slate-100 bg-white">
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
                            Royal Dan Limited is a Ghanaian business operating
                            medicine shops with health testing services,
                            healthcare essentials and mart products in Greater Accra.
                        </p>
                    </div>

                    <div className="md:justify-self-end">
                        <h2 className="font-bold text-blue-950">Explore</h2>

                        <ul className="mt-4 space-y-3 text-sm text-slate-600">
                            <li>
                                <Link href="/about" className="hover:text-green-700">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-green-700">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations" className="hover:text-green-700">
                                    Our Locations
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-green-700">
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

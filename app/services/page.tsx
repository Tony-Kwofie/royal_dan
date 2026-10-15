
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Royal Dan Limited",
    description:
        "Discover medicines, first aid, aftercare, mart products and health testing services at Royal Dan Limited in Greater Accra, Ghana.",
    openGraph: {
        title: "Our Services | Royal Dan Limited",
        description:
            "Explore medicine retail, essential health tests and everyday products offered by Royal Dan Limited.",
        type: "website",
        images: [
            {
                url: "/images/royal-dan-hero-v2.png",
                width: 1728,
                height: 972,
                alt: "A staff member assisting a customer at a medicine shop",
            },
        ],
    },
};

const serviceCategories = [
    {
        number: "01",
        title: "Over-the-counter medicines",
        description:
            "We provide non-prescription medicines for everyday healthcare needs, with product information to help customers make informed decisions.",
        items: [
            "Non-prescription medicines",
            "Everyday medicine needs",
            "Product information",
        ],
    },
    {
        number: "02",
        title: "Selected prescription medicines",
        description:
            "We provide selected prescription medicines in accordance with applicable prescription, dispensing and regulatory requirements.",
        items: [
            "Selected prescription medicines",
            "Prescription verification where required",
            "Medicine availability enquiries",
        ],
    },
    {
        number: "03",
        title: "First aid and aftercare",
        description:
            "We provide first aid supplies and aftercare essentials to support everyday care and recovery.",
        items: [
            "First aid supplies",
            "Wound-care essentials",
            "Aftercare products",
        ],
    },
    {
        number: "04",
        title: "Mart and everyday essentials",
        description:
            "Our mart offering provides convenient access to everyday essentials alongside our medicine and healthcare products.",
        items: [
            "Everyday essentials",
            "Convenience products",
            "In-store shopping",
        ],
    },
];

const healthTests = [
    {
        number: "01",
        name: "Malaria testing",
        description:
            "Testing services to help identify possible malaria infection, with appropriate follow-up based on the result.",
    },
    {
        number: "02",
        name: "Blood pressure checks",
        description:
            "Blood pressure measurement to help customers understand their readings and when further medical advice may be appropriate.",
    },
    {
        number: "03",
        name: "Typhoid testing",
        description:
            "Typhoid testing services, subject to the applicable testing procedure and clinical requirements.",
    },
    {
        number: "04",
        name: "Pregnancy testing",
        description:
            "Pregnancy testing services for customers seeking information about possible pregnancy.",
    },
    {
        number: "05",
        name: "HIV testing",
        description:
            "HIV testing delivered in accordance with applicable consent, confidentiality and testing requirements.",
    },
    {
        number: "06",
        name: "BMI assessment",
        description:
            "Body mass index assessment using height and weight to provide a basic measure of weight relative to height.",
    },
    {
        number: "07",
        name: "Other essential tests",
        description:
            "Additional essential health testing services to support customers' basic health-check needs.",
    },
];

const visitSteps = [
    {
        number: "01",
        title: "Choose your location",
        description:
            "Find the Royal Dan shop most convenient for you in Abokobi Boi or Comet Estate.",
    },
    {
        number: "02",
        title: "Confirm specific requirements",
        description:
            "Check product availability, prescription requirements or any preparation needed for a particular test.",
    },
    {
        number: "03",
        title: "Visit Royal Dan",
        description:
            "Access the available services at your chosen location during its opening hours.",
    },
];

export default function ServicesPage() {
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
                            Our services
                        </p>

                        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
                            Medicines, health checks and everyday essentials.
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            Access over-the-counter medicines, selected prescription
                            medicines, first aid and aftercare products, mart
                            essentials and essential health testing services at
                            Royal Dan Limited.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="#health-tests"
                                className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-900 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
                            >
                                Explore Health Tests
                                <span className="ml-3" aria-hidden="true">↓</span>
                            </Link>

                            <Link
                                href="/locations"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 font-semibold text-blue-950 transition hover:border-green-600 hover:text-green-800"
                            >
                                Find a Shop
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-green-100/60 blur-2xl" />

                        <div className="overflow-hidden rounded-3xl border border-white shadow-2xl shadow-blue-950/10">
                            <Image
                                src="/images/royal-dan-hero-v2.png"
                                alt="A shop assistant helping a customer with a medicine product"
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

            {/* Medicines and retail */}
            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                        Medicines and retail
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                        Everyday products and essential supplies.
                    </h2>

                    <p className="mt-5 leading-8 text-slate-600">
                        Royal Dan brings together medicine retail, first aid,
                        aftercare and everyday shopping in one convenient setting.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    {serviceCategories.map((service) => (
                        <article
                            key={service.number}
                            className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-9"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 font-bold text-green-800">
                                {service.number}
                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-blue-950">
                                {service.title}
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                {service.description}
                            </p>

                            <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5">
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
                        </article>
                    ))}
                </div>
            </section>

            {/* Health testing */}
            <section
                id="health-tests"
                className="scroll-mt-24 bg-slate-50 py-20 sm:py-24"
            >
                <div className="mx-auto max-w-7xl px-5 sm:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            Health testing and checks
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                            Essential tests and basic health checks.
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Our health testing services cover a range of common
                            tests and measurements. Our team can explain the
                            process and any requirements for the service you need.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {healthTests.map((test) => (
                            <article
                                key={test.number}
                                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-green-200 hover:shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-900">
                                        {test.number}
                                    </span>

                                    <h3 className="text-lg font-bold text-blue-950">
                                        {test.name}
                                    </h3>
                                </div>

                                <p className="mt-4 text-sm leading-7 text-slate-600">
                                    {test.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-6 sm:p-8">
                        <h3 className="text-lg font-bold text-blue-950">
                            Your health and privacy matter.
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            Health testing should be carried out by appropriately
                            qualified personnel in accordance with applicable
                            requirements. HIV testing must follow appropriate
                            consent and confidentiality procedures. Test results
                            should be interpreted in context and do not replace
                            a medical assessment when one is needed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Visiting information */}
            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                        Plan your visit
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                        Find the service you need.
                    </h2>

                    <p className="mt-5 leading-8 text-slate-600">
                        Choose a location and confirm any specific requirements
                        before travelling, especially for prescription medicines
                        or diagnostic tests.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {visitSteps.map((step) => (
                        <article
                            key={step.number}
                            className="rounded-2xl border border-slate-200 p-7"
                        >
                            <p className="text-sm font-bold tracking-widest text-green-700">
                                STEP {step.number}
                            </p>

                            <h3 className="mt-4 text-xl font-bold text-blue-950">
                                {step.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                {step.description}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="mt-8">
                    <Link
                        href="/locations"
                        className="inline-flex items-center font-semibold text-green-800 hover:text-green-900"
                    >
                        View shop addresses and opening hours
                        <span className="ml-2" aria-hidden="true">→</span>
                    </Link>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-blue-950 px-5 py-16 sm:px-8 sm:py-20">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                            Get in touch
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                            How can we help you today?
                        </h2>

                        <p className="mt-4 leading-7 text-blue-100">
                            Visit Royal Dan for medicines, health testing, first aid,
                            aftercare and everyday essentials. Contact us if you need
                            information before visiting.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-500"
                    >
                        Contact Us
                        <span className="ml-2" aria-hidden="true">→</span>
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
                            Royal Dan Limited operates medicine shops in Abokobi Boi
                            and Comet Estate, Greater Accra, Ghana.
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

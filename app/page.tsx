
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Royaldan Limited | Your Health, Our Concern",
  description:
    "Your Health, Our Concern. Find Royaldan Limited shops in Abokobi Boi and Comet Estate, Greater Accra, and explore our healthcare products and services.",
  openGraph: {
    title: "Royaldan Limited | Your Health, Our Concern",
    description:
      "Your Health, Our Concern. Explore our medicine shops, healthcare products and services in Greater Accra, Ghana.",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1728,
        height: 972,
        alt: "A shop assistant helping a customer at a modern Royaldan Limited medicine shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royaldan Limited | Your Health, Our Concern",
    description:
      "Explore Royaldan Limited's medicine shops, healthcare products and services in Greater Accra, Ghana.",
    images: ["/images/hero.png"],
  },
};

const branches = [
  {
    name: "Abokobi Boi",
    address: "Quist Town Street, Abokobi Boi, Greater Accra Region, Ghana",
    hours: "Monday – Sunday, 7:00 AM – 9:00 PM",
    map: "https://www.google.com/maps/search/?api=1&query=Abokobi+Boi+Quist+Town+Street+Ghana",
  },
  {
    name: "Comet Estate",
    address: "Tigo Poll, Comet Estate, Greater Accra Region, Ghana",
    hours: "Monday – Sunday, 7:00 AM – 9:00 PM",
    map: "https://www.google.com/maps/search/?api=1&query=Comet+Estate+Tigo+Poll+Ghana",
  },
];

const serviceCards = [
  {
    number: "01",
    title: "Medicines",
    description:
      "Access over-the-counter medicines and selected prescription medicines, dispensed subject to applicable requirements.",
    icon: "＋",
  },
  {
    number: "02",
    title: "Health testing and checks",
    description:
      "Access essential health testing and checks, including malaria, typhoid, pregnancy and HIV testing, blood pressure checks and BMI assessment.",
    icon: "♡",
  },
  {
    number: "03",
    title: "First aid and aftercare",
    description:
      "Find first-aid supplies and aftercare essentials to support everyday health needs and recovery.",
    icon: "✚",
  },
  {
    number: "04",
    title: "Mart and everyday essentials",
    description:
      "Shop for everyday retail essentials alongside your medicine and healthcare needs.",
    icon: "⌂",
  },
];

const healthChecks = [
  "Malaria testing",
  "Blood pressure checks",
  "Typhoid testing",
  "Pregnancy testing",
  "HIV testing",
  "BMI assessment",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* Shared responsive header: desktop navigation and mobile menu */}
      <SiteHeader activePath="/" />

      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-green-50" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-100 bg-white px-4 py-2 text-sm font-medium text-green-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              Your Health, Our Concern.
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
              Medicine dispensing{" "}
              <span className="block text-green-700">made simple.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              We make it easier to access over-the-counter (OTC) services,
              find your nearest Royaldan Limited shop and get the assistance you need.
              From medicines and essential health checks to first aid and
              everyday essentials, we are here to support your needs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/locations"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-900 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Find a Shop
                <span className="ml-3" aria-hidden="true">
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

            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-slate-200 pt-6">
              {[
                ["2", "Shop locations"],
                ["7 days", "Open weekly"],
                ["7 AM–9 PM", "Daily hours"],
              ].map(([title, subtitle]) => (
                <div key={title}>
                  <p className="text-sm font-bold text-blue-950 sm:text-base">
                    {title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                    {subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative pb-7">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-green-100/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white shadow-2xl shadow-blue-950/10">
              <Image
                src="/images/hero.png"
                alt="A shop assistant helping a customer at a modern medicine shop"
                width={1728}
                height={972}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-1 left-4 right-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:left-8 sm:right-8 sm:p-5">
              <p className="font-semibold text-blue-950">
                Everyday needs. Convenient locations.
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Visit us at Abokobi Boi or Comet Estate in Greater Accra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Welcome to Royaldan Limited
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
              More than medicines. Support for everyday needs.
            </h2>
          </div>

          <p className="max-w-2xl leading-8 text-slate-600">
            Royaldan Limited brings together medicine retail, essential health
            testing, first aid, aftercare and everyday retail essentials. Our
            two Greater Accra locations give customers a convenient place to
            access these services and products.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              What we offer
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
              Essential services in one convenient place.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              From medicine access to essential health checks and everyday
              necessities, explore the ways Royaldan Limited can help.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl font-semibold text-green-800">
                  <span aria-hidden="true">{service.icon}</span>
                </div>

                <p className="mt-6 text-xs font-bold tracking-widest text-green-700">
                  {service.number}
                </p>

                <h3 className="mt-2 text-xl font-bold text-blue-950">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center font-semibold text-green-800 transition hover:text-green-900"
            >
              Explore all our services
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Health checks */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Essential health checks
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
              Take a step towards understanding your health.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Royaldan Limited provides essential testing and health checks to help
              customers access relevant health information. Our services
              include the following:
            </p>

            <Link
              href="/services"
              className="mt-7 inline-flex items-center font-semibold text-green-800 transition hover:text-green-900"
            >
              Learn about our health services
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-blue-950/5 sm:p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {healthChecks.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
                    ✓
                  </span>
                  <span className="font-medium leading-6 text-blue-950">
                    {service}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl bg-blue-50 p-4">
              <p className="text-sm leading-7 text-slate-700">
                Testing and medicine dispensing are provided subject to
                applicable requirements. Test availability may vary by shop.
                Health checks do not replace professional medical diagnosis
                or advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Our locations
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                Find your nearest shop.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-slate-600">
                Visit either of our two Greater Accra medicine shops. Both shops
                are open every day from 7:00 AM to 9:00 PM.
              </p>
            </div>

            <Link
              href="/locations"
              className="font-semibold text-green-800 hover:text-green-900"
            >
              View all location details →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {branches.map((branch) => (
              <article
                key={branch.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-900">
                  <span aria-hidden="true">⌖</span>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-blue-950">
                  {branch.name}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {branch.address}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-5">
                  <p className="text-sm font-semibold text-blue-950">
                    Opening hours
                  </p>

                  <p className="mt-2 text-sm text-slate-600">
                    {branch.hours}
                  </p>
                </div>

                <a
                  href={branch.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center font-semibold text-green-800 hover:text-green-900"
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

      {/* About Royaldan Limited */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl bg-blue-50">
            <Image
              src="/images/royal-dan-about.png"
              alt="Royaldan Limited staff assisting a customer in a modern medicine shop"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              About Royaldan Limited
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
              Practical support for everyday health and wellbeing.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We are building a business focused on accessible medicine
              retail, essential health services and everyday convenience.
              Our aim is to help customers find the products and services
              they need while making their visits straightforward.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center font-semibold text-green-800 transition hover:text-green-900"
            >
              Get to know Royaldan Limited
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-950 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              We are here to help
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Looking for a nearby medicine shop?
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Find our locations, explore our services or contact Royaldan Limited
              for general enquiries and information about visiting us.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/locations"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-500"
            >
              Find a Shop
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
            <Link href="/" aria-label="Royaldan Limited homepage">
              <Image
                src="/images/Royal dan.png"
                alt="Royaldan Limited"
                width={240}
                height={90}
                className="h-auto w-40 object-contain"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              Royaldan Limited operates medicine shops at
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
              <p>© 2026 Royaldan Limited. All rights reserved.</p>
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

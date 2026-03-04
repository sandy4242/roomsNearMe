import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-6xl mx-auto px-8 text-center">

        {/* Small Label */}
        <span className="text-sm uppercase tracking-widest text-gray-400">
          List With<span className="text-red-600"> 4Diwar</span>
        </span>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-display mt-6 mb-8 leading-tight">
          Ready to Showcase Your Property?
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-14">
          Connect directly with verified tenants across Sikkim.
          Transparent process. Zero brokerage.
        </p>

        {/* Button */}
        <Link
          href="/list-property"
          className="inline-block px-12 py-4 border border-white text-white tracking-wide hover:bg-white hover:text-black transition duration-300"
        >
          List Your Property →
        </Link>

      </div>
    </section>
  );
}
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-3 gap-16">

        {/* Brand */}
        <div>
          <h3 className="text-white text-2xl font-display mb-6">
            <span className="text-red-600">4Diwar</span>
          </h3>

          <p className="leading-relaxed text-gray-500 max-w-sm">
            Discover curated properties across Sikkim.
            Verified listings. Direct connections.
            Zero brokerage.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white mb-6 tracking-wide">
            Explore
          </h4>

          <ul className="space-y-4">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/browse" className="hover:text-white transition">
                Browse Properties
              </Link>
            </li>
            <li>
              <Link href="/list-property" className="hover:text-white transition">
                List Property
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white mb-6 tracking-wide">
            Contact
          </h4>

          <ul className="space-y-4">
            <li>Email: hello@roomly.in</li>
            <li>Gangtok, Sikkim</li>
            <li>
              <div className="flex gap-6 mt-4">
                <Link href="#" className="hover:text-white transition">
                  Instagram
                </Link>
                <Link href="#" className="hover:text-white transition">
                  LinkedIn
                </Link>
                <Link href="#" className="hover:text-white transition">
                  Twitter
                </Link>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-8 py-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between">

        <p>
          © {new Date().getFullYear()} 4Diwar. All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition">
            Terms of Service
          </Link>
        </div>

      </div>

    </footer>
  );
}
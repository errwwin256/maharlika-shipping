import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ocean-dark text-sand pt-10 pb-0">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold mb-3">Maharlika Shipping Lines</h2>
          <p>📍 Batangas Port, Philippines</p>
          <p>📞 +63 912 345 6789</p>
          <p>✉️ info@maharlikashipping.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-3">
            Subscribe to our Newsletter
          </h2>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded bg-white text-tropicalBrown placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-palm text-white px-4 py-2 rounded hover:bg-sunset transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold mb-3">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="w-6 h-6 hover:text-sunset transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="w-6 h-6 hover:text-sunset transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="w-6 h-6 hover:text-sunset transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <Youtube className="w-6 h-6 hover:text-sunset transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bg-blue-400 text-center text-xs py-2 text-ocean-dark mt-6">
        © {new Date().getFullYear()} Maharlika Shipping Lines. All rights
        reserved.
      </div>
    </footer>
  );
}

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-ocean-dark to-ocean-light text-white px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-white/80">
            Have questions, feedback, or need assistance with your bookings?
            Reach out to us — we’d love to hear from you!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="text-sand" />
              <span>+63 912 345 6789</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-sand" />
              <span>support@maharlikashipping.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-sand" />
              <span>Cebu Port, Cebu City, Philippines</span>
            </div>
          </div>

          {/* Map Embed */}
          <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15704.028676668364!2d123.894!3d10.3157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99c7c8b1f6f5d%3A0x2a87b5b8c8f97f53!2sCebu%20Port!5e0!3m2!1sen!2sph!4v1695754473012"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form className="bg-white text-tropicalBrown shadow-lg rounded-2xl p-8 space-y-4">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Juan Dela Cruz"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-ocean-dark"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="juan@email.com"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-ocean-dark"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              placeholder="Your message here..."
              rows="4"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-ocean-dark"
            ></textarea>
          </div>
          <button className="w-full bg-gradient-to-r from-sunset to-palm text-white py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="text-tropicalBrown">
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gradient-to-b from-sand to-ocean-light flex flex-col items-center justify-center px-6 text-center py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl text-lg md:text-xl">
          Maharlika Shipping Lines is dedicated to providing safe, reliable, and
          comfortable sea travel across the Philippine islands. Our mission is
          to connect people and places while delivering a tropical experience
          filled with warmth and hospitality.
        </p>
      </section>

      {/* YouTube Video */}
      <section className="py-16 px-6 flex flex-col items-center">
        <h3 className="text-3xl font-bold mb-6">Watch Our Journey</h3>
        <div className="w-full max-w-4xl aspect-video shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/U3cvYnRAUXo?si=wCUrSYmCptK8wqgG"
            title="Maharlika Shipping Lines"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-sand text-center">
        <h3 className="text-3xl font-bold mb-10">Mission & Vision</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform hover:scale-105">
            <h4 className="text-2xl font-semibold mb-3">Mission</h4>
            <p>
              To provide safe, reliable, and enjoyable sea travel connecting
              Philippine islands, with friendly service and comfort.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform hover:scale-105">
            <h4 className="text-2xl font-semibold mb-3">Vision</h4>
            <p>
              To be the leading shipping line recognized for exceptional
              service, modern vessels, and sustainable operations across the
              Philippines.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-10">Our Values</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-ocean-light text-white p-8 rounded-2xl shadow-lg transition-transform hover:scale-105">
            <h4 className="text-2xl font-semibold mb-2">Safety</h4>
            <p>
              We prioritize the safety of our passengers and crew at all times.
            </p>
          </div>
          <div className="bg-palm text-white p-8 rounded-2xl shadow-lg transition-transform hover:scale-105">
            <h4 className="text-2xl font-semibold mb-2">Comfort</h4>
            <p>
              Our fleet is designed for a comfortable and enjoyable journey.
            </p>
          </div>
          <div className="bg-sunset text-white p-8 rounded-2xl shadow-lg transition-transform hover:scale-105">
            <h4 className="text-2xl font-semibold mb-2">Reliability</h4>
            <p>
              We maintain punctual schedules and reliable services nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vessels / Trips */}
      <section className="py-16 px-6 bg-sand text-center">
        <h3 className="text-3xl font-bold mb-10">Our Vessels & Trips</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src="/ship1.jpg"
              alt="Vessel 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">Batangas – Mindoro</h4>
              <p>
                Daily sailings with modern vessels ensuring comfort and safety.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src="/ship2.jpg"
              alt="Vessel 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">Cebu – Bohol</h4>
              <p>
                Enjoy smooth sailing and scenic routes across the Visayas
                islands.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src="/ship3.jpg"
              alt="Vessel 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">Davao – Samal</h4>
              <p>
                Reliable trips connecting Mindanao islands with modern
                amenities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

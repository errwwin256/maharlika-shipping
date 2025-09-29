import { Users, Truck, Calendar } from "lucide-react"; // Icons for services

export default function Services() {
  const services = [
    {
      title: "Passenger Travel",
      desc: "Comfortable cabins and seating for all travelers.",
      icon: <Users size={36} className="mb-4 text-ocean-dark" />,
    },
    {
      title: "Cargo Shipping",
      desc: "Reliable cargo transport across major islands.",
      icon: <Truck size={36} className="mb-4 text-ocean-dark" />,
    },
    {
      title: "Charter Services",
      desc: "Private bookings for groups, tours, or events.",
      icon: <Calendar size={36} className="mb-4 text-ocean-dark" />,
    },
  ];

  return (
    <section className="min-h-screen bg-sand text-tropicalBrown px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative bg-gradient-to-br from-ocean-light to-ocean-dark text-white rounded-2xl p-8 text-center shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {service.icon}
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-white/90">{service.desc}</p>

            {/* Optional bubble effect */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-3xl animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  );
}

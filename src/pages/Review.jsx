import { useLocation, useNavigate } from "react-router-dom";

export default function Review() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <p className="text-center mt-20">No booking data found.</p>;
  }

  // Ship data
  const ships = [
    {
      route: "Manila-Cebu",
      name: "MV Ocean Spirit",
      type: "Cruise Ferry",
      capacity: 800,
    },
    {
      route: "Cebu-Davao",
      name: "MV Southern Star",
      type: "Passenger Vessel",
      capacity: 600,
    },
    {
      route: "Iloilo-Bacolod",
      name: "MV Island Explorer",
      type: "RoRo Ferry",
      capacity: 400,
    },
  ];

  // Match selected route to ship
  const selectedRoute = `${state.origin}-${state.destination}`;
  const ship = ships.find((s) => s.route === selectedRoute);

  // Base fares
  const farePrices = {
    regular: 1000,
    tourist: 1500,
    cabin4: 2500,
    cabin6: 3000,
    suite: 5000,
  };

  // Discount map
  const discounts = {
    none: 0,
    student: 0.2,
    senior: 0.2,
    pwd: 0.2,
  };

  // Compute total fare
  let total = 0;
  const passengerCosts = state.details.map((p) => {
    const baseFare = farePrices[state.fare];
    const discount = discounts[p.discount] || 0;
    const finalFare = baseFare - baseFare * discount;
    total += finalFare;
    return { ...p, finalFare };
  });

  const handleConfirm = () => {
    navigate("/payment", { state: { ...state, total, passengerCosts, ship } });
  };

  return (
    <section className="min-h-screen bg-sand text-tropicalBrown px-6 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-palm">
        Review Your Booking
      </h2>

      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl mx-auto space-y-8">
        {/* Trip Info */}
        <div className="border-b pb-4">
          <h3 className="text-xl font-bold mb-2">🛳 Trip Information</h3>
          <p className="text-lg">
            <span className="font-semibold">{state.origin}</span> ➝{" "}
            <span className="font-semibold">{state.destination}</span>
          </p>
          <p>
            Date: <span className="font-semibold">{state.date}</span> | Time:{" "}
            <span className="font-semibold">{state.time}</span>
          </p>
        </div>

        {/* Ship Info */}
        {ship && (
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">🚢 Ship Information</h3>
            <p>
              <strong>Name:</strong> {ship.name}
            </p>
            <p>
              <strong>Type:</strong> {ship.type}
            </p>
            <p>
              <strong>Capacity:</strong> {ship.capacity} passengers
            </p>
          </div>
        )}

        {/* Fare Type */}
        <div className="border-b pb-4">
          <h3 className="text-xl font-bold mb-2">💺 Fare Type</h3>
          <p className="capitalize">{state.fare}</p>
        </div>

        {/* Passenger Details */}
        <div>
          <h3 className="text-xl font-bold mb-4">👤 Passenger Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {passengerCosts.map((p, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 bg-gray-50 shadow-sm space-y-2"
              >
                <p className="font-semibold text-palm">
                  Passenger {i + 1}: {p.fullName} ({p.gender})
                </p>
                <p>DOB: {p.dob}</p>
                <p>Email: {p.email}</p>
                <p>Phone: {p.phone}</p>
                <p>Address: {p.address}</p>
                <p>
                  Discount:{" "}
                  <span className="capitalize">
                    {p.discount === "none" ? "No Discount" : p.discount}
                  </span>
                </p>
                <p className="font-bold text-lg text-sunset">
                  Fare: ₱{p.finalFare.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Total Fare */}
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold">💰 Total Fare</h3>
          <p className="text-2xl font-bold text-palm">₱{total.toFixed(2)}</p>
        </div>

        {/* Button */}
        <button
          onClick={handleConfirm}
          className="w-full bg-palm text-white py-4 rounded-lg hover:bg-sunset transition text-lg font-semibold shadow-md"
        >
          Proceed to Payment
        </button>
      </div>
    </section>
  );
}

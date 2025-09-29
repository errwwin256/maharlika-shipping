import { useLocation } from "react-router-dom";

export default function Payment() {
  const { state } = useLocation();

  if (!state) {
    return <p className="text-center mt-20">No booking data found.</p>;
  }

  return (
    <section className="min-h-screen bg-ocean-light text-white px-6 py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Payment</h2>

      <div className="bg-white text-tropicalBrown shadow-lg rounded-lg p-6 max-w-md mx-auto space-y-6">
        <h3 className="font-bold">Trip Summary</h3>
        <p>
          {state.origin} ➝ {state.destination} <br />
          {state.date} | {state.time}
        </p>

        {state.ship && (
          <p className="mt-2">
            Ship: <strong>{state.ship.name}</strong> ({state.ship.type})
          </p>
        )}

        <h3 className="font-bold mt-4">Total Fare</h3>
        <p className="text-xl">₱{state.total.toFixed(2)}</p>

        <h3 className="font-bold mt-4">Choose Payment Method</h3>
        <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
          Pay with GCash
        </button>
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
          Pay with DragonPay
        </button>
      </div>
    </section>
  );
}

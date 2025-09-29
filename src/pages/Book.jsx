import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Book() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    date: "",
    time: "",
    passengers: 1,
    details: [
      {
        fullName: "",
        gender: "",
        dob: "",
        email: "",
        phone: "",
        address: "",
        discount: "none",
      },
    ],
    fare: "regular",
  });

  const handleChange = (e, index, field) => {
    const newDetails = [...formData.details];
    newDetails[index][field] = e.target.value;
    setFormData({ ...formData, details: newDetails });
  };

  const handlePassengerCount = (e) => {
    const count = parseInt(e.target.value);
    const newDetails = Array(count)
      .fill()
      .map(
        (_, i) =>
          formData.details[i] || {
            fullName: "",
            gender: "",
            dob: "",
            email: "",
            phone: "",
            address: "",
            discount: "none",
          }
      );
    setFormData({ ...formData, passengers: count, details: newDetails });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.origin ||
      !formData.destination ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    navigate("/review", { state: formData });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-sand to-ocean-light text-tropicalBrown px-6 py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">
        🚢 Book Your Journey
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl mx-auto space-y-8"
      >
        {/* Trip Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">
            Trip Details
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <select
              className="border p-3 rounded-lg focus:ring-2 focus:ring-palm"
              value={formData.origin}
              onChange={(e) =>
                setFormData({ ...formData, origin: e.target.value })
              }
            >
              <option value="">Select Origin</option>
              <option value="Manila">Manila</option>
              <option value="Cebu">Cebu</option>
              <option value="Davao">Davao</option>
            </select>

            <select
              className="border p-3 rounded-lg focus:ring-2 focus:ring-palm"
              value={formData.destination}
              onChange={(e) =>
                setFormData({ ...formData, destination: e.target.value })
              }
            >
              <option value="">Select Destination</option>
              <option value="Cebu">Cebu</option>
              <option value="Davao">Davao</option>
              <option value="Iloilo">Iloilo</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <input
              type="date"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-palm"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />

            <select
              className="border p-3 rounded-lg focus:ring-2 focus:ring-palm"
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
            >
              <option value="">Select Time</option>
              <option>8:00 AM</option>
              <option>1:00 PM</option>
              <option>6:00 PM</option>
            </select>
          </div>
        </div>

        {/* Passenger Count */}
        <div>
          <h3 className="text-xl font-semibold mb-2 border-b pb-2">
            Passengers
          </h3>
          <input
            type="number"
            min="1"
            className="border p-3 rounded-lg w-32 focus:ring-2 focus:ring-palm"
            value={formData.passengers}
            onChange={handlePassengerCount}
          />
        </div>

        {/* Passenger Details */}
        {formData.details.map((p, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 bg-gray-50 shadow-inner space-y-3"
          >
            <h4 className="font-bold text-lg mb-2">Passenger {index + 1}</h4>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={p.fullName}
                onChange={(e) => handleChange(e, index, "fullName")}
                className="border p-3 rounded-lg focus:ring-2 focus:ring-palm"
                required
              />
              <select
                value={p.gender}
                onChange={(e) => handleChange(e, index, "gender")}
                className="border p-3 rounded-lg focus:ring-2 focus:ring-palm"
                required
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <input
              type="date"
              value={p.dob}
              onChange={(e) => handleChange(e, index, "dob")}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-palm"
              required
            />

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                value={p.email}
                onChange={(e) => handleChange(e, index, "email")}
                className="border p-3 rounded-lg focus:ring-2 focus:ring-palm"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={p.phone}
                onChange={(e) => handleChange(e, index, "phone")}
                className="border p-3 rounded-lg focus:ring-2 focus:ring-palm"
                required
              />
            </div>

            <textarea
              placeholder="Full Address"
              value={p.address}
              onChange={(e) => handleChange(e, index, "address")}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-palm"
              required
            />

            <select
              value={p.discount}
              onChange={(e) => handleChange(e, index, "discount")}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-palm"
            >
              <option value="none">No Discount</option>
              <option value="student">Student (20%)</option>
              <option value="senior">Senior Citizen (20%)</option>
              <option value="pwd">PWD (20%)</option>
            </select>
          </div>
        ))}

        {/* Fare Type */}
        <div>
          <h3 className="text-xl font-semibold mb-2 border-b pb-2">
            Fare Type
          </h3>
          <select
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-palm"
            value={formData.fare}
            onChange={(e) => setFormData({ ...formData, fare: e.target.value })}
          >
            <option value="regular">Regular</option>
            <option value="tourist">Tourist Class</option>
            <option value="cabin4">Cabin for 4</option>
            <option value="cabin6">Cabin for 6</option>
            <option value="suite">Suite Room</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-palm to-sunset text-white py-4 rounded-xl font-semibold hover:opacity-90 transition shadow-lg"
        >
          Proceed to Review
        </button>
      </form>
    </section>
  );
}

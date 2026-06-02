"use client";

import { useState } from "react";

const cars = [
  {
    name: "Scorpio S11",
    image: "/cars/scorpio.jpg",
    seats: 7,
    transmission: "Manual",
    fuel: "Diesel",
    price: 3699,
    model: "Scorpio S11",
    price12: 2799,
    price24: 3699,
  },

  {
    name: "XUV700",
    image: "/cars/xuv700.jpg",
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    price: 3999,
    model: "XUV700",
    price12: 2999,
    price24: 3999,
  },

  {
    name: "Mahindra Thar",
    image: "/cars/thar.jpg",
    seats: 5,
    transmission: "Manual",
    fuel: "Diesel",
    price: 3299,
    model: "Mahindra Thar",
    price12: 2499,
    price24: 3299,
  },

  {
    name: "Grand Vitara",
    image: "/cars/Vitara.jpg",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 2699,
    model: "Mahindra Thar",
    price12: 2199,
    price24: 2699,
  },

  {
    name: "KIA Sonet",
    image: "/cars/sonet.jpg",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    price: 2199,
    model: "KIA Sonet",
    price12: 1799,
    price24: 2199,
  },

  {
    name: "Toyota Glanza",
    image: "/cars/glanza.jpg",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    price: 1799,
    model: "Toyota Glanza",
    price12: 1499,
    price24: 1799,
  },

  {
    name: "Mahindra Thar ROX",
    image: "/cars/Thar ROX.jpg",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    price: 3999,
    model: "Thar ROX",
    price12: 3599,
    price24: 3999,
  },

   {
    name: "TATA Sierra",
    image: "/cars/TATA Sierra.jpg",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 2699,
    model: "Sierra",
    price12: 2199,
    price24: 2699,
  },

  {
    name: "Suzuki Fronx",
    image: "/cars/fronx.jpg",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    price: 1799,
    model: "Suzuki Fronx",
    price12: 1499,
    price24: 1799,
  },

  {
    name: "Suzuki Swift",
    image: "/cars/swift.jpg",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    price: 1799,
    model: "Suzuki Swift",
    price12: 1299,
    price24: 1799,
  },

  {
    name: "Toyota Taisor",
    image: "/cars/taisor.jpg",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    price: 1999,
    model: "Toyota Taisor",
    price12: 1499,
    price24: 1999,
  },

  {
    name: "Hyundai Exter",
    image: "/cars/Hyundai Exter.jpg",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    price: 1799,
    model: "Hyundai Exter",
    price12: 1499,
    price24: 1799,
  },

  {
    name: "Hyundai Creata",
    image: "/cars/Hyundai Creata.jpg",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    price: 2699,
    model: "Hyundai Creata",
    price12: 2199,
    price24: 2699,
  },

   {
    name: "Kia carens",
    image: "/cars/Kia carens.jpg",
    seats: 7,
    transmission: "Manual",
    fuel: "Petrol",
    price: 2999,
    model: "Kia carens",
    price12: 2199,
    price24: 2999,
  },

    {
    name: "Hyundai venue SX",
    image: "/cars/venue SX.jpg",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    price: 2199,
    model: "venue SX top model",
    price12: 1699,
    price24: 2199,
  },

   {
    name: "Hyundai i20",
    image: "/cars/i20 sunroof.jpg",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    price: 1799,
    model: "i20 sunroof 2025 model",
    price12: 1499,
    price24: 1799,
  },

   {
    name: "Suzuki-baleno",
    image: "/cars/Suzuki-baleno.jpg",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 1799,
    model: "Suzuki-baleno",
    price12: 1499,
    price24: 1799,
  },
];

export default function CarList() {

  const [detailsOpen, setDetailsOpen] = useState(false);

const [selectedDetails, setSelectedDetails] = useState<any>(null);

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const [bookingOpen, setBookingOpen] = useState(false);

  const [selectedCar, setSelectedCar] = useState("");

  const [destination, setDestination] = useState("");

  const [contact, setContact] = useState("");

  const [tripStart, setTripStart] = useState("");

  const [tripEnd, setTripEnd] = useState("");

  const toggleDetails = (index: number) => {

    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }

  };

  const resetForm = () => {

  setDestination("");

  setContact("");

  setTripStart("");

  setTripEnd("");

};

  const handleBooking = () => {

    const message = `Hi Fortune Drive,

I want to rent a car.

Car: ${selectedCar}

Destination: ${destination}

Trip Start: ${tripStart}

Trip End: ${tripEnd}

Contact Number: ${contact}`;

    window.open(
      `https://wa.me/918114763522?text=${encodeURIComponent(message)}`,
      "_blank"
    );

  };

  return (

    <section
      id="allcars"
      className="bg-[#020617] py-20 px-6"
    >

      {/* Heading */}
      <div className="text-center mb-14">

        <h2 className="text-5xl font-bold text-white mb-4">
          All Cars
        </h2>

        <p className="text-gray-400 text-lg">
          Choose your perfect self-drive ride
        </p>

      </div>

      {/* Grid */}
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 max-w-7xl mx-auto">

        {cars.map((car, index) => (

          <div
            key={index}
            className="bg-[#0f173d] rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400 transition duration-300 shadow-lg hover:shadow-cyan-500/20"
          >

            {/* Image */}
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">

              {/* Name */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {car.name}
              </h3>

              {/* Features */}
              <div className="flex flex-wrap gap-4 text-gray-300 text-sm mb-5">

                <span>👥 {car.seats} Seats</span>

                <span>⚙ {car.transmission}</span>

                <span>⛽ {car.fuel}</span>

              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between mb-4">

                <div>

                  <h2 className="text-cyan-400 text-3xl font-bold">
                    ₹{car.price}
                  </h2>

                  <p className="text-gray-400">
                    /day
                  </p>

                </div>

                <button
                  onClick={() => {

  resetForm();

  setSelectedCar(car.name);

  setBookingOpen(true);

}}
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-5 py-3 rounded-2xl font-bold"
                >
                  BOOK NOW
                </button>

              </div>

              {/* View Details Button */}
             <button
  onClick={() => {

    setSelectedDetails(car);

    setDetailsOpen(true);

  }}
  className="w-full border border-gray-500 py-2 rounded-xl text-sm text-white hover:border-cyan-400 hover:text-cyan-400 transition"
>
  View Details
</button>

              {/* Hidden Details */}
              {activeCard === index && (

                <div className="mt-5 bg-[#1a2255] rounded-2xl p-4 text-gray-300 space-y-2">

                  <p>
                    Model: {car.model}
                  </p>

                  <p>
                    Fuel: {car.fuel}
                  </p>

                  <p>
                    12 Hrs: ₹{car.price12}
                  </p>

                  <p>
                    24 Hrs: ₹{car.price24}
                  </p>

                </div>

              )}

            </div>

          </div>

        ))}

      </div>

      {/* Booking Popup */}
      {bookingOpen && (

        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">

          <div className="bg-[#111c44] w-full max-w-2xl rounded-3xl p-8 relative">

            {/* Close */}
            <button
              onClick={() => {

  setBookingOpen(false);

  resetForm();

}}
              className="absolute top-4 right-5 text-white text-4xl"
            >
              ×
            </button>

            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Book Your Car
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <label className="text-white mb-2 block">
                  Car Name
                </label>

                <input
                  type="text"
                  value={selectedCar}
                  readOnly
                  className="w-full bg-black rounded-xl px-4 py-3"
                />

              </div>

              <div>

                <label className="text-white mb-2 block">
                  Destination
                </label>

                <input
                  type="text"
                  placeholder="Enter destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-black rounded-xl px-4 py-3"
                />

              </div>

              <div>

                <label className="text-white mb-2 block">
                  Contact Number
                </label>

                <input
                  type="number"
                  placeholder="Enter number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-black rounded-xl px-4 py-3"
                />

              </div>

              <div>

                <label className="text-white mb-2 block">
                  Trip Start
                </label>

                <input
                  type="datetime-local"
                  value={tripStart}
                  onChange={(e) => setTripStart(e.target.value)}
                  className="w-full bg-black rounded-xl px-4 py-3"
                />

              </div>

              <div className="md:col-span-2">

                <label className="text-white mb-2 block">
                  Trip End
                </label>

                <input
                  type="datetime-local"
                  value={tripEnd}
                  onChange={(e) => setTripEnd(e.target.value)}
                  className="w-full bg-black rounded-xl px-4 py-3"
                />

              </div>

            </div>

            

            <button
              onClick={handleBooking}
              className="w-full mt-8 bg-gradient-to-r from-cyan-400 to-purple-500 text-white py-4 rounded-2xl text-xl font-bold"
            >
              Submit Booking
            </button>

          </div>

        </div>

      )}

      {/* Details Popup */}
{detailsOpen && selectedDetails && (

  <div
    onClick={() => setDetailsOpen(false)}
    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
  >

    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-[#111c44] rounded-3xl p-8 max-w-md w-full text-white"
    >

      <img
        src={selectedDetails.image}
        alt={selectedDetails.name}
        className="w-full h-52 object-cover rounded-2xl mb-6"
      />

      <h2 className="text-3xl font-bold mb-5">
        {selectedDetails.name}
      </h2>

      <div className="space-y-3 text-lg text-gray-300">

        <p>
          🚗 Model: {selectedDetails.model}
        </p>

        <p>
          ⛽ Fuel: {selectedDetails.fuel}
        </p>

        <p>
          👥 Seats: {selectedDetails.seats}
        </p>

        <p>
          ⚙ Transmission: {selectedDetails.transmission}
        </p>

        <p>
          🕒 12 Hrs: ₹{selectedDetails.price12}
        </p>

        <p>
          📅 24 Hrs: ₹{selectedDetails.price24}
        </p>

      </div>

    </div>

  </div>

)}

    </section>

  );
}
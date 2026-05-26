"use client";

import { useState } from "react";

export default function WhyChooseUs() {

  const features = [

    {
      title: "Easy Booking",
      image: "/whychoose/booking.jpg",
      description:
        "Our booking process is quick and hassle-free. Reserve your desired vehicle anytime and anywhere.",
    },

    {
      title: "Competitive Price",
      image: "/whychoose/price.jpg",
      description:
        "Affordable pricing with transparent charges and no hidden fees for customers.",
    },

    {
      title: "Clean & Comfortable Cars",
      image: "/whychoose/car.jpg",
      description:
        "Well-maintained, sanitized and premium quality self-drive cars for every journey.",
    },

    {
      title: "24/7 Customer Support",
      image: "/whychoose/support.jpg",
      description:
        "Customer support available anytime for assistance during your trip.",
    },

  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (

    <section className="bg-[#02021a] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-6">
          Why Choose Us
        </h2>

        <p className="text-center text-white text-2xl mb-20">
          Affordable, Comfortable and Professional Car Rental Service You Can Trust.
        </p>

        <div className="grid lg:grid-cols-[350px_1fr] gap-12 items-center">

          {/* Left Buttons */}
          <div className="space-y-6">

            {features.map((feature, index) => (

              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-8 py-6 rounded-3xl text-2xl font-bold transition duration-300

                ${activeIndex === index
                    ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                    : "bg-[#111133] text-white hover:bg-[#1f2260]"
                  }
                `}
              >
                {feature.title}
              </button>

            ))}

          </div>

          {/* Right Content */}
          <div className="bg-[#111133] rounded-[40px] p-10 shadow-2xl">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* Image */}
              <div className="flex justify-center">

                <img
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  className="w-full max-w-[320px] object-contain"
                />

              </div>

              {/* Text */}
              <div>

                <p className="text-white text-3xl leading-[60px]">
                  {features[activeIndex].description}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
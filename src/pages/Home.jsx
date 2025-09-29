// src/pages/Home.jsx
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import newsData from "../data/newsData";

const slides = [
  // Replace these URLs with "/ship1.jpg", "/ship2.jpg", "/ship3.jpg" if you put images in /public
  {
    src: "ship1.jpg",
    alt: "Maharlika Ship 1",
  },
  {
    src: "ship2.jpg",
    alt: "Maharlika Ship 2",
  },
  {
    src: "ship3.jpg",
    alt: "Maharlika Ship 3",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const pausedRef = useRef(false);
  const intervalRef = useRef(null);

  // Auto-advance
  useEffect(() => {
    startAuto();
    // keyboard left/right
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      stopAuto();
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  function startAuto() {
    stopAuto();
    intervalRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent((c) => (c + 1) % slides.length);
      }
    }, 5000);
  }

  function stopAuto() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function prev() {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
    startAuto();
  }
  function next() {
    setCurrent((c) => (c + 1) % slides.length);
    startAuto();
  }
  function goTo(i) {
    setCurrent(i);
    startAuto();
  }

  return (
    <div className="text-tropicalBrown">
      {/* HERO SLIDER */}
      <section
        className="relative h-[80vh] md:h-[75vh] lg:h-[70vh] overflow-hidden"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        {/* Slides */}
        {slides.map((slide, i) => (
          <div
            key={i}
            aria-hidden={i !== current}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-700 ease-in-out ${
              i === current
                ? "opacity-100 z-20"
                : "opacity-0 z-10 pointer-events-none"
            }`}
            style={
              slide.src
                ? { backgroundImage: `url('${slide.src}')` }
                : { background: "linear-gradient(90deg,#00BFFF,#005f99)" }
            }
          >
            {/* pre-load image for better performance (hidden) */}
            {slide.src && (
              <img src={slide.src} alt={slide.alt} className="hidden" />
            )}
          </div>
        ))}
        {/* Dark overlay + hero content */}{" "}
        <div className="absolute inset-0 bg-black/40 z-30 flex flex-col items-center justify-center text-center px-6">
          {" "}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
            {" "}
            Sail with Maharlika{" "}
          </h1>{" "}
          <p className="mt-4 text-sm md:text-lg text-white/90 max-w-2xl">
            {" "}
            Connecting islands with comfort and safety — trusted routes across
            the Philippines.{" "}
          </p>{" "}
          <div className="mt-6 flex gap-3">
            {" "}
            <a
              href="/book"
              className="mt-6 inline-block bg-palm text-white px-6 py-3 rounded-lg shadow hover:bg-sunset transition"
            >
              {" "}
              Book Now{" "}
            </a>{" "}
          </div>
          {/* Prev/Next buttons (large) */}
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full md:p-3 z-40"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full md:p-3 z-40"
          >
            <ChevronRight size={20} />
          </button>
          {/* Dots */}
          <div className="absolute bottom-6 flex gap-2 z-40">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => goTo(idx)}
                className={`w-3 h-3 rounded-full transition-transform ${
                  idx === current ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRAVEL */}
      <section className="py-16 bg-sand text-center px-6">
        <h2 className="text-3xl font-bold mb-10">Why Travel with Maharlika?</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Safety */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-2">Safety First</h3>
            <p className="text-ocean-dark">
              Our modern fleet is maintained to the highest standards, ensuring
              a secure journey across the islands.
            </p>
          </div>

          {/* Comfort */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl mb-4">🛋️</div>
            <h3 className="text-xl font-semibold mb-2">Comfort on Board</h3>
            <p className="text-ocean-dark">
              Relax with spacious seating, clean facilities, and the warm
              hospitality of our crew.
            </p>
          </div>

          {/* On-Time */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">On-Time Service</h3>
            <p className="text-ocean-dark">
              Reliable schedules and punctual departures so you can plan with
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* OUR ADVANTAGE */}
      <section className="py-16 bg-ocean-light text-white px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Advantage</h2>
        <div className="grid gap-10 max-w-6xl mx-auto md:grid-cols-3">
          {/* Bubble 1 */}
          <div className="relative w-60 h-60 mx-auto rounded-full bg-gradient-to-b from-ocean-dark to-ocean-light flex flex-col justify-center items-center text-center shadow-[inset_-6px_-6px_15px_rgba(0,0,0,0.4),inset_6px_6px_15px_rgba(255,255,255,0.2),0_10px_25px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-110 hover:shadow-[inset_-6px_-6px_20px_rgba(0,0,0,0.5),inset_6px_6px_20px_rgba(255,255,255,0.25),0_15px_30px_rgba(0,0,0,0.6)]">
            <h3 className="text-2xl font-bold mb-2">⚓ 50+</h3>
            <p className="text-sm px-4">Modern ships in our growing fleet.</p>
          </div>

          {/* Bubble 2 */}
          <div className="relative w-60 h-60 mx-auto rounded-full bg-gradient-to-b from-ocean-dark to-ocean-light flex flex-col justify-center items-center text-center shadow-[inset_-6px_-6px_15px_rgba(0,0,0,0.4),inset_6px_6px_15px_rgba(255,255,255,0.2),0_10px_25px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-110 hover:shadow-[inset_-6px_-6px_20px_rgba(0,0,0,0.5),inset_6px_6px_20px_rgba(255,255,255,0.25),0_15px_30px_rgba(0,0,0,0.6)]">
            <h3 className="text-2xl font-bold mb-2">⚓ Ports</h3>
            <p className="text-sm px-4">Serving multiple ports nationwide.</p>
          </div>

          {/* Bubble 3 */}
          <div className="relative w-60 h-60 mx-auto rounded-full bg-gradient-to-b from-ocean-dark to-ocean-light flex flex-col justify-center items-center text-center shadow-[inset_-6px_-6px_15px_rgba(0,0,0,0.4),inset_6px_6px_15px_rgba(255,255,255,0.2),0_10px_25px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-110 hover:shadow-[inset_-6px_-6px_20px_rgba(0,0,0,0.5),inset_6px_6px_20px_rgba(255,255,255,0.25),0_15px_30px_rgba(0,0,0,0.6)]">
            <h3 className="text-2xl font-bold mb-2">⚓ 10</h3>
            <p className="text-sm px-4">Offices across the Philippines.</p>
          </div>
        </div>
      </section>

      {/* NEWS & PROMOS */}
      <section
        id="news"
        className="py-24 bg-sand text-center px-6 scroll-mt-24"
      >
        <h2 className="text-3xl font-bold mb-10">News & Promos</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {newsData.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="block bg-white p-4 rounded-lg shadow text-left hover:shadow-lg hover:scale-105 transition-transform"
            >
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-sm mt-2">{item.summary}</p>
              <p className="text-xs text-gray-500 mt-3">{item.date}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-700">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                ABOUT MAMA’S KITCHEN
              </span>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                We don’t just deliver food.
                <span className="block text-orange-600">We deliver happiness.</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-lg">
                Mama’s Kitchen was born from a simple belief — great food has the power to bring people together, create memories, and make ordinary days special.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#story"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  Our Story
                  <span>↓</span>
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Explore Restaurants
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex justify-center">
              <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-200 to-orange-100"></div>
                <div className="absolute inset-4 flex items-center justify-center rounded-full bg-white text-8xl shadow-inner">
                  🍜
                </div>

                {/* Floating badges */}
                <div className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="text-sm font-bold">4.9 Rating</p>
                    <p className="text-xs text-gray-500">Loved by thousands</p>
                  </div>
                </div>

                <div className="absolute -right-2 bottom-16 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="text-sm font-bold">30 min</p>
                    <p className="text-xs text-gray-500">Avg. Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= STORY ================= */}
      <section id="story" className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wider text-orange-600">OUR STORY</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                It started with one kitchen and a big dream.
              </h2>
              <div className="mt-6 space-y-5 text-gray-600 leading-relaxed">
                <p>
                  In 2023, we noticed something simple but powerful — people were tired of complicated food apps. Too many clicks, confusing menus, and average experiences.
                </p>
                <p>
                  So we built Mama’s Kitchen with one goal: make ordering food feel as warm and easy as calling your favorite local restaurant.
                </p>
                <p>
                  Today we’re proud to connect thousands of food lovers with the best restaurants in their city — every single day.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-orange-50 p-6">
                <p className="text-4xl font-bold text-orange-600">2023</p>
                <p className="mt-2 text-sm font-medium text-gray-700">Year We Started</p>
              </div>
              <div className="rounded-2xl bg-orange-50 p-6">
                <p className="text-4xl font-bold text-orange-600">1</p>
                <p className="mt-2 text-sm font-medium text-gray-700">City → Growing Fast</p>
              </div>
              <div className="rounded-2xl bg-orange-50 p-6 col-span-2">
                <p className="text-4xl font-bold text-orange-600">100%</p>
                <p className="mt-2 text-sm font-medium text-gray-700">Focus on Customer Happiness</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            {[
              { value: "500+", label: "Partner Restaurants" },
              { value: "25K+", label: "Happy Customers" },
              { value: "1.2L+", label: "Orders Delivered" },
              { value: "4.9★", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-orange-400">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= VALUES ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold tracking-wider text-orange-600">WHAT DRIVES US</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our values are simple — just like good food.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🍲",
                title: "Quality First",
                desc: "We only partner with restaurants that care about taste, hygiene and consistency.",
              },
              {
                icon: "⚡",
                title: "Speed & Simplicity",
                desc: "From browsing to doorstep — everything should feel effortless and fast.",
              },
              {
                icon: "💛",
                title: "Customer Love",
                desc: "Every decision we make starts with one question: Will this make our users happier?",
              },
              {
                icon: "🌱",
                title: "Always Growing",
                desc: "We listen, learn and improve every single week. Your feedback shapes us.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-orange-100"
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-orange-50/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold tracking-wider text-orange-600">HOW IT WORKS</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Order in 3 simple steps
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Discover",
                desc: "Browse hundreds of restaurants and cuisines near you. Filter by rating, delivery time or pure craving.",
              },
              {
                step: "02",
                title: "Order",
                desc: "Add your favourites to cart, customise if needed, and checkout in seconds with multiple payment options.",
              },
              {
                step: "03",
                title: "Enjoy",
                desc: "Track your order in real-time and get hot, fresh food delivered right to your door.",
              },
            ].map((item) => (
              <div key={item.step} className="relative rounded-2xl bg-white p-8 shadow-sm">
                <span className="text-5xl font-bold text-orange-100 absolute top-6 right-6">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-gray-900 relative z-10">{item.title}</h3>
                <p className="mt-4 text-gray-600 leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= TEAM ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold tracking-wider text-orange-600">THE PEOPLE</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built by food lovers, for food lovers
            </h2>
            <p className="mt-4 text-gray-600">
              A small, passionate team that eats, sleeps and dreams about great food experiences.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Aman Singh", role: "Founder & CEO", emoji: "👨‍💻" },
              { name: "Priya Sharma", role: "Head of Product", emoji: "👩‍💼" },
              { name: "Rahul Verma", role: "Operations Lead", emoji: "🛵" },
            ].map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center transition hover:shadow-md"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-4xl">
                  {member.emoji}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="mt-1 text-sm text-orange-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold tracking-wider text-orange-600">LOVED BY CUSTOMERS</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Real words from real people
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                text: "The easiest food app I’ve ever used. Clean design and super fast delivery. Mama’s Kitchen is now my daily go-to!",
                name: "Sneha R.",
                city: "Delhi",
              },
              {
                text: "I love how they highlight quality restaurants. Never had a bad order yet. The ratings are actually trustworthy.",
                name: "Arjun M.",
                city: "Noida",
              },
              {
                text: "Finally an app that feels made for Indians. Simple, fast and the customer support actually replies!",
                name: "Neha K.",
                city: "Gurgaon",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-2xl bg-white p-7 shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 text-orange-400 text-lg">★★★★★</div>
                <p className="mt-4 text-gray-700 leading-relaxed">“{t.text}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-sm font-bold text-orange-700">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-28">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Hungry yet?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-orange-100">
            Thousands of delicious meals are just a few taps away.  
            Your next favourite restaurant is waiting.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-orange-600 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              Order Now
              <span>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
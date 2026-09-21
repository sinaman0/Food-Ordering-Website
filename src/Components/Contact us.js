import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-700">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
              GET IN TOUCH
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Let’s talk about
              <span className="text-orange-600"> food.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              Have a question, feedback, or just want to say hello?
              We’d love to hear from you.
            </p>
          </div>
        </div>
      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left - Contact Info */}
            <div>
              <p className="text-sm font-semibold tracking-wider text-orange-600">
                CONTACT US
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We’re here to
                <span className="text-orange-600"> help.</span>
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed max-w-md">
                Whether you have a question about an order, need help
                with something, or simply want to share your feedback,
                feel free to reach out. We usually reply within a few hours.
              </p>

              <div className="mt-10 space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                    📧
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:hello@mamaskitchen.com"
                      className="mt-1 block text-orange-600 hover:underline"
                    >
                      hello@mamaskitchen.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="mt-1 block text-orange-600 hover:underline"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="mt-1 text-gray-600">New Delhi, India</p>
                  </div>
                </div>
              </div>

              {/* Extra note */}
              <div className="mt-12 rounded-2xl border border-orange-100 bg-orange-50 p-6">
                <p className="text-sm font-medium text-orange-800">
                  💡 Tip: For faster help with an existing order, please include your Order ID in the message.
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <h3 className="text-xl font-bold text-gray-900">
                Send us a message
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Fill out the form and we’ll get back to you soon.
              </p>

              <form className="mt-8 space-y-5">
                {/* Name */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg active:translate-y-0"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Looking for something else?
          </h3>
          <p className="mt-2 text-gray-600">
            Check out our most popular pages
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Browse Restaurants
            </Link>
            <Link
              to="/about"
              className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
import React from "react";

export default function Participate() {
  return (
    <section id="participate" className="py-20 px-6 bg-black text-center">
      <h2 className="text-4xl font-bold mb-10">How to Participate</h2>
      <ol className="space-y-6 max-w-2xl mx-auto text-left list-decimal list-inside">
        <li>Form a team of 2–5 members.</li>
        <li>Pick a problem statement from our themes (climate, education, health, etc.).</li>
        <li>Build your solution in 48 hours during the hackathon.</li>
        <li>Submit and pitch it via our online platform.</li>
      </ol>
      <a
        href="https://forms.gle/exampleform"
        className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full text-white font-semibold hover:scale-105 transition-transform"
      >
        Register Your Team
      </a>
    </section>
  );
}

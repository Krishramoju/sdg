import React from "react";

export default function Prizes() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-800 to-purple-900 text-center">
      <h2 className="text-4xl font-bold mb-10">Prizes & Perks 🎁</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white/10 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">UN-Linked Internships</h3>
          <p>Work with NGOs tackling real-world global challenges.</p>
        </div>
        <div className="bg-white/10 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Cash Rewards</h3>
          <p>Win up to $5,000 in funding for your project idea!</p>
        </div>
        <div className="bg-white/10 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Global Recognition</h3>
          <p>Pitch your project to global agencies and investors.</p>
        </div>
      </div>
    </section>
  );
}

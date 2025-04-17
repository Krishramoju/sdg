import React from "react";

export default function Hero() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white px-4">
      <div className="backdrop-blur-md bg-white/10 p-10 rounded-3xl border border-white/20 shadow-2xl max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6 tracking-tight">
          GNEC Hackathon 2025 🚀
        </h1>
        <p className="text-xl mb-8">
          Compete to Win NGO Internships & UN Affiliated Prizes!
        </p>
        <a href="#participate" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-white text-lg hover:scale-105 transition-transform">
          Register Now
        </a>
      </div>
    </div>
  );
}

"use client";

function Card({ title, desp, image }) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-gray-300">{desp}</p>
      </div>
    </div>
  );
}

export default Card;

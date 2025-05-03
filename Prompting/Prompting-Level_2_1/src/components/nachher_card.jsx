import React from "react";

const Button = ({ label }) => (
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
    {label}
  </button>
);

const Card_Update = () => (
  <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
    <h2 className="text-xl font-bold mb-2">Card Titel</h2>
    <p className="text-gray-700 mb-4">
      Dies ist eine stilvolle Beschreibung der Card-Komponente.
    </p>
    <Button label="Mehr erfahren" />
  </div>
);

export default Card_Update;

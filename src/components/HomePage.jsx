import React from "react";
import { plants } from "../javascript/data/plants";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Explore Our Herbal Plants</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {plants.map((plant) => (
            <div
              key={plant.name}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
              onClick={() => navigate(`/plant/${plant.name.toLowerCase()}`)}
            >
              <img src={plant.image} alt={plant.name} className="w-full h-48 object-cover rounded" />
              <h2 className="text-2xl mt-4">{plant.name}</h2>
              <p className="text-gray-600">{plant.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;

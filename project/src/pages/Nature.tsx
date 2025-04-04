import React from 'react';
import { Trees as Tree } from 'lucide-react';

const Nature = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Patrimoine Naturel et Biodiversité
      </h1>

      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5"
          alt="Forêt des Vosges"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Richesse Naturelle
            </h2>
            <p className="text-gray-700 mb-4">
              Le Parc naturel régional des Ballons des Vosges abrite une biodiversité exceptionnelle,
              avec des écosystèmes variés allant des forêts de montagne aux chaumes d'altitude.
              Cette diversité naturelle constitue un patrimoine précieux qu'il est essentiel de
              préserver.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Forêts anciennes</li>
              <li>Chaumes et prairies d'altitude</li>
              <li>Tourbières et zones humides</li>
              <li>Falaises et éboulis</li>
              <li>Cours d'eau et lacs</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Chiffres Clés
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800">Espèces protégées</h3>
              <p className="text-2xl font-bold text-green-600">245</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800">Zones Natura 2000</h3>
              <p className="text-2xl font-bold text-green-600">15</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800">Surface forestière</h3>
              <p className="text-2xl font-bold text-green-600">65%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Carte Interactive des Milieux Naturels
        </h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
          {/* Ici, vous intégreriez votre carte interactive */}
          <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
            <Tree className="w-12 h-12 text-green-600" />
            <p className="ml-4 text-gray-600">Carte interactive à intégrer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nature;
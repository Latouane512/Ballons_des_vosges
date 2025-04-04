import React from 'react';
import { Building } from 'lucide-react';

const Planning = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Aménagement du Territoire
      </h1>

      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8"
          alt="Vue aérienne du territoire"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Planification Territoriale
            </h2>
            <p className="text-gray-700 mb-4">
              L'aménagement du territoire du Parc naturel régional des Ballons des Vosges vise à
              concilier le développement local avec la préservation des espaces naturels et du
              patrimoine. Cette démarche s'appuie sur une planification rigoureuse et une
              concertation avec l'ensemble des acteurs.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Documents d'urbanisme</li>
              <li>Zones d'activités</li>
              <li>Infrastructures de transport</li>
              <li>Équipements publics</li>
              <li>Zones protégées</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Données Territoriales
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800">Communes</h3>
              <p className="text-2xl font-bold text-green-600">197</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800">Intercommunalités</h3>
              <p className="text-2xl font-bold text-green-600">15</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800">Documents d'urbanisme</h3>
              <p className="text-2xl font-bold text-green-600">89%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Carte Interactive de l'Aménagement
        </h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
          {/* Ici, vous intégreriez votre carte interactive */}
          <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
            <Building className="w-12 h-12 text-green-600" />
            <p className="ml-4 text-gray-600">Carte interactive à intégrer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planning;
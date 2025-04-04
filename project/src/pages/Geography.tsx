import React from 'react';
import { Mountain } from 'lucide-react';

const Geography = () => {
  const keyFigures = [
    { label: 'Superficie', value: '2921 km²' },
    { label: 'Population', value: '238 000 habitants' },
    { label: 'Point culminant', value: '1424 m (Grand Ballon)' },
    { label: 'Point le plus bas', value: '200 m' },
    { label: 'Altitude moyenne', value: '650 m' },
    { label: 'Secteurs paysagers', value: '9 unités' },
    { label: 'Sentiers de randonnée', value: '5000 km' },
    { label: 'Cours d\'eau', value: '1200 km' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Géographie du Territoire
      </h1>

      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1572875198816-5f48845774e4"
          alt="Panorama des Ballons des Vosges"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {keyFigures.map((figure, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-green-700 mb-2">{figure.label}</h3>
            <p className="text-3xl font-bold text-gray-800">{figure.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Story Map Interactive
        </h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
          {/* Ici, vous intégreriez votre Story Map */}
          <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
            <Mountain className="w-12 h-12 text-green-600" />
            <p className="ml-4 text-gray-600">Story Map à intégrer</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Map Tour
          </h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
            {/* Ici, vous intégreriez votre Map Tour */}
            <div className="flex items-center justify-center h-48 bg-gray-100 rounded-lg">
              <p className="text-gray-600">Map Tour à intégrer</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Dashboard
          </h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
            {/* Ici, vous intégreriez votre Dashboard */}
            <div className="flex items-center justify-center h-48 bg-gray-100 rounded-lg">
              <p className="text-gray-600">Dashboard à intégrer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geography;
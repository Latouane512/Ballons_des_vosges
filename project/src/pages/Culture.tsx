import React from 'react';
import { MapPin } from 'lucide-react';

const Culture = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Patrimoine Culturel et Paysager
      </h1>

      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1504615755583-2916b52192a3"
          alt="Village traditionnel des Vosges"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Description du Patrimoine
            </h2>
            <p className="text-gray-700 mb-4">
              Le Parc naturel régional des Ballons des Vosges abrite un riche patrimoine culturel
              qui témoigne de son histoire et de ses traditions. Des villages pittoresques aux
              fermes-auberges traditionnelles, en passant par les sites historiques et les
              savoir-faire artisanaux, ce territoire préserve un héritage unique.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Architecture traditionnelle vosgienne</li>
              <li>Sites historiques et religieux</li>
              <li>Traditions et folklore local</li>
              <li>Artisanat et savoir-faire</li>
              <li>Gastronomie régionale</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Statistiques Clés
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800">Monuments historiques</h3>
              <p className="text-2xl font-bold text-green-600">197</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800">Sites classés</h3>
              <p className="text-2xl font-bold text-green-600">45</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800">Musées</h3>
              <p className="text-2xl font-bold text-green-600">28</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Carte Interactive du Patrimoine
        </h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
          {/* Ici, vous intégreriez votre carte interactive */}
          <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
            <MapPin className="w-12 h-12 text-green-600" />
            <p className="ml-4 text-gray-600">Carte interactive à intégrer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
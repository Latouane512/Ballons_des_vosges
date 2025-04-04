import React from 'react';

const Introduction = () => {
  return (
    <div className="max-w-4xl mx-auto prose prose-green">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        L'Observatoire du Territoire des Ballons des Vosges
      </h1>
      
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1464207687429-7505649dae38"
          alt="Paysage des Ballons des Vosges"
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
        />
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-green-700">Pourquoi un Observatoire ?</h2>
          <p>
            L'Observatoire du Territoire du Parc naturel régional des Ballons des Vosges est un outil
            essentiel pour comprendre, suivre et préserver ce territoire d'exception. Il permet de :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Suivre l'évolution du territoire dans le temps</li>
            <li>Évaluer l'impact des actions menées</li>
            <li>Anticiper les changements et adapter nos stratégies</li>
            <li>Partager les connaissances avec tous les acteurs</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-700">Comment fonctionne-t-il ?</h2>
          <p>
            L'Observatoire collecte, analyse et partage des données sur différents aspects du
            territoire :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Données géographiques et démographiques</li>
            <li>Inventaires du patrimoine naturel et culturel</li>
            <li>Indicateurs environnementaux</li>
            <li>Évolution des paysages</li>
            <li>Données socio-économiques</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-700">Les objectifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800">Protection</h3>
              <p>Préserver les richesses naturelles et culturelles du territoire</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800">Connaissance</h3>
              <p>Approfondir notre compréhension du territoire et de ses enjeux</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800">Partage</h3>
              <p>Diffuser l'information auprès de tous les acteurs du territoire</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800">Action</h3>
              <p>Guider les décisions et les actions de préservation</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Introduction;
import React, { useState } from 'react';

function getPlantingGuide(month) {
  const plantingByMonth = {
    0: [
      { name: 'Laitue', difficulty: 'facile', wateringFreq: 'régulier', sunlight: 'partiel' },
      { name: 'Épinards', difficulty: 'facile', wateringFreq: 'modéré', sunlight: 'partiel' },
      { name: 'Oignons (en serre)', difficulty: 'moyen', wateringFreq: 'faible', sunlight: 'plein' }
    ],
    1: [
      { name: 'Tomates (en serre)', difficulty: 'moyen', wateringFreq: 'régulier', sunlight: 'plein' },
      { name: 'Poivrons', difficulty: 'moyen', wateringFreq: 'régulier', sunlight: 'plein' },
      { name: 'Fèves', difficulty: 'facile', wateringFreq: 'modéré', sunlight: 'plein' }
    ],
    2: [
      { name: 'Carottes', difficulty: 'facile', wateringFreq: 'modéré', sunlight: 'plein' },
      { name: 'Radis', difficulty: 'facile', wateringFreq: 'régulier', sunlight: 'plein' },
      { name: 'Pommes de terre', difficulty: 'facile', wateringFreq: 'modéré', sunlight: 'plein' }
    ],
    3: [
      { name: 'Tomates', difficulty: 'moyen', wateringFreq: 'régulier', sunlight: 'plein' },
      { name: 'Concombres', difficulty: 'facile', wateringFreq: 'régulier', sunlight: 'plein' },
      { name: 'Basilic', difficulty: 'facile', wateringFreq: 'régulier', sunlight: 'plein' }
    ],
    4: [
      { name: 'Melons', difficulty: 'moyen', wateringFreq: 'régulier', sunlight: 'plein' },
      { name: 'Pastèques', difficulty: 'moyen', wateringFreq: 'régulier', sunlight: 'plein' },
      { name: 'Aubergines', difficulty: 'moyen', wateringFreq: 'régulier', sunlight: 'plein' }
    ],
    5: [
      { name: 'Courgettes', difficulty: 'facile', wateringFreq: 'régulier', sunlight: 'plein' },
      { name: 'Haricots', difficulty: 'facile', wateringFreq: 'modéré', sunlight: 'plein' },
      { name: 'Maïs', difficulty: 'moyen', wateringFreq: 'modéré', sunlight: 'plein' }
    ],
    6: [
      { name: 'Choux', difficulty: 'moyen', wateringFreq: 'régulier', sunlight: 'plein' },
      { name: 'Brocolis', difficulty: 'moyen', wateringFreq: 'régulier', sunlight: 'plein' },
      { name: 'Betteraves', difficulty: 'facile', wateringFreq: 'modéré', sunlight: 'plein' }
    ],
    7: [
      { name: 'Radis', difficulty: 'facile', wateringFreq: 'régulier', sunlight: 'plein' },
      { name: 'Épinards', difficulty: 'facile', wateringFreq: 'modéré', sunlight: 'partiel' },
      { name: 'Laitue d\'automne', difficulty: 'facile', wateringFreq: 'régulier', sunlight: 'partiel' }
    ],
    8: [
      { name: 'Navets', difficulty: 'facile', wateringFreq: 'modéré', sunlight: 'plein' },
      { name: 'Choux-fleurs', difficulty: 'moyen', wateringFreq: 'régulier', sunlight: 'plein' },
      { name: 'Fèves', difficulty: 'facile', wateringFreq: 'modéré', sunlight: 'plein' }
    ],
    9: [
      { name: 'Oignons', difficulty: 'facile', wateringFreq: 'faible', sunlight: 'plein' },
      { name: 'Ail', difficulty: 'facile', wateringFreq: 'faible', sunlight: 'plein' },
      { name: 'Petits pois', difficulty: 'facile', wateringFreq: 'modéré', sunlight: 'plein' }
    ],
    10: [
      { name: 'Fèves', difficulty: 'facile', wateringFreq: 'modéré', sunlight: 'plein' },
      { name: 'Épinards', difficulty: 'facile', wateringFreq: 'modéré', sunlight: 'partiel' },
      { name: 'Laitue', difficulty: 'facile', wateringFreq: 'régulier', sunlight: 'partiel' }
    ],
    11: [
      { name: 'Choux', difficulty: 'moyen', wateringFreq: 'régulier', sunlight: 'plein' },
      { name: 'Carottes', difficulty: 'facile', wateringFreq: 'modéré', sunlight: 'plein' },
      { name: 'Navets', difficulty: 'facile', wateringFreq: 'modéré', sunlight: 'plein' }
    ],
  };
  return plantingByMonth[month] || [];
}

function PlantingCalendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const plantingSuggestions = getPlantingGuide(selectedMonth);

  

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 md:p-6 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-green-800 mb-2 flex items-center justify-center gap-3">
            <span className="text-4xl">🌱</span>
            Calendrier de Plantation
          </h2>
        </div>

        {/* Sélecteur de mois */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-xl">📅</span>
            Sélectionnez un mois
          </h3>
         <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
  {monthNames.map((month, index) => (
    <button
      key={index}
      onClick={() => setSelectedMonth(index)}
      className={`min-w-[120px] p-3 rounded-lg font-medium transition-all text-sm md:text-base ${
        selectedMonth === index
          ? 'bg-green-600 text-white shadow-md scale-105'
          : 'bg-gray-50 text-gray-700 hover:bg-green-100 hover:shadow-sm'
      }`}
    >
      {month}
    </button>
  ))}
</div>


          </div>
        </div>

        {/* Tableau des plantes */}
 <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-6 flex items-center justify-center gap-2">
            <span className="text-2xl">🌿</span> 
            Plantes recommandées en {monthNames[selectedMonth]}
          </h3>

          <div className="flex justify-center overflow-x-auto">
            <table className="min-w-[600px] border-collapse [border-spacing:0_8px] text-center">
              <thead>
                <tr className="border-b-2 border-green-200">
                  <th className="text-center py-4 px-6 text-green-700 font-semibold text-sm md:text-base">
                    🌱 Plante
                  </th>
                  <th className="text-center py-4 px-6 text-green-700 font-semibold text-sm md:text-base">
                    💧 Arrosage
                  </th>
                  <th className="text-center py-4 px-6 text-green-700 font-semibold text-sm md:text-base">
                    ☀️ Ensoleillement
                  </th>
                </tr>
              </thead>
              <tbody>
                {plantingSuggestions.map((plant, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all cursor-pointer"
                  >
                    <td className="py-4 px-6 font-semibold text-gray-800">{plant.name}</td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                        💧 {plant.wateringFreq}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-3 py-1.5 rounded-full bg-yellow-50 text-yellow-700 text-sm font-medium">
                        {plant.sunlight === 'plein' ? '☀️' : '⛅'} {plant.sunlight}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {plantingSuggestions.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <span className="text-6xl block mb-4 opacity-30">🌱</span>
              <p className="text-lg">Aucune plantation recommandée pour ce mois</p>
            </div>
          )}
        </div>

      </div>
    
  );
}

export default PlantingCalendar;

import React, { useState } from 'react';
import { ChevronRightIcon, FilterIcon, SearchIcon } from 'lucide-react';
export function BehaviorLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const behaviors = [{
    id: 1,
    category: 'Aggression',
    title: 'Hitting & Biting',
    ageRange: '1-4 years',
    common: true
  }, {
    id: 2,
    category: 'Sleep',
    title: 'Night Waking',
    ageRange: '6 months-3 years',
    common: true
  }, {
    id: 3,
    category: 'Emotions',
    title: 'Tantrums',
    ageRange: '1-5 years',
    common: true
  }, {
    id: 4,
    category: 'Eating',
    title: 'Picky Eating',
    ageRange: '2-6 years',
    common: true
  }, {
    id: 5,
    category: 'Development',
    title: 'Potty Training Resistance',
    ageRange: '2-4 years',
    common: false
  }, {
    id: 6,
    category: 'Social',
    title: 'Sharing Difficulties',
    ageRange: '2-5 years',
    common: false
  }];
  const filteredBehaviors = behaviors.filter(behavior => behavior.title.toLowerCase().includes(searchTerm.toLowerCase()) || behavior.category.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div className="w-full pt-4">
      <h2 className="text-xl font-medium text-slate-800 mb-2">
        Behavior Library
      </h2>
      <p className="text-slate-600 mb-6">
        Browse expert guidance on common childhood behaviors
      </p>
      <div className="relative mb-6">
        <input type="text" placeholder="Search behaviors..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" />
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <FilterIcon className="h-5 w-5 text-slate-400" />
        </button>
      </div>
      <div className="space-y-3">
        {filteredBehaviors.map(behavior => <div key={behavior.id} className="border border-slate-200 rounded-lg p-4 bg-white flex justify-between items-center hover:border-indigo-300 cursor-pointer transition-colors">
            <div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-0.5 text-xs font-medium rounded ${behavior.category === 'Aggression' ? 'bg-red-100 text-red-800' : behavior.category === 'Sleep' ? 'bg-blue-100 text-blue-800' : behavior.category === 'Emotions' ? 'bg-purple-100 text-purple-800' : behavior.category === 'Eating' ? 'bg-green-100 text-green-800' : behavior.category === 'Development' ? 'bg-amber-100 text-amber-800' : 'bg-indigo-100 text-indigo-800'}`}>
                  {behavior.category}
                </span>
                {behavior.common && <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs">
                    Common
                  </span>}
              </div>
              <h3 className="font-medium text-slate-800 mt-1">
                {behavior.title}
              </h3>
              <div className="text-sm text-slate-500 mt-0.5">
                Typical age: {behavior.ageRange}
              </div>
            </div>
            <ChevronRightIcon className="h-5 w-5 text-slate-400" />
          </div>)}
      </div>
    </div>;
}
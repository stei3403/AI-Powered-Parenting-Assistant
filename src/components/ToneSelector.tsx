import React from 'react';
interface ToneSelectorProps {
  selectedTone: string;
  onSelectTone: (tone: string) => void;
}
export function ToneSelector({
  selectedTone,
  onSelectTone
}: ToneSelectorProps) {
  const tones = [{
    id: 'balanced',
    name: 'Balanced',
    description: 'Evidence-based approach with moderate guidance'
  }, {
    id: 'gentle',
    name: 'Gentle Parenting',
    description: 'Empathetic, child-led approach'
  }, {
    id: 'structured',
    name: 'Structured',
    description: 'Clear boundaries and consistent routines'
  }];
  return <div className="w-full">
      <h3 className="text-sm font-medium text-slate-700 mb-2">
        Response tone preference
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {tones.map(tone => <button key={tone.id} onClick={() => onSelectTone(tone.id)} className={`border rounded-lg p-3 text-left transition-colors ${selectedTone === tone.id ? 'border-indigo-600 bg-indigo-50 ring-1 ring-indigo-500' : 'border-slate-200 hover:border-slate-300'}`}>
            <div className="font-medium text-slate-800">{tone.name}</div>
            <div className="text-xs text-slate-500 mt-1">
              {tone.description}
            </div>
          </button>)}
      </div>
    </div>;
}
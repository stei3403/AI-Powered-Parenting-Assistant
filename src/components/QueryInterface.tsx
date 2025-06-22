import React, { useState } from 'react';
import { SendIcon } from 'lucide-react';
interface QueryInterfaceProps {
  onSubmit: (query: string) => void;
}
export function QueryInterface({
  onSubmit
}: QueryInterfaceProps) {
  const [query, setQuery] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query);
    }
  };
  const placeholders = ['Why is my 2-year-old hitting his sister?', "How to handle a 4-year-old's tantrums in public?", "My 3-year-old won't sleep through the night", 'Tips for picky eaters'];
  const randomPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];
  return <div className="w-full">
      <h2 className="text-xl font-medium text-slate-800 mb-3">
        Ask a parenting question
      </h2>
      <p className="text-slate-600 mb-6">
        Get expert-backed advice for your parenting challenges
      </p>
      <form onSubmit={handleSubmit} className="relative">
        <textarea value={query} onChange={e => setQuery(e.target.value)} placeholder={randomPlaceholder} className="w-full p-4 pr-12 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none h-32" />
        <button type="submit" disabled={!query.trim()} className={`absolute bottom-4 right-4 rounded-full p-2 ${query.trim() ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-400'}`}>
          <SendIcon className="h-5 w-5" />
        </button>
      </form>
      <div className="mt-3 text-sm text-slate-500 flex justify-between">
        <span>Be specific for better advice</span>
        <span>{query.length}/500</span>
      </div>
    </div>;
}
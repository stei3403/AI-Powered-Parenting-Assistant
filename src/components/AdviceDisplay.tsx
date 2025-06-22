import React from 'react';
import { ArrowLeftIcon } from 'lucide-react';

interface AdviceDisplayProps {
  query: string;
  tone: string;
  response: string;
  loading: boolean;
  onReset: () => void;
}

export function AdviceDisplay({
  query,
  tone,
  response,
  loading,
  onReset
}: AdviceDisplayProps) {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b border-slate-200 flex items-center">
        <button onClick={onReset} className="mr-3 text-slate-500 hover:text-slate-700">
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <h3 className="font-medium text-slate-800 truncate">{query}</h3>
      </div>

      <div className="p-5 space-y-6">
        {loading ? (
          <p className="text-slate-600">Thinking...</p>
        ) : (
          <>
            <div>
              <h4 className="font-medium text-slate-800 mb-2">Advice</h4>
              <p className="text-slate-600 whitespace-pre-wrap">{response}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

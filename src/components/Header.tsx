import React from 'react';
import { BrainIcon } from 'lucide-react';
export function Header() {
  return <header className="w-full bg-white border-b border-slate-200 py-4 px-4 shadow-sm">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BrainIcon className="h-8 w-8 text-indigo-600" />
          <h1 className="text-xl font-semibold text-slate-800">NurtureAI</h1>
        </div>
        <div className="text-sm text-slate-500">
          Expert-backed parenting advice
        </div>
      </div>
    </header>;
}
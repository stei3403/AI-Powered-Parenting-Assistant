import React from 'react';
import { SearchIcon, BookOpenIcon, SunriseIcon } from 'lucide-react';
interface NavigationProps {
  activeTab: string;
  onChangeTab: (tab: string) => void;
}
export function Navigation({
  activeTab,
  onChangeTab
}: NavigationProps) {
  return <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-2 shadow-lg">
      <div className="max-w-3xl mx-auto flex justify-around">
        <button onClick={() => onChangeTab('ask')} className={`flex flex-col items-center p-2 ${activeTab === 'ask' ? 'text-indigo-600' : 'text-slate-500'}`}>
          <SearchIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Ask</span>
        </button>
        <button onClick={() => onChangeTab('library')} className={`flex flex-col items-center p-2 ${activeTab === 'library' ? 'text-indigo-600' : 'text-slate-500'}`}>
          <BookOpenIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Library</span>
        </button>
        <button onClick={() => onChangeTab('daily')} className={`flex flex-col items-center p-2 ${activeTab === 'daily' ? 'text-indigo-600' : 'text-slate-500'}`}>
          <SunriseIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Daily</span>
        </button>
      </div>
    </nav>;
}
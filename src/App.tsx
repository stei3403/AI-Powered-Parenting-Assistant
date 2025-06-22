import React, { useState } from 'react';
import { Header } from './components/Header';
import { QueryInterface } from './components/QueryInterface';
import { AdviceDisplay } from './components/AdviceDisplay';
import { Navigation } from './components/Navigation';
import { BehaviorLibrary } from './components/BehaviorLibrary';
import { DailyWisdom } from './components/DailyWisdom';
import { ToneSelector } from './components/ToneSelector';
export function App() {
  const [activeTab, setActiveTab] = useState('ask');
  const [selectedTone, setSelectedTone] = useState('balanced');
  const [query, setQuery] = useState('');
  const [showAdvice, setShowAdvice] = useState(false);
  const handleSubmitQuery = (question: string) => {
    setQuery(question);
    setShowAdvice(true);
  };
  return <div className="flex flex-col w-full min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 pb-20">
        {activeTab === 'ask' && <div className="space-y-6 mt-6">
            <QueryInterface onSubmit={handleSubmitQuery} />
            {!showAdvice && <div className="mt-8">
                <ToneSelector selectedTone={selectedTone} onSelectTone={setSelectedTone} />
              </div>}
            {showAdvice && <AdviceDisplay query={query} tone={selectedTone} onReset={() => setShowAdvice(false)} />}
          </div>}
        {activeTab === 'library' && <BehaviorLibrary />}
        {activeTab === 'daily' && <DailyWisdom />}
      </main>
      <Navigation activeTab={activeTab} onChangeTab={setActiveTab} />
    </div>;
}
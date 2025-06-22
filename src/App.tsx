import React, { useState } from 'react';
import { Header } from './components/Header';
import { QueryInterface } from './components/QueryInterface';
import { AdviceDisplay } from './components/AdviceDisplay';
import { Navigation } from './components/Navigation';
import { BehaviorLibrary } from './components/BehaviorLibrary';
import { DailyWisdom } from './components/DailyWisdom';
import { ToneSelector } from './components/ToneSelector';
import { getParentingAdvice } from './firebase'; // ✅ import your callable function

export function App() {
  const [activeTab, setActiveTab] = useState('ask');
  const [selectedTone, setSelectedTone] = useState('balanced');
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAdvice, setShowAdvice] = useState(false);

  const handleSubmitQuery = async (question: string) => {
  setQuery(question);
  setLoading(true);
  setShowAdvice(true);

  try {
    const result: any = await getParentingAdvice({ question });
    setResponse(result.data.answer);

    // ✅ Log usage details
    console.log("Token usage:", result.data.usage);
    console.log(`Estimated cost: ~$${(result.data.usage?.estimatedCost ?? 0).toFixed(4)}`);
  } catch (err) {
    console.error(err);
    setResponse("Something went wrong. Please try again later.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 pb-20">
        {activeTab === 'ask' && (
          <div className="space-y-6 mt-6">
            <QueryInterface onSubmit={handleSubmitQuery} />
            {!showAdvice && (
              <div className="mt-8">
                <ToneSelector selectedTone={selectedTone} onSelectTone={setSelectedTone} />
              </div>
            )}
            {showAdvice && (
              <AdviceDisplay
                query={query}
                tone={selectedTone}
                response={response}
                loading={loading}
                onReset={() => {
                  setShowAdvice(false);
                  setQuery('');
                  setResponse('');
                }}
              />
            )}
          </div>
        )}
        {activeTab === 'library' && <BehaviorLibrary />}
        {activeTab === 'daily' && <DailyWisdom />}
      </main>
      <Navigation activeTab={activeTab} onChangeTab={setActiveTab} />
    </div>
  );
}

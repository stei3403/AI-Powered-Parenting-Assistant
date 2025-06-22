import React, { Children } from 'react';
import { ArrowLeftIcon, BookOpenIcon, QuoteIcon } from 'lucide-react';
interface AdviceDisplayProps {
  query: string;
  tone: string;
  onReset: () => void;
}
export function AdviceDisplay({
  query,
  tone,
  onReset
}: AdviceDisplayProps) {
  // This would normally come from an API, but we're mocking it for demo purposes
  const getMockedResponse = () => {
    if (query.toLowerCase().includes('hitting')) {
      return {
        summary: 'Hitting is a common behavior in toddlers who are still developing emotional regulation and language skills. Your child may be hitting their sibling due to frustration, attention-seeking, or boundary testing.',
        strategies: ["Stay calm and firmly state 'No hitting, hitting hurts'", 'Separate the children when necessary', "Help identify emotions: 'You seem angry. Use words instead of hitting'", 'Praise positive interactions between siblings', 'Teach alternative ways to express frustration'],
        expert: {
          name: 'Dr. Becky Kennedy',
          quote: "When young children hit, they're not being 'bad' - they're dysregulated and need our help to learn better ways to express their big feelings.",
          source: 'Good Inside'
        }
      };
    } else {
      return {
        summary: 'Your question relates to a common developmental challenge many parents face. Children are still learning to regulate their emotions and behaviors, and your consistent, loving guidance will help them develop these important skills.',
        strategies: ['Maintain consistent boundaries while acknowledging feelings', 'Model the behavior you want to see', 'Use positive reinforcement for desired behaviors', 'Create a calm-down space for emotional regulation', 'Ensure your child is getting enough sleep and proper nutrition'],
        expert: {
          name: 'Dr. Janet Lansbury',
          quote: 'Our children need us to be their calm, confident leaders, especially during challenging moments. They learn more from how we handle situations than from what we say.',
          source: 'Elevating Child Care'
        }
      };
    }
  };
  const response = getMockedResponse();
  return <div className="w-full bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b border-slate-200 flex items-center">
        <button onClick={onReset} className="mr-3 text-slate-500 hover:text-slate-700">
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <h3 className="font-medium text-slate-800 truncate">{query}</h3>
      </div>
      <div className="p-5 space-y-6">
        <div>
          <h4 className="font-medium text-slate-800 mb-2">
            Understanding the behavior
          </h4>
          <p className="text-slate-600">{response.summary}</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-800 mb-2">
            Recommended strategies
          </h4>
          <ul className="space-y-2">
            {response.strategies.map((strategy, index) => <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 text-xs font-medium mr-2 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-slate-600">{strategy}</span>
              </li>)}
          </ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <div className="flex items-start">
            <QuoteIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
            <div>
              <p className="text-slate-600 italic">{response.expert.quote}</p>
              <div className="mt-2 flex items-center">
                <span className="text-sm font-medium text-slate-700">
                  {response.expert.name}
                </span>
                <span className="mx-2 text-slate-400">•</span>
                <span className="text-sm text-slate-500 flex items-center">
                  <BookOpenIcon className="h-3.5 w-3.5 mr-1" />
                  {response.expert.source}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
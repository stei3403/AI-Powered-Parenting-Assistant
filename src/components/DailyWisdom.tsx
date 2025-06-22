import React, { Children } from 'react';
import { CalendarIcon, BookmarkIcon, ShareIcon, ChevronRightIcon } from 'lucide-react';
export function DailyWisdom() {
  // Normally this would come from an API based on the child's age
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  return <div className="w-full pt-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium text-slate-800">Daily Wisdom</h2>
        <div className="flex items-center text-sm text-slate-500">
          <CalendarIcon className="h-4 w-4 mr-1" />
          {formattedDate}
        </div>
      </div>
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        <div className="h-36 bg-indigo-600 flex items-center justify-center p-6">
          <p className="text-white text-xl font-medium text-center leading-relaxed">
            "Children are not things to be molded, but people to be unfolded."
          </p>
        </div>
        <div className="p-5">
          <h3 className="font-medium text-lg text-slate-800">
            Building Independence Through Choice
          </h3>
          <div className="flex items-center space-x-2 mt-2 mb-4">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="Dr. Sarah Miller" className="h-6 w-6 rounded-full object-cover" />
            <span className="text-sm text-slate-600">
              Dr. Sarah Miller, Child Psychologist
            </span>
          </div>
          <p className="text-slate-600">
            Offering limited choices helps toddlers develop decision-making
            skills and reduces power struggles. Instead of asking open-ended
            questions, try offering two acceptable options: "Would you like to
            wear the red shirt or the blue shirt today?"
          </p>
          <h4 className="font-medium text-slate-800 mt-4 mb-2">
            Try this today:
          </h4>
          <p className="text-slate-600 mb-4">
            Look for 3 opportunities to offer your child age-appropriate
            choices. Notice how this affects their cooperation and confidence.
          </p>
          <div className="flex justify-between pt-4 border-t border-slate-100">
            <button className="flex items-center text-slate-600 text-sm">
              <BookmarkIcon className="h-4 w-4 mr-1" />
              Save
            </button>
            <button className="flex items-center text-slate-600 text-sm">
              <ShareIcon className="h-4 w-4 mr-1" />
              Share
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-medium text-slate-800 mb-3">Previous wisdom</h3>
        <div className="space-y-3">
          {[{
          date: 'May 15',
          title: 'Responding to Big Emotions'
        }, {
          date: 'May 14',
          title: 'The Power of Routines'
        }, {
          date: 'May 13',
          title: 'Positive Discipline Techniques'
        }].map((item, index) => <div key={index} className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
              <div>
                <div className="text-xs text-slate-500">{item.date}</div>
                <div className="font-medium text-slate-800">{item.title}</div>
              </div>
              <ChevronRightIcon className="h-5 w-5 text-slate-400" />
            </div>)}
        </div>
      </div>
    </div>;
}
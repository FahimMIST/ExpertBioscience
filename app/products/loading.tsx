import React from 'react';

export default function Loading() {
  return (
    <div id="product-grid-skeleton-container" className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Banner/Header Skeleton */}
        <div id="grid-header-skeleton" className="space-y-4 text-center max-w-2xl mx-auto animate-pulse">
          <div className="h-4 w-32 bg-slate-200 rounded-full mx-auto"></div>
          <div className="h-10 w-3/4 bg-slate-300 rounded-2xl mx-auto"></div>
          <div className="h-5 w-5/6 bg-slate-200 rounded-xl mx-auto"></div>
        </div>

        {/* Filter controls skeleton */}
        <div id="filter-skeleton" className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 animate-pulse">
          <div className="h-10 w-full sm:w-64 bg-slate-200 rounded-xl"></div>
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="h-9 w-24 bg-slate-200 rounded-xl"></div>
            <div className="h-9 w-24 bg-slate-200 rounded-xl"></div>
            <div className="h-9 w-24 bg-slate-200 rounded-xl"></div>
          </div>
        </div>

        {/* Product Cards Grid Skeleton */}
        <div id="cards-grid-skeleton" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i} 
              id={`card-skeleton-${i}`}
              className="bg-white rounded-[24px] border border-slate-150 p-5 space-y-4 shadow-sm animate-pulse flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Category tag and weight indicator */}
                <div className="flex justify-between items-center">
                  <div className="h-5 w-20 bg-slate-200 rounded-full"></div>
                  <div className="h-4 w-12 bg-slate-200 rounded-md"></div>
                </div>

                {/* Main visualization pouch skeleton */}
                <div className="h-44 rounded-xl bg-slate-200 flex flex-col justify-between p-4">
                  <div className="flex justify-between items-start">
                    <div className="h-6 w-16 bg-slate-300/40 rounded-md"></div>
                    <div className="h-5 w-12 bg-slate-300/40 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-10 bg-slate-300/40 rounded-md"></div>
                    <div className="h-6 w-28 bg-slate-300/40 rounded-md"></div>
                  </div>
                </div>

                {/* Title */}
                <div className="h-6 w-2/3 bg-slate-300 rounded-lg"></div>

                {/* Description lines */}
                <div className="space-y-2">
                  <div className="h-4 w-full bg-slate-200 rounded-md"></div>
                  <div className="h-4 w-5/6 bg-slate-200 rounded-md"></div>
                </div>
              </div>

              {/* Action buttons skeleton */}
              <div className="flex gap-3 pt-4 border-t border-slate-100 mt-4">
                <div className="h-10 w-1/2 bg-slate-200 rounded-xl"></div>
                <div className="h-10 w-1/2 bg-slate-200 rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

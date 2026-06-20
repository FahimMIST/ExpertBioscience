import React from 'react';

export default function Loading() {
  return (
    <div id="product-detail-skeleton-container" className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Back Link Skeleton */}
        <div id="back-link-skeleton" className="flex items-center gap-2 animate-pulse mb-6">
          <div className="h-4 w-4 bg-slate-200 rounded-full"></div>
          <div className="h-4 w-24 bg-slate-200 rounded-md"></div>
        </div>

        {/* Main Product Column Layout */}
        <div id="detail-grid-skeleton" className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column (Pouch Visualization & Fast Stats) - 5 Cols */}
          <div id="left-col-skeleton" className="lg:col-span-5 space-y-6 animate-pulse">
            {/* Visual Box */}
            <div className="relative aspect-square max-h-[460px] rounded-3xl bg-slate-200 flex flex-col justify-between p-8 border border-slate-300/10">
              <div className="flex justify-between">
                <div className="h-8 w-24 bg-slate-300/40 rounded-full"></div>
                <div className="h-6 w-16 bg-slate-300/40 rounded-full"></div>
              </div>
              <div className="space-y-3">
                <div className="h-6 w-16 bg-slate-300/40 rounded-md"></div>
                <div className="h-10 w-48 bg-slate-300/40 rounded-md"></div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-3 rounded-2xl border border-slate-150 text-center space-y-2">
                  <div className="h-3 w-10 bg-slate-200 rounded mx-auto"></div>
                  <div className="h-5 w-16 bg-slate-300 rounded mx-auto"></div>
                </div>
              ))}
            </div>

            {/* Premium Guarantee Badges */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex justify-around gap-2">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 bg-slate-200 rounded-full"></div>
                <div className="h-3 w-16 bg-slate-200 rounded"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 bg-slate-200 rounded-full"></div>
                <div className="h-3 w-16 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>

          {" "}
          {/* Right Column (Product Main Details) - 7 Cols */}
          <div id="right-col-skeleton" className="lg:col-span-7 space-y-8 animate-pulse">
            {/* Badges / Origin */}
            <div className="flex gap-2">
              <div className="h-6 w-24 bg-slate-300 rounded-full"></div>
              <div className="h-6 w-20 bg-slate-200 rounded-full"></div>
            </div>

            {/* Product Title */}
            <div className="space-y-3">
              <div className="h-10 w-3/4 bg-slate-300 rounded-xl"></div>
              <div className="h-5 w-1/3 bg-slate-200 rounded-md"></div>
            </div>

            {/* Advantage list cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2">
                  <div className="h-5 w-1/2 bg-slate-300 rounded-md"></div>
                  <div className="h-4 w-full bg-slate-200 rounded-md"></div>
                </div>
              ))}
            </div>

            {/* Description lines */}
            <div className="space-y-3">
              <div className="h-4 w-full bg-slate-200 rounded-md"></div>
              <div className="h-4 w-full bg-slate-200 rounded-md"></div>
              <div className="h-4 w-5/6 bg-slate-200 rounded-md"></div>
            </div>

            {/* Contact Call to Action Row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200">
              <div className="h-12 w-full sm:w-1/2 bg-slate-300 rounded-xl"></div>
              <div className="h-12 w-full sm:w-1/2 bg-slate-200 rounded-xl"></div>
            </div>
          </div>

        </div>

        {/* Dosing & details accordion section skeleton */}
        <div id="accordion-skeleton" className="mt-16 border-t border-slate-200 pt-10 space-y-4 animate-pulse">
          <div className="h-12 w-full bg-slate-200 rounded-2xl"></div>
          <div className="h-12 w-full bg-slate-150 rounded-2xl"></div>
          <div className="h-12 w-full bg-slate-150 rounded-2xl"></div>
        </div>

      </div>
    </div>
  );
}

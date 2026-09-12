'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarSectionProps {
  nights: number;
  location: string;
  checkIn: string;
  checkOut: string;
}

export default function CalendarSection({
  nights,
  location,
  checkIn,
  checkOut,
}: CalendarSectionProps) {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // 0 = Oct 2026

  const city = location.split(',')[0].trim();

  // Helper to get days in month
  const getDaysArray = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay(); // 0 is Sunday
    const totalDays = new Date(year, month + 1, 0).getDate();
    return { firstDay, totalDays };
  };

  const months = [
    { name: 'October 2026', year: 2026, month: 9 }, // 0-indexed month
    { name: 'November 2026', year: 2026, month: 10 },
    { name: 'December 2026', year: 2026, month: 11 },
  ];

  const activeMonths = [
    months[currentMonthIndex],
    months[currentMonthIndex + 1] || months[currentMonthIndex],
  ];

  const isSelected = (year: number, month: number, day: number) => {
    if (year === 2026 && month === 9 && day >= 18 && day <= 23) {
      return true;
    }
    return false;
  };

  const isStart = (year: number, month: number, day: number) =>
    year === 2026 && month === 9 && day === 18;

  const isEnd = (year: number, month: number, day: number) =>
    year === 2026 && month === 9 && day === 23;

  return (
    <section className="border-b border-[#dddddd] py-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-[#222222]">
            {nights} nights in {city}
          </h3>
          <p className="mt-1 text-sm text-[#6a6a6a]">
            18 Oct 2026 – 23 Oct 2026
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentMonthIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentMonthIndex === 0}
            aria-label="Previous month"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dddddd] transition hover:bg-[#f7f7f7] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setCurrentMonthIndex((prev) => Math.min(months.length - 2, prev + 1))}
            disabled={currentMonthIndex >= months.length - 2}
            aria-label="Next month"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dddddd] transition hover:bg-[#f7f7f7] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Dual Month Calendars */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {activeMonths.map((mObj, idx) => {
          const { firstDay, totalDays } = getDaysArray(mObj.year, mObj.month);
          const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

          return (
            <div key={`${mObj.name}-${idx}`} className="w-full">
              <p className="mb-4 text-center font-semibold text-sm text-[#222222]">
                {mObj.name}
              </p>

              {/* Days Header */}
              <div className="grid grid-cols-7 mb-2 text-center text-xs font-semibold text-[#222222]">
                {daysOfWeek.map((d, dIdx) => (
                  <div key={`${d}-${dIdx}`} className="py-1">
                    {d}
                  </div>
                ))}
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 gap-y-1 text-center text-sm">
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="h-10 w-full" />
                ))}

                {Array.from({ length: totalDays }).map((_, i) => {
                  const day = i + 1;
                  const selected = isSelected(mObj.year, mObj.month, day);
                  const start = isStart(mObj.year, mObj.month, day);
                  const end = isEnd(mObj.year, mObj.month, day);

                  return (
                    <div
                      key={`day-${day}`}
                      className={`relative flex h-10 w-full items-center justify-center font-medium ${
                        selected
                          ? 'bg-[#f7f7f7] text-[#222222]'
                          : 'text-[#222222] hover:bg-[#f7f7f7] rounded-full cursor-pointer'
                      } ${start ? 'rounded-l-full bg-[#f7f7f7]' : ''} ${
                        end ? 'rounded-r-full bg-[#f7f7f7]' : ''
                      }`}
                    >
                      {start || end ? (
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222222] text-white shadow-sm">
                          {day}
                        </div>
                      ) : (
                        <span>{day}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span
          className="inline-flex h-[22px] w-[30px] items-center justify-center rounded border border-[#b0b0b0]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 32 22" width="20" height="14" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="1" y="1" width="30" height="20" rx="3" />
            <path d="M6 7h.01M11 7h.01M16 7h.01M21 7h.01M26 7h.01M6 12h.01M26 12h.01M9 16h14" />
          </svg>
        </span>
        <button className="text-sm font-semibold text-[#222222] underline hover:text-black">
          Clear dates
        </button>
      </div>
    </section>
  );
}

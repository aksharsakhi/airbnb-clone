'use client';

import React, { useState, useEffect } from 'react';
import { Amenity } from '@/data/listingData';
import { ALL_AMENITIES_CATEGORIES } from '@/data/allAmenitiesData';

interface AmenitiesSectionProps {
  amenities: Amenity[];
}

export default function AmenitiesSection({ amenities }: AmenitiesSectionProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpenModal(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpenModal]);

  // Helper to find authentic icon from ALL_AMENITIES_CATEGORIES
  const findAmenityIcon = (label: string) => {
    for (const cat of ALL_AMENITIES_CATEGORIES) {
      const match = cat.items.find((it) => it.name.toLowerCase() === label.toLowerCase());
      if (match) return match.icon;
    }
    return null;
  };

  return (
    <section id="amenities" className="border-b border-[#dddddd] py-8 scroll-mt-20">
      <h2 className="mb-6 text-[22px] font-[600] text-[#222222]">
        What this place offers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-6">
        {amenities.map((item) => {
          const icon = findAmenityIcon(item.label);
          const isUnavailable = !item.available;

          return (
            <div
              key={item.label}
              className={`flex items-center gap-4 py-1 text-[16px] ${
                isUnavailable ? 'text-[#717171]' : 'text-[#222222]'
              }`}
            >
              <span className="w-6 h-6 shrink-0 flex items-center justify-center" aria-hidden="true">
                {icon}
              </span>
              <span className={isUnavailable ? 'line-through' : ''}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <button
          onClick={() => setIsOpenModal(true)}
          className="rounded-xl border border-[#222222] bg-white px-[23px] py-[13px] text-[16px] font-[500] text-[#222222] transition hover:bg-[#f7f7f7] active:scale-[0.98]"
        >
          Show all 50 amenities
        </button>
      </div>

      {/* Full 50 Amenities Modal */}
      {isOpenModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="What this place offers"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:p-10"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpenModal(false);
          }}
        >
          <div className="relative flex max-h-[90vh] w-[780px] max-w-[calc(100vw-48px)] flex-col rounded-2xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header with Close button on the left */}
            <div className="h-16 flex items-center px-6 shrink-0 bg-white sticky top-0 z-10">
              <button
                onClick={() => setIsOpenModal(false)}
                aria-label="Close"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#f7f7f7] transition text-[#222222] -ml-2"
              >
                <svg
                  viewBox="0 0 32 32"
                  className="w-4 h-4"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  fill="none"
                  overflow="visible"
                >
                  <path d="M6 6l20 20M26 6 6 26" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto px-6 md:px-12 pb-12">
              <h2 className="text-[22px] font-[600] text-[#222222] mt-2 mb-6">
                What this place offers
              </h2>

              <div className="space-y-8">
                {ALL_AMENITIES_CATEGORIES.map((cat) => (
                  <div key={cat.category}>
                    <h3 className="text-[18px] font-[600] text-[#222222] mb-1">
                      {cat.category}
                    </h3>
                    <div>
                      {cat.items.map((item, idx) => (
                        <div
                          key={`${item.name}-${idx}`}
                          className={`flex items-center gap-4 py-4 border-b border-[#ebebeb] text-[16px] ${
                            item.unavailable ? 'text-[#717171]' : 'text-[#222222]'
                          }`}
                        >
                          <span
                            className="w-6 h-6 shrink-0 flex items-center justify-center"
                            aria-hidden="true"
                          >
                            {item.icon}
                          </span>
                          <span className={item.unavailable ? 'line-through' : ''}>
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

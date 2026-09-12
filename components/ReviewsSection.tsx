'use client';

import React, { useState, useEffect } from 'react';
import {
  RatingBreakdown,
  CategoryRating,
  HighlightTag,
  Review,
} from '@/data/listingData';
import { StarIcon, CloseIcon } from './Icons';

interface ReviewsSectionProps {
  rating: number;
  reviewCount: number;
  breakdown: RatingBreakdown[];
  categoryRatings: CategoryRating[];
  highlightTags: HighlightTag[];
  reviews: Review[];
}

export default function ReviewsSection({
  rating,
  reviewCount,
  breakdown,
  highlightTags,
  reviews,
}: ReviewsSectionProps) {
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);

  const toggleReview = (id: string) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Lock body scroll when reviews modal is open
  useEffect(() => {
    if (isReviewsModalOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsReviewsModalOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isReviewsModalOpen]);


  return (
    <section id="reviews" className="py-12 border-b border-[#ebebeb] scroll-mt-20">
      {/* 1. Guest Favourite Hero Header */}
      <div className="text-center py-2 pb-10">
        <div className="flex items-center justify-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/laurel-left.png"
            alt="Laurel wreath left"
            className="h-[110px] w-auto object-contain"
          />
          <div className="text-[100px] font-[500] leading-none tracking-[-0.03em] text-[#222222]">
            {rating.toFixed(2)}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/laurel-right.png"
            alt="Laurel wreath right"
            className="h-[110px] w-auto object-contain"
          />
        </div>
        <div className="text-[22px] font-[500] text-[#222222] mt-2">
          Guest favourite
        </div>
        <div className="text-[15px] text-[#222222] max-w-[420px] mx-auto mt-2 leading-[1.35]">
          This home is a guest favourite based on ratings, reviews and reliability
        </div>
        <button
          type="button"
          className="mt-3.5 text-[14px] font-[500] text-[#222222] underline cursor-pointer bg-transparent border-none"
        >
          How reviews work
        </button>
      </div>

      {/* 2. Horizontal 7-Column Rating Breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-[1.4fr_repeat(6,1fr)] gap-y-6 md:gap-0 py-2 pb-10">
        {/* Overall Rating Bar Chart */}
        <div className="col-span-2 md:col-span-1 pr-6">
          <div className="text-[14px] font-[500] mb-3 text-[#222222]">Overall rating</div>
          <div className="flex flex-col gap-1">
            {breakdown.map((item) => (
              <div key={item.stars} className="grid grid-cols-[8px_1fr] gap-2.5 items-center">
                <span className="text-[12px] text-[#222222]">{item.stars}</span>
                <div className="h-1 bg-[#ebebeb] rounded overflow-hidden">
                  <div
                    className="h-full bg-[#222222]"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cleanliness */}
        <div className="md:border-l md:border-[#dddddd] px-4 md:px-6">
          <div className="text-[14px] font-[500] mb-2 text-[#222222]">Cleanliness</div>
          <div className="text-[18px] font-[500] mb-2 text-[#222222]">5.0</div>
          <div className="w-8 h-8 text-[#222222]">
            <svg viewBox="0 0 32 32" className="w-8 h-8 block fill-current" aria-hidden="true" focusable="false">
              <path d="M24 0v6h-4.3c.13 1.4.67 2.72 1.52 3.78l.2.22-1.5 1.33a9.05 9.05 0 0 1-2.2-5.08c-.83.38-1.32 1.14-1.38 2.2v4.46l4.14 4.02a5 5 0 0 1 1.5 3.09l.01.25.01.25v8.63a3 3 0 0 1-2.64 2.98l-.18.01-.21.01-12-.13A3 3 0 0 1 4 29.2L4 29.02v-8.3a5 5 0 0 1 1.38-3.45l.19-.18L10 12.9V8.85l-4.01-3.4.02-.7A5 5 0 0 1 10.78 0H11zm-5.03 25.69a8.98 8.98 0 0 1-6.13-2.41l-.23-.23A6.97 6.97 0 0 0 6 21.2v7.82c0 .51.38.93.87 1H7l11.96.13h.13a1 1 0 0 0 .91-.88l.01-.12v-3.52c-.34.04-.69.06-1.03.06zM17.67 2H11a3 3 0 0 0-2.92 2.3l-.04.18-.01.08 3.67 3.1h2.72l.02-.1a4.29 4.29 0 0 1 3.23-3.4zM30 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0h-2.33v2H22zm8-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM20 20.52a3 3 0 0 0-.77-2l-.14-.15-4.76-4.61v-4.1H12v4.1l-5.06 4.78a3 3 0 0 0-.45.53 9.03 9.03 0 0 1 7.3 2.34l.23.23A6.98 6.98 0 0 0 20 23.6z" />
            </svg>
          </div>
        </div>

        {/* Accuracy */}
        <div className="md:border-l md:border-[#dddddd] px-4 md:px-6">
          <div className="text-[14px] font-[500] mb-2 text-[#222222]">Accuracy</div>
          <div className="text-[18px] font-[500] mb-2 text-[#222222]">5.0</div>
          <div className="w-8 h-8 text-[#222222]">
            <svg viewBox="0 0 32 32" className="w-8 h-8 block fill-current" aria-hidden="true" focusable="false">
              <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z" />
            </svg>
          </div>
        </div>

        {/* Check-in */}
        <div className="md:border-l md:border-[#dddddd] px-4 md:px-6">
          <div className="text-[14px] font-[500] mb-2 text-[#222222]">Check-in</div>
          <div className="text-[18px] font-[500] mb-2 text-[#222222]">5.0</div>
          <div className="w-8 h-8 text-[#222222]">
            <svg viewBox="0 0 32 32" className="w-8 h-8 block fill-current" aria-hidden="true" focusable="false">
              <path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z" />
            </svg>
          </div>
        </div>

        {/* Communication */}
        <div className="md:border-l md:border-[#dddddd] px-4 md:px-6">
          <div className="text-[14px] font-[500] mb-2 text-[#222222]">Communication</div>
          <div className="text-[18px] font-[500] mb-2 text-[#222222]">5.0</div>
          <div className="w-8 h-8 text-[#222222]">
            <svg viewBox="0 0 32 32" className="w-8 h-8 block" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
              <path d="m25.5 3.5c2.2091 0 4 1.79086 4 4v13.8333c0 2.2092-1.7909 4-4 4h-5.8192l-3.6808 4.5-3.6832-4.5h-5.8168c-2.20914 0-4-1.7908-4-4v-13.8333c0-2.20914 1.79086-4 4-4z" />
            </svg>
          </div>
        </div>

        {/* Location */}
        <div className="md:border-l md:border-[#dddddd] px-4 md:px-6">
          <div className="text-[14px] font-[500] mb-2 text-[#222222]">Location</div>
          <div className="text-[18px] font-[500] mb-2 text-[#222222]">4.8</div>
          <div className="w-8 h-8 text-[#222222]">
            <svg viewBox="0 0 32 32" className="w-8 h-8 block fill-current" aria-hidden="true" focusable="false">
              <path d="M30.95 3.81a2 2 0 0 0-2.38-1.52l-7.58 1.69-10-2-8.42 1.87A1.99 1.99 0 0 0 1 5.8v21.95a1.96 1.96 0 0 0 .05.44 2 2 0 0 0 2.38 1.52l7.58-1.69 10 2 8.42-1.87A1.99 1.99 0 0 0 31 26.2V4.25a1.99 1.99 0 0 0-.05-.44zM12 4.22l8 1.6v21.96l-8-1.6zM3 27.75V5.8l-.22-.97.22.97 7-1.55V26.2zm26-1.55-7 1.55V5.8l7-1.55z" />
            </svg>
          </div>
        </div>

        {/* Value */}
        <div className="md:border-l md:border-[#dddddd] px-4 md:px-6">
          <div className="text-[14px] font-[500] mb-2 text-[#222222]">Value</div>
          <div className="text-[18px] font-[500] mb-2 text-[#222222]">4.8</div>
          <div className="w-8 h-8 text-[#222222]">
            <svg viewBox="0 0 32 32" className="w-8 h-8 block fill-current" aria-hidden="true" focusable="false">
              <path d="M16.17 2a3 3 0 0 1 1.98.74l.14.14 11 11a3 3 0 0 1 .14 4.1l-.14.14L18.12 29.3a3 3 0 0 1-4.1.14l-.14-.14-11-11A3 3 0 0 1 2 16.37l-.01-.2V5a3 3 0 0 1 2.82-3h11.35zm0 2H5a1 1 0 0 0-1 .88v11.29a1 1 0 0 0 .2.61l.1.1 11 11a1 1 0 0 0 1.31.08l.1-.08L27.88 16.7a1 1 0 0 0 .08-1.32l-.08-.1-11-11a1 1 0 0 0-.58-.28L16.17 4zM9 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 3. Horizontal Scrollable Pill Tags */}
      <div className="_rDgNVk">
        {highlightTags.map((tag) => (
          <div key={tag.label} className="_fghUgF">
            {tag.icon && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={tag.icon}
                alt=""
                aria-hidden="true"
                className="_WevcZP"
              />
            )}
            <span>{tag.label}</span>
            <span className="_nrzMKB">{tag.count}</span>
          </div>
        ))}
      </div>

      {/* 4. Review Cards (2 Columns, 6 Reviews) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 pb-10">
        {reviews.slice(0, 6).map((review) => {
          const isExpandable = review.text.length > 180;
          const isExpanded = !!expandedReviews[review.id];

          return (
            <div key={review.id} className="_OxFhJw flex flex-col">
              {/* Header: Avatar, Name, Member length */}
              <div className="mb-3 flex items-center gap-3">
                {review.avatarUrl ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={review.avatarUrl}
                    alt={review.author}
                    className="w-[42px] h-[42px] rounded-full object-cover shrink-0"
                  />
                ) : (
                  <div
                    className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-[17px] font-[500] shrink-0"
                    style={{
                      backgroundColor: review.avatarColor || '#f7ede2',
                      color: review.id === 'vedant' ? '#8b6fc4' : '#c1852a',
                    }}
                  >
                    {review.author[0]}
                  </div>
                )}
                <div>
                  <div className="font-[500] text-[15px] text-[#222222]">
                    {review.author}
                  </div>
                  <div className="text-[13px] text-[#717171]">
                    {review.membership}
                  </div>
                </div>
              </div>

              {/* Stars · Date */}
              <div className="mb-2 flex items-center gap-1.5 text-[13px]">
                <div className="flex gap-[2px] text-[#222222]">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-2.5 w-2.5 fill-current" />
                  ))}
                </div>
                <span className="text-[#222222]">·</span>
                <span className="text-[#222222] font-[500]">{review.date}</span>
              </div>

              {/* Review text with Show more / Show less */}
              <div
                className={`_CfRTjD ${
                  isExpandable && !isExpanded ? '_kfKUOt' : ''
                }`}
              >
                {review.text}
              </div>

              {isExpandable && (
                <button
                  type="button"
                  onClick={() => toggleReview(review.id)}
                  className="_lQlyVc"
                >
                  {isExpanded ? 'Show less' : 'Show more'}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* 5. Show all reviews button */}
      <div>
        <button
          onClick={() => setIsReviewsModalOpen(true)}
          className="_XZuuKk cursor-pointer"
        >
          Show all {reviewCount} reviews
        </button>
      </div>

      {/* 6. Reviews Modal */}
      {isReviewsModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="All guest reviews"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:p-10"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsReviewsModalOpen(false);
          }}
        >
          <div className="relative flex max-h-[90vh] w-[780px] max-w-[calc(100vw-48px)] flex-col rounded-2xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="h-16 flex items-center px-6 shrink-0 bg-white sticky top-0 z-10 border-b border-[#dddddd]">
              <button
                onClick={() => setIsReviewsModalOpen(false)}
                aria-label="Close"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#f7f7f7] transition text-[#222222] -ml-2"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
              <div className="ml-4 flex items-center gap-2 text-[18px] font-[600] text-[#222222]">
                <StarIcon className="h-4 w-4 fill-[#222222]" />
                <span>
                  {rating.toFixed(2)} · {reviewCount} reviews
                </span>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto px-6 md:px-12 py-8 space-y-8">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-[#ebebeb] pb-8 last:border-b-0">
                  <div className="mb-3 flex items-center gap-3">
                    {review.avatarUrl ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={review.avatarUrl}
                        alt={review.author}
                        className="w-[42px] h-[42px] rounded-full object-cover shrink-0"
                      />
                    ) : (
                      <div
                        className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-[17px] font-[500] shrink-0"
                        style={{
                          backgroundColor: review.avatarColor || '#f7ede2',
                          color: review.id === 'vedant' ? '#8b6fc4' : '#c1852a',
                        }}
                      >
                        {review.author[0]}
                      </div>
                    )}
                    <div>
                      <div className="font-[500] text-[15px] text-[#222222]">{review.author}</div>
                      <div className="text-[13px] text-[#717171]">{review.membership}</div>
                    </div>
                  </div>

                  <div className="mb-2 flex items-center gap-1.5 text-[13px]">
                    <div className="flex gap-[2px] text-[#222222]">
                      {[...Array(review.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-2.5 w-2.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[#222222]">·</span>
                    <span className="text-[#222222] font-[500]">{review.date}</span>
                  </div>

                  <p className="text-[15px] leading-[1.4] text-[#222222] whitespace-pre-line">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

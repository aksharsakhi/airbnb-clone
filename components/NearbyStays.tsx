'use client';

import React, { useRef, useState } from 'react';
import { NearbyListing } from '@/data/listingData';

interface NearbyStaysProps {
  listings: NearbyListing[];
}

export default function NearbyStays({ listings }: NearbyStaysProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    if (direction === 'left') {
      containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      setPage(1);
    } else {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollWidth - containerRef.current.clientWidth,
        behavior: 'smooth',
      });
      setPage(2);
    }
  };

  const handleContainerScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    if (scrollLeft >= maxScroll / 2) {
      setPage(2);
    } else {
      setPage(1);
    }
  };

  return (
    <section className="_WNEjqG">
      <div className="_cixxXf">
        <h2 className="_XZmvOH" style={{ margin: 0 }}>
          More stays nearby
        </h2>

        <div className="_FFRFIT">
          <span className="_klVRbI">{page} / 2</span>
          <button
            type="button"
            className="_kxdode"
            onClick={() => handleScroll('left')}
            disabled={page <= 1}
            aria-label="Previous stays"
          >
            <span className="ico">
              <svg
                viewBox="0 0 18 18"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style={{
                  display: 'block',
                  height: '100%',
                  width: '100%',
                  fill: 'currentColor',
                }}
              >
                <path
                  d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <button
            type="button"
            className="_kxdode"
            onClick={() => handleScroll('right')}
            disabled={page >= 2}
            aria-label="Next stays"
          >
            <span className="ico">
              <svg
                viewBox="0 0 18 18"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style={{
                  display: 'block',
                  height: '100%',
                  width: '100%',
                  fill: 'currentColor',
                }}
              >
                <path
                  d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div
        ref={containerRef}
        onScroll={handleContainerScroll}
        className="_duSenM"
      >
        {listings.map((stay) => (
          <div key={stay.id} className="_YyLznY group cursor-pointer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={stay.photoSrc}
              alt={stay.title}
              loading="lazy"
              className="transition duration-300 group-hover:opacity-95"
            />
            <div className="_JwWFHq">{stay.title}</div>
            <div className="p text-[#222222]">
              ₹{stay.price.toLocaleString('en-IN')}{' '}
              <span className="star">
                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: 'block',
                    height: '100%',
                    width: '100%',
                    fill: 'currentColor',
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                  />
                </svg>
              </span>{' '}
              {stay.rating === 5 ? '5.0' : stay.rating.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

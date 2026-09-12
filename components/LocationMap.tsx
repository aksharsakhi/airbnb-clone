'use client';

import React, { useState } from 'react';

interface LocationMapProps {
  location?: string;
  neighbourhoodHighlight?: string;
}

export default function LocationMap({
  location = 'Candolim, Goa, India',
  neighbourhoodHighlight = 'Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.',
}: LocationMapProps) {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 1.8));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.75));

  return (
    <section className="_WNEjqG scroll-mt-20" id="location">
      <h2 className="_XZmvOH">Where you’ll be</h2>
      <div className="_RzoDdP">{location}</div>

      <div className="_PxCiiz">
        {/* Scalable Map Canvas */}
        <div
          className="_pLIPHL"
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: 'center center',
          }}
        />

        {/* Top-left search button */}
        <button
          type="button"
          className="_vPtpbJ"
          aria-label="Search location"
          onClick={() => setZoom(1)}
          title="Reset map view"
        >
          <span style={{ width: '16px', height: '16px' }}>
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: 'block',
                height: '100%',
                width: '100%',
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: 2,
                overflow: 'visible',
              }}
            >
              <circle
                cx="14"
                cy="14"
                r="9"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21l7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {/* Top-right zoom controls */}
        <div className="_eBzTKK">
          <button
            type="button"
            aria-label="Zoom in"
            onClick={handleZoomIn}
          >
            <span className="ico">
              <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: 'block',
                  height: '100%',
                  width: '100%',
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeWidth: 2,
                  overflow: 'visible',
                }}
              >
                <path
                  d="M16 6v20M6 16h20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            onClick={handleZoomOut}
          >
            <span className="ico">
              <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: 'block',
                  height: '100%',
                  width: '100%',
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeWidth: 2,
                  overflow: 'visible',
                }}
              >
                <path
                  d="M6 16h20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Center Marker */}
        <div className="_DhBoQs" aria-hidden="true">
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: 'block',
              height: '26px',
              width: '26px',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: 2,
              overflow: 'visible',
            }}
          >
            <path
              d="M6 29h20M9 29V15l7-6 7 6v14M13 29v-7h6v7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Details below map */}
      <div className="_pYppLa">Exact location will be provided after booking.</div>
      <div className="_uNDbeR">Neighbourhood highlights</div>
      <div className="_wtMVZA">{neighbourhoodHighlight}</div>

      <button type="button" className="_yWwrkC" style={{ marginTop: '18px' }}>
        Show more{' '}
        <span className="_VUbbfz">
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
    </section>
  );
}

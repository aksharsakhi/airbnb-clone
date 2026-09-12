'use client';

import React, { useState } from 'react';
import { StarIcon, OutdoorEntertainmentIcon, SnowflakeIcon, DoorIcon } from './Icons';

interface ListingInfoProps {
  propertyType: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  rating: number;
  reviewCount: number;
  hostName: string;
  hostAvatarColor: string;
  hostAvatarUrl?: string;
  yearsHosting: number;
}

export default function ListingInfo({
  propertyType,
  guests,
  bedrooms,
  beds,
  bathrooms,
  rating,
  reviewCount,
  hostName,
  hostAvatarColor,
  hostAvatarUrl,
  yearsHosting,
}: ListingInfoProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hostInitials = hostName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="flex flex-col">
      {/* Property headline */}
      <div className="border-b border-[#dddddd] py-6">
        <h2 className="text-[22px] font-semibold text-[#222222]">{propertyType}</h2>
        <p className="mt-1 text-base text-[#222222]">
          {guests} guests · {bedrooms} bedroom · {beds} bed · {bathrooms} bathroom
        </p>
      </div>

      {/* Guest favourite card */}
      <div className="my-6 flex items-center justify-between rounded-xl border border-[#dddddd] px-6 py-5 shadow-[0_6px_16px_rgba(0,0,0,0.06)]">
        <div className="flex flex-col items-center sm:flex-row sm:gap-4">
          <div className="flex items-center gap-1">
            <img src="/assets/laurel-left.png" alt="" className="h-[32px] w-auto" aria-hidden="true" />
            <div className="text-[18px] font-[600] text-[#222222] leading-tight text-center">
              Guest<br />favourite
            </div>
            <img src="/assets/laurel-right.png" alt="" className="h-[32px] w-auto" aria-hidden="true" />
          </div>
          <div className="mt-2 text-[14px] font-[500] text-[#222222] text-center sm:hidden">
            One of the most loved homes on Airbnb, according to guests
          </div>
        </div>
        
        <div className="hidden sm:block text-[14px] font-[400] text-[#222222] text-center max-w-[220px]">
          One of the most loved homes on Airbnb, according to guests
        </div>

        <div className="flex shrink-0 items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="text-[22px] font-[600] text-[#222222] tracking-tight">{rating.toFixed(2)}</div>
            <div className="flex items-center gap-[1px]">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-[10px] w-[10px] fill-current text-[#222222]" />
              ))}
            </div>
          </div>
          <div className="h-[40px] w-[1px] bg-[#dddddd] mx-[16px]"></div>
          <div className="flex flex-col items-center">
            <div className="text-[22px] font-[600] text-[#222222] tracking-tight">{reviewCount}</div>
            <div className="text-[14px] font-[600] text-[#222222] underline cursor-pointer">Reviews</div>
          </div>
        </div>
      </div>

      {/* Host summary row */}
      <div className="flex items-center gap-4 border-b border-[#dddddd] py-6">
        {hostAvatarUrl ? (
          <img
            src={hostAvatarUrl}
            alt={hostName}
            className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover shadow-sm"
          />
        ) : (
          <div
            className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full text-sm font-semibold text-white shadow-sm"
            style={{ backgroundColor: hostAvatarColor }}
            aria-hidden="true"
          >
            {hostInitials}
          </div>
        )}
        <div>
          <p className="font-[600] text-[#222222] text-[16px]">Hosted by {hostName}</p>
          <p className="text-[14px] text-[#6a6a6a]">{yearsHosting} years hosting</p>
        </div>
      </div>

      {/* Highlights */}
      <div className="border-b border-[#dddddd] py-8 flex flex-col gap-6">
        <div className="flex gap-4">
          <OutdoorEntertainmentIcon className="w-6 h-6 text-[#222222]" />
          <div>
            <div className="text-[16px] font-[600] text-[#222222]">Outdoor entertainment</div>
            <div className="text-[14px] text-[#6a6a6a]">The pool and alfresco dining are great for summer trips.</div>
          </div>
        </div>
        <div className="flex gap-4">
          <SnowflakeIcon className="w-6 h-6 text-[#222222]" />
          <div>
            <div className="text-[16px] font-[600] text-[#222222]">Designed for staying cool</div>
            <div className="text-[14px] text-[#6a6a6a]">Beat the heat with the A/C and ceiling fan.</div>
          </div>
        </div>
        <div className="flex gap-4">
          <DoorIcon className="w-6 h-6 text-[#222222]" />
          <div>
            <div className="text-[16px] font-[600] text-[#222222]">Self check-in</div>
            <div className="text-[14px] text-[#6a6a6a]">You can check in with the building staff.</div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="_YidPyi">
        <div className="_yWMtoE">
          <span>
            Some info has been automatically translated.{' '}
            <button
              type="button"
              className="underline font-[500] cursor-pointer"
            >
              Show original
            </button>
          </span>
        </div>
        <p id="descText" className={isExpanded ? '' : '_kfKUOt'}>
          🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴
        </p>
        <button
          type="button"
          id="descMore"
          onClick={() => setIsExpanded(!isExpanded)}
          className="_yWwrkC"
        >
          {isExpanded ? 'Show less' : 'Show more'}{' '}
          <span className="_VUbbfz">
            <svg
              viewBox="0 0 18 18"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}
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
  );
}

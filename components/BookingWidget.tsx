'use client';

import React, { useState } from 'react';
import { StarIcon, TagIcon, FlagIcon } from './Icons';
import { ChevronDown, ChevronUp, Plus, Minus, Check } from 'lucide-react';

interface BookingWidgetProps {
  pricePerStay: number;
  nights: number;
  rating: number;
  reviewCount: number;
  checkIn: string;
  checkOut: string;
  cancellationDate?: string;
  maxGuests?: number;
}

export default function BookingWidget({
  pricePerStay,
  nights,
  rating,
  reviewCount,
  checkIn,
  checkOut,
  cancellationDate = '17 October',
  maxGuests = 3,
}: BookingWidgetProps) {
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [isPromoClaimed, setIsPromoClaimed] = useState(false);
  const [isReserved, setIsReserved] = useState(false);

  const totalGuests = adults + children;
  const nightlyRate = Math.round(pricePerStay / nights);
  const discount = isPromoClaimed ? Math.round(pricePerStay * 0.1) : 0;
  const effectiveStayPrice = pricePerStay - discount;
  const cleaningFee = 1200;
  const serviceFee = Math.round(effectiveStayPrice * 0.14);
  const total = effectiveStayPrice + cleaningFee + serviceFee;

  return (
    <div className="flex flex-col gap-4">
      {/* 10% Discount Promo Banner */}
      <div className="flex items-center justify-between rounded-2xl border border-[#dddddd] bg-white p-4 shadow-[0_6px_16px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <img src="/assets/discount.svg" alt="Discount" className="h-7 w-7 shrink-0" />
          </div>
          <div>
            <p className="text-[14px] font-[600] text-[#222222]">
              {isPromoClaimed ? '10% discount applied!' : 'Get 10% off your next stay.'}
            </p>
            <p className="text-[14px] text-[#6a6a6a] underline cursor-pointer">
              Terms apply
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsPromoClaimed((prev) => !prev)}
          className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
            isPromoClaimed
              ? 'bg-emerald-100 text-emerald-800'
              : 'border border-[#dddddd] bg-white text-[#222222] hover:bg-[#f7f7f7]'
          }`}
        >
          {isPromoClaimed ? 'Claimed' : 'Claim'}
        </button>
      </div>

      {/* Booking Card */}
      <div className="rounded-3xl border border-[#dddddd] bg-white p-6 shadow-xl">
        {/* Header Price */}
        <div className="mb-6 flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-bold text-[#222222]">
              ₹{effectiveStayPrice.toLocaleString('en-IN')}
            </span>
            <span className="text-base text-[#6a6a6a]"> for {nights} nights</span>
          </div>

          <div className="flex items-center gap-1 text-xs font-medium text-[#222222]">
            <StarIcon className="h-3 w-3 fill-[#222222]" />
            <span>{rating.toFixed(2)}</span>
            <span className="text-[#6a6a6a]">({reviewCount})</span>
          </div>
        </div>

        {/* Inputs Box */}
        <div className="relative mb-4 rounded-2xl border border-[#b0b0b0]">
          {/* Check-in / Checkout Dual Box */}
          <div className="grid grid-cols-2 border-b border-[#b0b0b0]">
            <div className="border-r border-[#b0b0b0] p-3 text-left cursor-pointer hover:bg-[#f7f7f7] rounded-tl-2xl">
              <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#222222]">
                Check-in
              </label>
              <div className="text-sm font-normal text-[#222222]">
                18/10/2026
              </div>
            </div>

            <div className="p-3 text-left cursor-pointer hover:bg-[#f7f7f7] rounded-tr-2xl">
              <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#222222]">
                Checkout
              </label>
              <div className="text-sm font-normal text-[#222222]">
                23/10/2026
              </div>
            </div>
          </div>

          {/* Guests dropdown trigger */}
          <div
            onClick={() => setIsGuestOpen((prev) => !prev)}
            className="flex items-center justify-between p-3 cursor-pointer hover:bg-[#f7f7f7] rounded-b-2xl"
          >
            <div>
              <label className="block text-[10px] font-extrabold uppercase tracking-wider text-[#222222]">
                Guests
              </label>
              <div className="text-sm font-normal text-[#222222]">
                {totalGuests} guest{totalGuests > 1 ? 's' : ''}
                {infants > 0 && `, ${infants} infant${infants > 1 ? 's' : ''}`}
                {pets > 0 && `, ${pets} pet${pets > 1 ? 's' : ''}`}
              </div>
            </div>
            {isGuestOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>

          {/* Guests Popover Dropdown */}
          {isGuestOpen && (
            <div className="absolute left-0 right-0 top-full z-20 mt-2 rounded-2xl border border-[#dddddd] bg-white p-5 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150">
              {/* Adults */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#222222]">Adults</p>
                  <p className="text-xs text-[#6a6a6a]">Age 13+</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setAdults((prev) => Math.max(1, prev - 1));
                    }}
                    disabled={adults <= 1}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dddddd] hover:border-[#222222] disabled:opacity-30"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-4 text-center text-sm font-semibold text-[#222222]">
                    {adults}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setAdults((prev) => (totalGuests < maxGuests ? prev + 1 : prev));
                    }}
                    disabled={totalGuests >= maxGuests}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dddddd] hover:border-[#222222] disabled:opacity-30"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#222222]">Children</p>
                  <p className="text-xs text-[#6a6a6a]">Ages 2–12</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setChildren((prev) => Math.max(0, prev - 1));
                    }}
                    disabled={children <= 0}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dddddd] hover:border-[#222222] disabled:opacity-30"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-4 text-center text-sm font-semibold text-[#222222]">
                    {children}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setChildren((prev) => (totalGuests < maxGuests ? prev + 1 : prev));
                    }}
                    disabled={totalGuests >= maxGuests}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dddddd] hover:border-[#222222] disabled:opacity-30"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Infants */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#222222]">Infants</p>
                  <p className="text-xs text-[#6a6a6a]">Under 2</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setInfants((prev) => Math.max(0, prev - 1));
                    }}
                    disabled={infants <= 0}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dddddd] hover:border-[#222222] disabled:opacity-30"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-4 text-center text-sm font-semibold text-[#222222]">
                    {infants}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setInfants((prev) => Math.min(prev + 1, 2));
                    }}
                    disabled={infants >= 2}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dddddd] hover:border-[#222222] disabled:opacity-30"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Pets */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#222222]">Pets</p>
                  <p className="text-xs text-[#6a6a6a]">Bringing a service animal?</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPets((prev) => Math.max(0, prev - 1));
                    }}
                    disabled={pets <= 0}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dddddd] hover:border-[#222222] disabled:opacity-30"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-4 text-center text-sm font-semibold text-[#222222]">
                    {pets}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPets((prev) => Math.min(prev + 1, 2));
                    }}
                    disabled={pets >= 2}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dddddd] hover:border-[#222222] disabled:opacity-30"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs text-[#6a6a6a]">
                <span>Maximum {maxGuests} guests</span>
                <button
                  onClick={() => setIsGuestOpen(false)}
                  className="font-bold underline text-[#222222] hover:text-black"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Free cancellation notice inside booking card */}
        <div className="mb-4 text-center py-2">
          <span className="text-[14px] text-[#222222]">
            Free cancellation before <span className="font-[600]">{cancellationDate}</span>
          </span>
        </div>

        {/* Reserve Button */}
        <button
          onClick={() => setIsReserved(true)}
          className="w-full rounded-xl bg-[#E31C5F] hover:bg-[#d91b56] py-3.5 text-center text-base font-semibold text-white transition active:scale-[0.98]"
        >
          {isReserved ? 'Reserved!' : 'Reserve'}
        </button>

        <p className="mt-3 text-center text-xs text-[#6a6a6a]">
          You won&apos;t be charged yet
        </p>

        {/* Price Breakdown */}
        <div className="mt-6 space-y-3 text-sm text-[#222222]">
          <div className="flex justify-between">
            <span className="underline">
              ₹{nightlyRate.toLocaleString('en-IN')} x {nights} nights
            </span>
            <span>₹{pricePerStay.toLocaleString('en-IN')}</span>
          </div>

          {isPromoClaimed && (
            <div className="flex justify-between text-emerald-600 font-medium">
              <span>10% promo discount</span>
              <span>-₹{discount.toLocaleString('en-IN')}</span>
            </div>
          )}

          <div className="flex justify-between">
            <span className="underline">Cleaning fee</span>
            <span>₹{cleaningFee.toLocaleString('en-IN')}</span>
          </div>

          <div className="flex justify-between">
            <span className="underline">Airbnb service fee</span>
            <span>₹{serviceFee.toLocaleString('en-IN')}</span>
          </div>

          <div className="my-2 border-t border-[#dddddd]" />

          <div className="flex justify-between text-base font-bold text-[#222222]">
            <span>Total before taxes</span>
            <span>₹{total.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      {/* Report this listing */}
      <div className="mt-4 text-center">
        <button className="inline-flex items-center gap-2 text-[14px] font-[500] text-[#222222] underline underline-offset-2 hover:text-black">
          <FlagIcon className="h-4 w-4" />
          Report this listing
        </button>
      </div>
    </div>
  );
}








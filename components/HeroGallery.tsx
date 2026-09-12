'use client';

import React from 'react';
import Image from 'next/image';
import { Photo } from '@/data/listingData';
import { GridDotsIcon } from './Icons';

interface HeroGalleryProps {
  photos: Photo[];
  onOpenTour: (roomName?: string) => void;
}

export default function HeroGallery({
  photos,
  onOpenTour,
}: HeroGalleryProps) {
  const displayPhotos = photos.slice(0, 5);

  return (
    <section aria-label="Photos of this place" className="relative">
      {/* Desktop 5-photo grid */}
      <div className="grid h-[320px] sm:h-[400px] md:h-[460px] grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-[8px] overflow-hidden rounded-[12px]">
        {/* Main large photo (left half) */}
        {displayPhotos[0] && (
          <button
            type="button"
            onClick={() => onOpenTour('Living room 2')}
            aria-label="Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 1"
            className="group relative cursor-pointer overflow-hidden md:col-span-2 md:row-span-2 border-none p-0 text-left bg-[#eeeeee]"
          >
            <Image
              src={displayPhotos[0].src}
              alt={displayPhotos[0].alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-300 group-hover:brightness-95"
            />
            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
          </button>
        )}

        {/* 4 secondary photos (right half 2x2) */}
        {displayPhotos.slice(1, 5).map((photo, index) => {
          const roomTarget =
            index === 0 || index === 1
              ? 'Living room 2'
              : index === 2
              ? 'Bedroom'
              : 'Exterior';

          return (
            <button
              key={photo.id}
              type="button"
              onClick={() => onOpenTour(roomTarget)}
              aria-label={`Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image ${index + 2}`}
              className="group relative hidden md:block cursor-pointer overflow-hidden border-none p-0 text-left bg-[#eeeeee]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="25vw"
                className="object-cover transition duration-300 group-hover:brightness-95"
              />
              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
            </button>
          );
        })}
      </div>

      {/* "Show all photos" floating pill button */}
      <button
        type="button"
        onClick={() => onOpenTour()}
        className="absolute bottom-6 right-6 flex items-center gap-[7px] rounded-[8px] border border-[#222222] bg-white px-[15px] py-[7px] text-[14px] font-[500] text-[#222222] transition hover:bg-[#f7f7f7] shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] active:scale-[0.96] cursor-pointer z-10"
        aria-label="Show all photos"
      >
        <GridDotsIcon className="w-[16px] h-[16px]" />
        Show all photos
      </button>
    </section>
  );
}

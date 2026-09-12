'use client';

import React from 'react';
import Image from 'next/image';
import { Photo, RoomCategory } from '@/data/listingData';

interface SleepingArrangementsProps {
  rooms?: RoomCategory[];
  photos: Photo[];
  onSelectPhoto?: (photoId: number) => void;
}

export default function SleepingArrangements({
  photos,
  onSelectPhoto,
}: SleepingArrangementsProps) {
  const bedroomPhoto =
    photos.find((p) => p.src.includes('67c61c6f-6260-4809-9510-0360e58a345d')) ||
    photos.find((p) => p.id === 1003) ||
    photos[3];

  const livingRoomPhoto =
    photos.find((p) => p.src.includes('a9831aeb-f441-44f5-a38f-4cf54e3f0fcf')) ||
    photos.find((p) => p.id === 1005) ||
    photos[5];

  return (
    <section className="border-b border-[#dddddd] py-8">
      <h2 className="mb-6 text-[22px] font-[600] text-[#222222]">
        Where you&apos;ll sleep
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          onClick={() => onSelectPhoto && bedroomPhoto && onSelectPhoto(bedroomPhoto.id)}
          className="cursor-pointer group"
        >
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg border border-black/8">
            <Image
              src={bedroomPhoto?.src || '/assets/67c61c6f-6260-4809-9510-0360e58a345d.jpeg'}
              alt="Bedroom"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
          <p className="mt-[14px] text-[15px] font-[500] text-[#222222]">Bedroom</p>
          <p className="mt-[2px] text-[14px] text-[#717171]">1 double bed</p>
        </div>

        <div
          onClick={() => onSelectPhoto && livingRoomPhoto && onSelectPhoto(livingRoomPhoto.id)}
          className="cursor-pointer group"
        >
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg border border-black/8">
            <Image
              src={livingRoomPhoto?.src || '/assets/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg'}
              alt="Living room"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
          <p className="mt-[14px] text-[15px] font-[500] text-[#222222]">Living room</p>
          <p className="mt-[2px] text-[14px] text-[#717171]">1 sofa</p>
        </div>
      </div>
    </section>
  );
}

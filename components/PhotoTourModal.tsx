'use client';

import React, { useEffect, useRef } from 'react';
import { RoomCategory, Photo } from '@/data/listingData';

interface PhotoTourModalProps {
  rooms: RoomCategory[];
  photos: Photo[];
  initialRoom?: string | null;
  onClose: () => void;
  onOpenLightbox: (photoId: number) => void;
}

export default function PhotoTourModal({
  rooms,
  photos,
  initialRoom,
  onClose,
  onOpenLightbox,
}: PhotoTourModalProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const getRoomBlocks = (room: RoomCategory): number[][] => {
    if (room.layoutBlocks && room.layoutBlocks.length > 0) {
      return room.layoutBlocks;
    }
    if (room.photoIds.length === 2) {
      return [room.photoIds];
    }
    const blocks: number[][] = [];
    let i = 0;
    let take = 1;
    while (i < room.photoIds.length) {
      const remaining = room.photoIds.length - i;
      const count = Math.min(take, remaining);
      blocks.push(room.photoIds.slice(i, i + count));
      i += count;
      take = take === 1 ? 2 : 1;
    }
    return blocks;
  };

  const findPhoto = (id: number) => photos.find((p) => p.id === id);

  const scrollToRoom = (roomName: string) => {
    const id = `tour-${roomName.replace(/\s+/g, '-')}`;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll to requested initialRoom when modal opens
  useEffect(() => {
    if (initialRoom) {
      const timer = setTimeout(() => {
        scrollToRoom(initialRoom);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [initialRoom]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="_KpcKWX"
    >
      {/* Sticky Top Header */}
      <header className="_TCWfOg" id="tourBar">
        <button
          type="button"
          onClick={onClose}
          aria-label="Back"
          className="_bNHEUf _ffpbhP"
          id="tourBack"
        >
          <span>
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
                d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <h2 className="_usJUoS">Photo tour</h2>

        <div className="_bLFgMg">
          <button type="button" aria-label="Share" className="_bNHEUf">
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
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
                  d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289"
                  fill="none"
                />
              </svg>
            </span>
          </button>
          <button type="button" aria-label="Save" className="_bNHEUf">
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
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
                  d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z"
                  fill="none"
                />
              </svg>
            </span>
          </button>
        </div>
      </header>

      {/* Scrollable Container */}
      <div className="_EpiBQR" id="tourScroll" ref={scrollContainerRef}>
        <div className="_hKlfpJ">
          {/* Room Category Navigation Bar */}
          <nav className="_tHVclZ" id="tourNav" aria-label="Photo categories">
            {rooms.map((room, idx) => {
              const firstPhoto = findPhoto(room.photoIds[0]);
              if (!firstPhoto) return null;
              return (
                <button
                  key={room.room}
                  type="button"
                  onClick={() => scrollToRoom(room.room)}
                  className="_gKVFNL"
                  aria-label={room.room}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={firstPhoto.src}
                    alt=""
                    loading="lazy"
                  />
                  <span className="_tAbhrW">{room.room}</span>
                </button>
              );
            })}
          </nav>

          {/* Rooms Sections List */}
          <div className="tour-rooms" id="tourRooms">
            {rooms.map((room, roomIndex) => (
              <section
                key={room.room}
                id={`tour-${room.room.replace(/\s+/g, '-')}`}
                className="_AWcqip"
              >
                {/* Left Column: Title & Highlights */}
                <div className="_yZYwUW">
                  <div className="_AnkvRF">{room.room}</div>
                  {room.tags.length > 0 && (
                    <div className="_hvJgUS">{room.tags.join('  ·  ')}</div>
                  )}
                </div>

                {/* Right Column: Photos Grid */}
                <div className="_MbzoEk">
                  {getRoomBlocks(room).map((block, bIdx) => {
                    const isDouble = block.length === 2;
                    return (
                      <div
                        key={bIdx}
                        className={`_wdcjGJ ${isDouble ? '_DLVRjk' : '_vmCONz'}`}
                      >
                        {block.map((photoId) => {
                          const photo = findPhoto(photoId);
                          if (!photo) return null;
                          const photoIndex =
                            photos.findIndex((p) => p.id === photo.id) + 1;
                          return (
                            <button
                              key={photo.id}
                              type="button"
                              onClick={() => onOpenLightbox(photo.id)}
                              className="_GXrMIo"
                              aria-label={`Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image ${photoIndex}`}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={photo.src}
                                alt={photo.alt || room.room}
                                loading="lazy"
                              />
                            </button>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

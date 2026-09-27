'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Photo } from '@/data/listingData';
import { GridDotsIcon } from './Icons';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface LightboxModalProps {
  photos: Photo[];
  currentId: number;
  onClose: () => void;
  onNavigate: (newId: number) => void;
  onBackToTour: () => void;
}

export default function LightboxModal({
  photos,
  currentId,
  onClose,
  onNavigate,
  onBackToTour,
}: LightboxModalProps) {
  const currentIndex = photos.findIndex((p) => p.id === currentId);
  const currentPhoto = photos[currentIndex] || photos[0];
  const total = photos.length;
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<Element | null>(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate(photos[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      onNavigate(photos[currentIndex + 1].id);
    }
  };

  // Lock body scroll
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Keyboard navigation & Focus Trap
  useEffect(() => {
    previousActiveElement.current = document.activeElement;

    // Focus first focusable element inside modal
    const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [tabindex]:not([tabindex="-1"])'
    );
    focusableElements?.[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Tab' && modalRef.current) {
        const elements = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );
        if (elements.length === 0) return;
        const first = elements[0];
        const last = elements[elements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      (previousActiveElement.current as HTMLElement)?.focus?.();
    };
  }, [currentIndex, total, onClose]);

  if (!currentPhoto) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${currentPhoto.room} photo viewer`}
      className="fixed inset-0 z-[60] flex flex-col bg-white"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#f0f0f0]">
        <button
          onClick={onBackToTour}
          aria-label="Back to photo tour grid"
          className="flex items-center gap-2 rounded-full p-2.5 hover:bg-[#f7f7f7] transition"
        >
          <GridDotsIcon size={18} className="text-[#222222]" />
        </button>

        <h2 className="text-sm sm:text-base font-semibold text-[#222222]">
          {currentPhoto.room}
        </h2>

        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-[#6a6a6a]">
            {currentIndex + 1} of {total}
          </span>
          <button
            onClick={onClose}
            aria-label="Close photo viewer"
            className="rounded-full p-2.5 hover:bg-[#f7f7f7] transition"
          >
            <X size={20} className="text-[#222222]" />
          </button>
        </div>
      </div>

      {/* Main Single Photo Stage */}
      <div className="relative flex flex-1 items-center justify-center px-4 sm:px-16 md:px-24">
        {/* Previous Arrow Button */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous photo"
          className="absolute left-4 sm:left-8 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#dddddd] bg-white shadow-md transition hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <ChevronLeft size={22} className="text-[#222222]" />
        </button>

        {/* Animated Photo Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhoto.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative h-[65vh] sm:h-[72vh] w-full max-w-4xl"
          >
            <Image
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Next Arrow Button */}
        <button
          onClick={handleNext}
          disabled={currentIndex === total - 1}
          aria-label="Next photo"
          className="absolute right-4 sm:right-8 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#dddddd] bg-white shadow-md transition hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <ChevronRight size={22} className="text-[#222222]" />
        </button>
      </div>
    </div>
  );
}













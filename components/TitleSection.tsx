'use client';

import React, { useState } from 'react';
import { ShareIcon, SaveIcon, CloseIcon } from './Icons';
import { Check, Copy } from 'lucide-react'; // Keeping these for the modal

interface TitleSectionProps {
  title: string;
}

export default function TitleSection({ title }: TitleSectionProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <section
        id="photos"
        className="_DbxOEt flex flex-col gap-3 py-6 md:flex-row md:items-start md:justify-between scroll-mt-20"
      >
        <h1 className="text-[26px] font-[600] leading-tight text-[#222222]">
          {title}
        </h1>

        <div className="flex shrink-0 items-center gap-[2px]">
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="group flex items-center gap-2 rounded-lg p-2 pr-3 text-[14px] font-[500] text-[#222222] transition bg-transparent"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full transition group-hover:bg-[#f7f7f7]">
              <ShareIcon className="h-4 w-4" />
            </span>
            <span className="underline decoration-transparent transition group-hover:decoration-current underline-offset-[3px]">
              Share
            </span>
          </button>

          <button
            onClick={() => setIsSaved((prev) => !prev)}
            className="group flex items-center gap-2 rounded-lg p-2 pr-3 text-[14px] font-[500] text-[#222222] transition bg-transparent"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full transition group-hover:bg-[#f7f7f7]">
              <SaveIcon
                className={`h-4 w-4 transition-transform duration-200 ${
                  isSaved ? 'fill-[#ff385c] stroke-[#ff385c] scale-110' : ''
                }`}
              />
            </span>
            <span className="underline decoration-transparent transition group-hover:decoration-current underline-offset-[3px]">
              {isSaved ? 'Saved' : 'Save'}
            </span>
          </button>
        </div>
      </section>

      {/* Share Modal Dialog */}
      {isShareModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Share this place"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#dddddd]">
              <h3 className="text-lg font-[500] text-[#222222]">Share this place</h3>
              <button
                onClick={() => setIsShareModalOpen(false)}
                aria-label="Close share dialog"
                className="rounded-full p-2 hover:bg-[#f7f7f7] transition"
              >
                <CloseIcon className="w-[14px] h-[14px]" />
              </button>
            </div>

            <div className="py-6">
              <p className="text-sm text-[#6a6a6a] mb-4">
                Share this romantic jacuzzi serviced apartment in Candolim with friends or family.
              </p>

              <div className="flex items-center justify-between gap-3 rounded-xl border border-[#dddddd] bg-[#f7f7f7] p-3">
                <span className="truncate text-xs text-[#222222]">
                  {typeof window !== 'undefined' ? window.location.href : 'https://airbnb.com'}
                </span>
                <button
                  onClick={handleCopyLink}
                  className="flex shrink-0 items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#222222] shadow-sm border border-[#dddddd] hover:bg-[#f0f0f0] transition"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-green-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy link
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="rounded-xl bg-[#222222] px-5 py-2.5 text-sm font-semibold text-white hover:bg-black transition"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

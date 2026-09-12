'use client';

import React from 'react';
import { Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#dddddd] bg-[#f7f7f7] text-[#222222]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-[#dddddd]">
          {/* Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#222222]">Support</h4>
            <ul className="space-y-2.5 text-sm text-[#222222]">
              <li><a href="#" className="hover:underline">Help Centre</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
              <li><a href="#" className="hover:underline">Disability support</a></li>
              <li><a href="#" className="hover:underline">Cancellation options</a></li>
            </ul>
          </div>

          {/* Hosting */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#222222]">Hosting</h4>
            <ul className="space-y-2.5 text-sm text-[#222222]">
              <li><a href="#" className="hover:underline">Airbnb your home</a></li>
              <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline">Hosting resources</a></li>
              <li><a href="#" className="hover:underline">Community forum</a></li>
              <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
            </ul>
          </div>

          {/* Airbnb */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#222222]">Airbnb</h4>
            <ul className="space-y-2.5 text-sm text-[#222222]">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">New features</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Airbnb.org emergency stays</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#222222]">Community</h4>
            <ul className="space-y-2.5 text-sm text-[#222222]">
              <li><a href="#" className="hover:underline">Diversity &amp; Belonging</a></li>
              <li><a href="#" className="hover:underline">Accessibility initiatives</a></li>
              <li><a href="#" className="hover:underline">Refer a host</a></li>
              <li><a href="#" className="hover:underline">Gift cards</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#222222]">
          <div className="flex flex-wrap items-center gap-2">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span>·</span>
            <a href="#" className="hover:underline">Company details</a>
          </div>

          <div className="flex items-center gap-6 font-semibold">
            <button className="flex items-center gap-2 hover:underline">
              <Globe size={16} />
              <span>English (IN)</span>
            </button>
            <button className="hover:underline">
              <span>₹ INR</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

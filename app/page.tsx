'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Header from '@/components/Header';
import TitleSection from '@/components/TitleSection';
import HeroGallery from '@/components/HeroGallery';
import ListingInfo from '@/components/ListingInfo';
import SleepingArrangements from '@/components/SleepingArrangements';
import AmenitiesSection from '@/components/AmenitiesSection';
import CalendarSection from '@/components/CalendarSection';
import ReviewsSection from '@/components/ReviewsSection';
import LocationMap from '@/components/LocationMap';
import HostBio from '@/components/HostBio';
import ThingsToKnow from '@/components/ThingsToKnow';
import NearbyStays from '@/components/NearbyStays';
import BookingWidget from '@/components/BookingWidget';
import PhotoTourModal from '@/components/PhotoTourModal';
import LightboxModal from '@/components/LightboxModal';
import Footer from '@/components/Footer';
import { listingData } from '@/data/listingData';

function ListingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const modalParam = searchParams.get('modal');
  const modalItemParam = searchParams.get('modalItem');

  const [activeModal, setActiveModal] = useState<'tour' | 'lightbox' | null>(() => {
    if (modalParam === 'photo-tour') {
      if (modalItemParam && !isNaN(parseInt(modalItemParam, 10))) {
        return 'lightbox';
      }
      return 'tour';
    }
    return null;
  });

  const [selectedPhotoId, setSelectedPhotoId] = useState<number | null>(() => {
    if (modalParam === 'photo-tour' && modalItemParam) {
      const id = parseInt(modalItemParam, 10);
      return isNaN(id) ? null : id;
    }
    return null;
  });

  const [initialRoom, setInitialRoom] = useState<string | null>(null);

  // Sync state with URL search params
  useEffect(() => {
    if (modalParam === 'photo-tour') {
      if (modalItemParam) {
        const id = parseInt(modalItemParam, 10);
        if (!isNaN(id)) {
          setActiveModal('lightbox');
          setSelectedPhotoId(id);
          return;
        }
      }
      setActiveModal('tour');
      setSelectedPhotoId(null);
    } else {
      setActiveModal(null);
      setSelectedPhotoId(null);
    }
  }, [modalParam, modalItemParam]);

  const openTour = (roomName?: string) => {
    setActiveModal('tour');
    setSelectedPhotoId(null);
    setInitialRoom(roomName || null);
    router.push(`${pathname}?modal=photo-tour`, { scroll: false });
  };

  const openPhotoLightbox = (photoId: number) => {
    setActiveModal('lightbox');
    setSelectedPhotoId(photoId);
    router.push(`${pathname}?modal=photo-tour&modalItem=${photoId}`, {
      scroll: false,
    });
  };

  const closeModals = () => {
    setActiveModal(null);
    setSelectedPhotoId(null);
    setInitialRoom(null);
    router.push(pathname, { scroll: false });
  };

  const backToTour = () => {
    setActiveModal('tour');
    setSelectedPhotoId(null);
    router.push(`${pathname}?modal=photo-tour`, { scroll: false });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main className="mx-auto max-w-[1280px] px-6 lg:px-10 pb-16">
        {/* Listing Title & Action Bar */}
        <TitleSection title={listingData.title} />

        {/* 5-Photo Hero Collage */}
        <HeroGallery
          photos={listingData.photos}
          onOpenTour={openTour}
        />

        {/* Two-Column Responsive Layout (Matching target: _lhKJir) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_372px] lg:gap-x-24 items-stretch">
          {/* Left Column (Primary Details) */}
          <div className="min-w-0">
            {/* Property Headline, Guest Favourite & Host Summary */}
            <ListingInfo
              propertyType={listingData.propertyType}
              guests={listingData.guests}
              bedrooms={listingData.bedrooms}
              beds={listingData.beds}
              bathrooms={listingData.bathrooms}
              rating={listingData.rating}
              reviewCount={listingData.reviewCount}
              hostName={listingData.host.name}
              hostAvatarColor={listingData.host.avatarColor}
              hostAvatarUrl={listingData.host.avatarUrl}
              yearsHosting={listingData.host.yearsHosting}
            />

            {/* Where You'll Sleep */}
            <SleepingArrangements
              photos={listingData.photos}
              onSelectPhoto={openPhotoLightbox}
            />

            {/* What this place offers (Amenities) */}
            <AmenitiesSection amenities={listingData.amenities} />

            {/* Interactive Calendar / Dates */}
            <CalendarSection
              nights={listingData.nights}
              location={listingData.location}
              checkIn={listingData.checkIn}
              checkOut={listingData.checkOut}
            />
          </div>

          {/* Right Column (Sticky Reservation Card, matching target: aside._iJTxKe > div._bUsxCi) */}
          <aside className="relative self-stretch hidden lg:block w-[372px] shrink-0 _iJTxKe">
            <div className="sticky top-[100px] _bUsxCi" id="bookingSticky">
              <BookingWidget
                pricePerStay={listingData.pricePerStay}
                nights={listingData.nights}
                rating={listingData.rating}
                reviewCount={listingData.reviewCount}
                checkIn={listingData.checkIn}
                checkOut={listingData.checkOut}
                cancellationDate={listingData.cancellationDate}
                maxGuests={listingData.guests}
              />
            </div>
          </aside>
        </div>

        {/* Full Width Sections Below (Matching target: #wideSections._SPYgTj) */}
        <div id="wideSections" className="border-t border-[#ebebeb] mt-8">
          {/* Reviews Section with Category Breakdown */}
          <ReviewsSection
            rating={listingData.rating}
            reviewCount={listingData.reviewCount}
            breakdown={listingData.overallRatingBreakdown}
            categoryRatings={listingData.categoryRatings}
            highlightTags={listingData.highlightTags}
            reviews={listingData.reviews}
          />

          {/* Stylized Interactive Map */}
          <LocationMap
            location={listingData.location}
            neighbourhoodHighlight={listingData.neighbourhoodHighlight}
          />

          {/* Meet Your Host Bio */}
          <HostBio host={listingData.host} coHosts={listingData.coHosts} />

          {/* Things to Know */}
          <ThingsToKnow thingsToKnow={listingData.thingsToKnow} />

          {/* More Stays Nearby */}
          <NearbyStays listings={listingData.nearbyListings} />
        </div>
      </main>

      {/* Global Multi-Column Footer */}
      <Footer />

      {/* View 2: Full-Screen Photo Tour Overlay Modal */}
      {activeModal === 'tour' && (
        <PhotoTourModal
          rooms={listingData.rooms}
          photos={listingData.photos}
          initialRoom={initialRoom}
          onClose={closeModals}
          onOpenLightbox={openPhotoLightbox}
        />
      )}

      {/* View 3: Lightbox Single-Photo Viewer Modal */}
      {activeModal === 'lightbox' && selectedPhotoId !== null && (
        <LightboxModal
          photos={listingData.photos}
          currentId={selectedPhotoId}
          onClose={closeModals}
          onNavigate={openPhotoLightbox}
          onBackToTour={backToTour}
        />
      )}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ListingContent />
    </Suspense>
  );
}

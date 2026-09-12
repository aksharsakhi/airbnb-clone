export interface Photo {
  id: number;
  room: string;
  alt: string;
  src: string;
}

export interface RoomCategory {
  room: string;
  tags: string[];
  photoIds: number[];
  layoutBlocks?: number[][];
}

export interface Host {
  name: string;
  avatarColor: string;
  avatarUrl?: string;
  yearsHosting: number;
  reviewCount: number;
  rating: number;
  bornDecade: string;
  responseRate: number;
  responseTime: string;
}

export interface CoHost {
  name: string;
  avatarColor?: string;
  avatarUrl?: string;
}

export interface Amenity {
  label: string;
  icon: string;
  available: boolean;
}

export interface RatingBreakdown {
  stars: number;
  percent: number;
}

export interface CategoryRating {
  label: string;
  value: number;
  icon: string;
}

export interface HighlightTag {
  emoji?: string;
  label: string;
  count: number;
  icon?: string;
}

export interface Review {
  id: string;
  author: string;
  avatarColor: string;
  avatarUrl?: string;
  membership: string;
  rating: number;
  date: string;
  text: string;
}

export interface ThingsToKnow {
  cancellationPolicy: string;
  houseRules: string[];
  safety: string[];
}

export interface NearbyListing {
  id: string;
  title: string;
  price: number;
  rating: number;
  photoSrc: string;
}

export interface ListingData {
  title: string;
  propertyType: string;
  location: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  rating: number;
  reviewCount: number;
  pricePerStay: number;
  nights: number;
  checkIn: string;
  checkOut: string;
  cancellationDate: string;
  host: Host;
  coHosts: CoHost[];
  amenities: Amenity[];
  rooms: RoomCategory[];
  photos: Photo[];
  overallRatingBreakdown: RatingBreakdown[];
  categoryRatings: CategoryRating[];
  highlightTags: HighlightTag[];
  reviews: Review[];
  neighbourhoodHighlight: string;
  thingsToKnow: ThingsToKnow;
  nearbyListings: NearbyListing[];
}

const localPhoto = (path: string) =>
  `/assets/${path}`;

const createPhoto = (id: number, room: string, path: string): Photo => ({
  id,
  room,
  alt: `${room} photo`,
  src: `/assets/${path}`,
});

export const listingData: ListingData = {
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  propertyType: 'Entire serviced apartment in Candolim, India',
  location: 'Candolim, Goa, India',
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  rating: 4.95,
  reviewCount: 19,
  pricePerStay: 28499,
  nights: 5,
  checkIn: '2026-10-18',
  checkOut: '2026-10-23',
  cancellationDate: '17 October',
  host: {
    name: 'Mirashya Homes',
    avatarColor: '#0b3d2e',
    avatarUrl: '/assets/host.jpeg',
    yearsHosting: 2,
    reviewCount: 1463,
    rating: 4.68,
    bornDecade: '80s',
    responseRate: 100,
    responseTime: 'an hour',
  },
  coHosts: [
    { name: 'Sharath', avatarUrl: '/assets/co1.jpg' },
    { name: 'Aman Dev Pahwa', avatarUrl: '/assets/co2.jpg' },
    { name: 'Maria Karen Priyanka', avatarUrl: '/assets/co3.jpg' },
    { name: 'Simran' },
    { name: 'Pallavi' },
    { name: 'Sanyukta' },
    { name: 'Shruti', avatarColor: '#f4a4b8' },
    { name: 'Amisha', avatarColor: '#c9d6f7' },
  ],
  amenities: [
    { label: 'Kitchen', icon: 'utensils', available: true },
    { label: 'Wifi', icon: 'wifi', available: true },
    { label: 'Dedicated workspace', icon: 'desk', available: true },
    { label: 'Free parking on premises', icon: 'car', available: true },
    { label: 'Pool', icon: 'pool', available: true },
    { label: 'Hot tub', icon: 'hot-tub', available: true },
    { label: 'Pets allowed', icon: 'paw', available: true },
    { label: 'Exterior security cameras on property', icon: 'camera', available: true },
    { label: 'Carbon monoxide alarm', icon: 'no-alarm', available: false },
    { label: 'Smoke alarm', icon: 'no-alarm', available: false },
  ],
  rooms: [
    {
      room: 'Living room 1',
      tags: ['Sofa', 'Air conditioning', 'Ceiling fan', 'TV'],
      photoIds: [1005, 1006, 1007],
      layoutBlocks: [
        [1005],
        [1006, 1007],
      ],
    },
    {
      room: 'Living room 2',
      tags: ['Ceiling fan', 'Hot tub'],
      photoIds: [1001, 1002, 1008, 1000, 1009, 1010, 1011],
      layoutBlocks: [
        [1001],
        [1002, 1008],
        [1000],
        [1009, 1010],
        [1011],
      ],
    },
    {
      room: 'Full kitchen',
      tags: [
        'Freezer',
        'Fridge',
        'Blender',
        'Cooker',
        'Cooking basics',
        'Kettle',
        'Microwave',
        'Toaster',
        'Wine glasses',
        'Coffee',
        'Crockery and cutlery',
      ],
      photoIds: [1012, 1013],
      layoutBlocks: [
        [1012, 1013],
      ],
    },
    {
      room: 'Bedroom',
      tags: [
        'Double bed',
        'Air conditioning',
        'Bed linen',
        'Ceiling fan',
        'Clothes storage',
        'Cot',
        'Hangers',
        'Iron',
        'Room-darkening blinds',
        'Cleaning available during stay',
        'Cleaning products',
        'Long-term stays allowed',
        'Private entrance',
        'Wifi',
      ],
      photoIds: [1003, 1014, 1015, 1016, 1017, 1018],
      layoutBlocks: [
        [1003],
        [1014, 1015],
        [1016],
        [1017, 1018],
      ],
    },
    {
      room: 'Full bathroom',
      tags: ['Hairdryer', 'Hot water', 'Shampoo', 'Shower gel'],
      photoIds: [1019],
      layoutBlocks: [
        [1019],
      ],
    },
    {
      room: 'Gym',
      tags: ['Air conditioning', 'Gym', 'Exercise equipment', 'Ceiling fan'],
      photoIds: [1020, 1021, 1022, 1023, 1024],
      layoutBlocks: [
        [1020],
        [1021, 1022],
        [1023, 1024],
      ],
    },
    {
      room: 'Exterior',
      tags: [],
      photoIds: [1025, 1026, 1027, 1028, 1004, 1029],
      layoutBlocks: [
        [1025],
        [1026, 1027],
        [1028],
        [1004, 1029],
      ],
    },
    {
      room: 'Pool',
      tags: ['Pool'],
      photoIds: [1030, 1031, 1032],
      layoutBlocks: [
        [1030],
        [1031, 1032],
      ],
    },
    {
      room: 'Additional photos',
      tags: [],
      photoIds: [1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042],
      layoutBlocks: [
        [1033],
        [1034, 1035],
        [1036],
        [1037, 1038],
        [1039],
        [1040, 1041],
        [1042],
      ],
    },
  ],
  photos: [
    createPhoto(1000, 'Living room 2', '2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg'),
    createPhoto(1001, 'Living room 2', '090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg'),
    createPhoto(1002, 'Living room 2', '9be71047-fc52-438a-9270-75cb470f6752.jpeg'),
    createPhoto(1003, 'Bedroom', '67c61c6f-6260-4809-9510-0360e58a345d.jpeg'),
    createPhoto(1004, 'Exterior', 'c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg'),
    createPhoto(1005, 'Living room 1', 'a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg'),
    createPhoto(1006, 'Living room 1', 'a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg'),
    createPhoto(1007, 'Living room 1', 'f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg'),
    createPhoto(1008, 'Living room 2', 'f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg'),
    createPhoto(1009, 'Living room 2', '34529829-a971-44d3-ac2f-90ea3678a34d.jpeg'),
    createPhoto(1010, 'Living room 2', '153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg'),
    createPhoto(1011, 'Living room 2', '3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg'),
    createPhoto(1012, 'Full kitchen', '56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg'),
    createPhoto(1013, 'Full kitchen', 'ddc853d7-e658-405c-bedc-8f31106c447e.jpeg'),
    createPhoto(1014, 'Bedroom', '1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg'),
    createPhoto(1015, 'Bedroom', '0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg'),
    createPhoto(1016, 'Bedroom', 'a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg'),
    createPhoto(1017, 'Bedroom', '48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg'),
    createPhoto(1018, 'Bedroom', '3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg'),
    createPhoto(1019, 'Full bathroom', '97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg'),
    createPhoto(1020, 'Gym', '9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg'),
    createPhoto(1021, 'Gym', '246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg'),
    createPhoto(1022, 'Gym', '4fede77d-7a71-446f-89e3-263af937f3fa.jpeg'),
    createPhoto(1023, 'Gym', '79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg'),
    createPhoto(1024, 'Gym', 'f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg'),
    createPhoto(1025, 'Exterior', '23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg'),
    createPhoto(1026, 'Exterior', '5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg'),
    createPhoto(1027, 'Exterior', '608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg'),
    createPhoto(1028, 'Exterior', '5b856fde-a393-41bf-b373-c9d02e64221f.jpeg'),
    createPhoto(1029, 'Exterior', '42befad7-fb29-473d-91db-b03e7a544d1d.jpeg'),
    createPhoto(1030, 'Pool', 'fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg'),
    createPhoto(1031, 'Pool', '929545d3-e241-46c0-8a70-c24531ce7b54.jpeg'),
    createPhoto(1032, 'Pool', '8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg'),
    createPhoto(1033, 'Additional photos', '70325367-cbae-4993-b560-18cd3f6edd53.jpeg'),
    createPhoto(1034, 'Additional photos', 'cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg'),
    createPhoto(1035, 'Additional photos', '30ad93b2-293f-494d-b645-626303c6cb93.jpeg'),
    createPhoto(1036, 'Additional photos', '9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg'),
    createPhoto(1037, 'Additional photos', 'b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg'),
    createPhoto(1038, 'Additional photos', 'dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg'),
    createPhoto(1039, 'Additional photos', 'fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg'),
    createPhoto(1040, 'Additional photos', '3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg'),
    createPhoto(1041, 'Additional photos', '862d936c-0f34-4e50-af87-b519e2781d19.jpeg'),
    createPhoto(1042, 'Additional photos', '79addceb-8c2d-419b-80ff-e29af426a94c.jpeg'),
  ],
  overallRatingBreakdown: [
    { stars: 5, percent: 92 },
    { stars: 4, percent: 8 },
    { stars: 3, percent: 0 },
    { stars: 2, percent: 0 },
    { stars: 1, percent: 0 },
  ],
  categoryRatings: [
    { label: 'Cleanliness', value: 5, icon: 'spray' },
    { label: 'Accuracy', value: 5, icon: 'check-circle' },
    { label: 'Check-in', value: 5, icon: 'key' },
    { label: 'Communication', value: 5, icon: 'message' },
    { label: 'Location', value: 4.8, icon: 'map' },
    { label: 'Value', value: 4.8, icon: 'tag' },
  ],
  highlightTags: [
    { label: 'Comfort', count: 6, icon: '/assets/comfort.png' },
    { label: 'Accuracy', count: 5, icon: '/assets/accuracy.png' },
    { label: 'Hot tub', count: 5, icon: '/assets/hot-tub.png' },
    { label: 'Condition', count: 4, icon: '/assets/condition.png' },
    { label: 'Hospitality', count: 8, icon: '/assets/hospitality.png' },
    { label: 'Cleanliness', count: 4, icon: '/assets/cleanliness.png' },
    { label: 'Amenities', count: 2, icon: '/assets/amenities.png' },
    { label: 'Decor', count: 2, icon: '/assets/decor.png' },
    { label: 'Indoor spaces', count: 2, icon: '/assets/indoor-spaces.png' },
    { label: 'Location', count: 2, icon: '/assets/location.png' },
  ],
  reviews: [
    {
      id: 'amit',
      author: 'Amit',
      avatarColor: '#f7ede2',
      membership: '2 months on Airbnb',
      rating: 5,
      date: '1 week ago',
      text: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.',
    },
    {
      id: 'aheesh',
      author: 'Aheesh',
      avatarColor: '#3e6de0',
      avatarUrl: '/assets/rev1.jpeg',
      membership: '3 years on Airbnb',
      rating: 5,
      date: '2 weeks ago',
      text: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.',
    },
    {
      id: 'samiksha',
      author: 'Samiksha',
      avatarColor: '#d63e8a',
      avatarUrl: '/assets/rev2.jpeg',
      membership: '8 months on Airbnb',
      rating: 5,
      date: 'May 2026',
      text: 'the host nitish was really great help',
    },
    {
      id: 'vedant',
      author: 'Vedant',
      avatarColor: '#efeaf7',
      membership: '4 years on Airbnb',
      rating: 5,
      date: 'May 2026',
      text: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.\nThe highlight of our stay was definitely the jacuzzi. It was clean, well-kept, and the perfect place to relax after a day of exploring Goa. It added a luxurious touch to our vacation and made our experience even more memorable.\nThe property was exactly as described, well-equipped, and offered a peaceful atmosphere. We would highly recommend this place to anyone looking for a comfortable, clean, and relaxing stay in Goa. Looking forward to visiting again!',
    },
    {
      id: 'vaibhav',
      author: 'Vaibhav S',
      avatarColor: '#e0433e',
      avatarUrl: '/assets/rev3.jpeg',
      membership: '3 years on Airbnb',
      rating: 5,
      date: 'May 2026',
      text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
    },
    {
      id: 'mohd',
      author: 'Mohd',
      avatarColor: '#3ee0c7',
      avatarUrl: '/assets/rev4.jpeg',
      membership: '5 years on Airbnb',
      rating: 5,
      date: 'May 2026',
      text: 'Great place. Exactly as described in the listing.',
    },
  ],
  neighbourhoodHighlight:
    'Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.',
  thingsToKnow: {
    cancellationPolicy:
      'Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.',
    houseRules: [
      'Check-in after 2:00 pm',
      'Checkout before 11:00 am',
      '3 guests maximum',
    ],
    safety: [
      'Carbon monoxide alarm not reported',
      'Smoke alarm not reported',
      'Exterior security cameras on property',
    ],
  },
  nearbyListings: [
    {
      id: 'studio-view',
      title: 'Beautiful Studio with a view to die for',
      price: 23600,
      rating: 4.91,
      photoSrc: '/assets/s1.jpeg',
    },
    {
      id: 'naqab-pool',
      title: 'NAQAB - 1bhk with private pool',
      price: 42218,
      rating: 4.95,
      photoSrc: '/assets/s2.jpeg',
    },
    {
      id: 'greentique-flat',
      title: 'Greentique Luxury Flat with plunge pool, Calangute',
      price: 44506,
      rating: 4.94,
      photoSrc: '/assets/s3.jpeg',
    },
    {
      id: 'tropical-studio',
      title: 'The Tropical Studio | 5 mins to Beach',
      price: 22824,
      rating: 4.96,
      photoSrc: '/assets/s4.jpeg',
    },
    {
      id: 'casa-bella',
      title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
      price: 39942,
      rating: 4.95,
      photoSrc: '/assets/s5.jpeg',
    },
    {
      id: 'kanso-window',
      title: 'Kanso by Earthen Window | Jacuzzi | Terrace | Pool',
      price: 45648,
      rating: 5.0,
      photoSrc: '/assets/s6.jpeg',
    },
    {
      id: 'luxury-apt-pool',
      title: 'Luxury Apt | Private Pool | 6 Mins from Beach',
      price: 48786,
      rating: 4.93,
      photoSrc: '/assets/s2.jpeg',
    },
    {
      id: 'serendipity-cottage',
      title: 'Serendipity Cottage - Calm Stay in Calangute-Baga.',
      price: 22824,
      rating: 4.92,
      photoSrc: '/assets/s4.jpeg',
    },
  ],
};

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title:
    'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 - Serviced apartments for Rent in Candolim, Goa, India - Airbnb',
  description: 'Entire serviced apartment in Candolim, India',
  icons: {
    icon: 'https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className="min-h-full bg-white text-[#222222]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

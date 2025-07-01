import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'NotiPromo - Productos Personalizados de Papelería y Branding',
    template: '%s | NotiPromo'
  },
  description: 'Especialistas en productos personalizados de papelería y branding empresarial. Libretas, cuadernos, cubos adhesivos y cintas personalizadas con tu marca.',
  keywords: ['productos personalizados', 'papelería', 'branding', 'libretas', 'cuadernos', 'cubos adhesivos', 'cintas adhesivas', 'marketing promocional'],
  authors: [{ name: 'NotiPromo' }],
  creator: 'NotiPromo',
  publisher: 'NotiPromo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://notipromo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://notipromo.com',
    title: 'NotiPromo - Productos Personalizados de Papelería y Branding',
    description: 'Especialistas en productos personalizados de papelería y branding empresarial. Transformamos tu marca en productos únicos.',
    siteName: 'NotiPromo',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'NotiPromo - Productos Personalizados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NotiPromo - Productos Personalizados de Papelería y Branding',
    description: 'Especialistas en productos personalizados de papelería y branding empresarial.',
    images: ['https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

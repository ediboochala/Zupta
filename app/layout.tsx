import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zupta — Pre-Order. Skip the Wait. Enjoy More.',
  description:
    'Zupta connects you with your favourite local food vendors. Pre-order in seconds, pick up when it\'s hot. No waiting. No stress. Just food.',
  keywords: ['food pre-order', 'Nigeria food app', 'skip queue', 'local vendors', 'Abuja food', 'Lagos food'],
  authors: [{ name: 'Zupta Technology Ltd' }],
  openGraph: {
    title: 'Zupta — Pre-Order. Skip the Wait. Enjoy More.',
    description: 'The smart food pre-order platform for Nigeria.',
    url: 'https://zupta.com',
    siteName: 'Zupta',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zupta — Pre-Order. Skip the Wait.',
    description: 'Order ahead. Skip the queue. Eat fresh.',
    site: '@zuptaapp',
  },
  robots: { index: true, follow: true },
  themeColor: '#09071A',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

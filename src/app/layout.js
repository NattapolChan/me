import { JetBrains_Mono } from 'next/font/google';
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Nattapol Chanpaisit',
  description: 'Computer Engineering student at NTU specializing in High-Performance Computing, parallel systems, and ML infrastructure. Research experience at NSCC, A*STAR, Hyundai.',
  keywords: ['HPC', 'High Performance Computing', 'Parallel Computing', 'CUDA', 'Machine Learning Infrastructure', 'Computer Engineering'],
  authors: [{ name: 'Nattapol Chanpaisit' }],
  openGraph: {
    title: 'Nattapol Chanpaisit',
    description: 'Computer Engineering student specializing in HPC and parallel computing',
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={jetbrainsMono.className}>{children}</body>
    </html>
  )
}

import { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Providers } from "@/components/Providers";
import SessionChecker from "@/components/SessionChecker"; // Import the new SessionChecker component

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Right-Price',
  description: 'buy at right-time , right-place , right-price ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

        <Providers>
          <main className="max-w-10xl mx-auto">
            <SessionChecker>{children}</SessionChecker>
          </main>
        </Providers>
      </body>
    </html>
  );
}

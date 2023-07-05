import './globals.css'

import { Navbar , Footer,Provider } from '@/components'


export const metadata = {
  title: 'Car Showcase App',
  description: 'This is a basic car showcase app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {}
      <head />
      
      <body>
        <header> this header </header>
        {children}</body>
        <footer> this is footer</footer>
    </html>
  )
}

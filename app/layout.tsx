
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div>
        <h1> Ibrahim SSG</h1>
        <p>Welcome to my static site generator</p>
        <br/>
      </div>
    </header>
  );


const footer = (
  <footer>
    <div>
      <br/>
      <h3>Devloped by Ibra</h3>
    </div>
  </footer>
)

  return (
    <html lang="en">
      {}
      <head />
      
      <body>
        {header}
        {children}
        {footer}
        </body>
    </html>
  )
}

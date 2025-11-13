export const metadata = {
  title: 'Ugly Trees in a Beautiful Forest',
  description: 'An artistic exploration of contrast in nature',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}

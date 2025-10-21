import './globals.css';

export const metadata = {
  title: 'NFC Memory',
  description: 'Scanned with love',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
import './globals.css';

export const metadata = {
  title: 'FakerCraft',
  description: 'A Next.js website for FakerCraft with awesome features!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
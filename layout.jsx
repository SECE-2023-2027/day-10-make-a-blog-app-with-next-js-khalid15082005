import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'My Blog',
  description: 'A simple blog app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <Navbar />
        <main className="max-w-3xl mx-auto mt-8 px-4">{children}</main>
      </body>
    </html>
  );
}

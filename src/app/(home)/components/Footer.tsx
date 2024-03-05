"use client"
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">Footer Content</p>
            <p className="text-sm">© {new Date().getFullYear()} Next.js Starter. All Rights Reserved.</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

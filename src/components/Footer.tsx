import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 flex flex-col items-center gap-6">
      <Link href="/" className="mb-4">
        <div className="cursor-pointer">
          <Image
            src="icons/birlikte.svg"
            alt="1likte Logo"
            width={120}
            height={40}
            className="opacity-30 hover:opacity-50 transition-opacity"
          />
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-2 text-gray-600 text-sm">
        <Link href="/">
          <div className="cursor-pointer hover:text-gray-700 transition-colors">
            Görüşlerini Bildir
          </div>
        </Link>
        <Link href="/report">
          <div className="cursor-pointer hover:text-gray-700 transition-colors">
            Hata Bildir
          </div>
        </Link>
      </div>

      <div className="flex gap-6">
        <Link href="https://twitter.com" target="_blank">
          <div className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors">
            <Image src="/icons/X.svg" alt="Twitter" width={20} height={20} />
            <span className="sr-only">Twitter</span>
          </div>
        </Link>
        <Link href="https://instagram.com" target="_blank">
          <div className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors">
            <Image
              src="/icons/Instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
            <span className="sr-only">Instagram</span>
          </div>
        </Link>
        <Link href="https://linkedin.com" target="_blank">
          <div className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors">
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
            />
            <span className="sr-only">LinkedIn</span>
          </div>
        </Link>
      </div>
    </footer>
  );
}

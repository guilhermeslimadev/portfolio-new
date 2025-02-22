import { Languages, Phone } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <>
      <header className=" w-full flex justify-between items-center text-lightslate py-6 px-4 md:px-8 border-b border-b-gray-500 bg-gray-900 z-10">
        <Link href={"/"} className="text-xl font-semibold font-heading">
          Guilherme Lima
        </Link>

        <a
          href="https://wa.me/5511966144965"
          target="_blank"
          className="p-2 rounded-xl bg-gray-700 border border-gray-600 hover:bg-gray-600 transition-colors"
        >
          <Phone className="size-5" />
        </a>
      </header>
    </>
  );
}

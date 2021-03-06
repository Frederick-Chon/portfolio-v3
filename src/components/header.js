import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-white border-b-2">
      <div className="flex flex-wrap md:flex-no-wrap items-center justify-between max-w-6xl mx-auto p-4 md:p-4">
        <div className="flex items-center">
          <Link href="/">
            <a className="font-bold text-black text-xl">
              Frederick Chon
            </a>
          </Link>
        </div>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-black"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
        >
          {[
            { title: "Home", route: "/" },
            { title: "About", route: "/about" },
            { title: "Projects", route: "/projects" }
          ].map(navigationItem => (
            <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
              <Link href={navigationItem.route}>
                <a className="block text-black text-lg">{navigationItem.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;

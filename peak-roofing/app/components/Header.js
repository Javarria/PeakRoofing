export default function Header() {
  return (
    <header className="bg-white sm:bg-gray-200 h-20 sm:h-24 transition duration-500 ease-in-out" style={{ zIndex: 0, border: "none" }}>
      <div className="container mx-auto p-4 flex justify-between">
        <nav>
          <ul className="hidden sm:flex sm:space-x-4">
            <div
              className=" sm:block sm:h-40 sm:w-40 sm:bg-[#ffd7be] sm:rounded-full sm:mt-[-20px] sm:border-4"
            />
            {/* SERVICES BUTTON */}
            <li>
              <a
                href="/services"
                className="text-gray-800 hover:text-gray-900"
              >
                Services
              </a>
            </li>
            {/* ABOUT BUTTON */}
            <li>
              <a
                href="/about"
                className="text-gray-800 hover:text-gray-900"
              >
                About
              </a>
            </li>
            {/* RESOURCES BUTTON */}
            <li>
              <a
                href="/resources"
                className="text-gray-800 hover:text-gray-900"
              >
                Resources
              </a>
            </li>
            {/* REVIEW BUTTON */}
            <li>
              <a
                href="/reviews"
                className="text-gray-800 hover:text-gray-900"
              >
                Leave A Review
              </a>
            </li>
            {/* BLOG BUTTON */}
            <li>
              <a
                href="/blog"
                className="text-gray-800 hover:text-gray-900"
              >
                Blog
              </a>
            </li>
          </ul>

        </nav>

        <div className="sm:hidden absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
          <div className="bg-[#000000] w-36 h-36 rounded-full shadow-2xl border-2 border-[#4682b4] sm:hidden" />
        </div>

      </div>
    </header>
  );
} 


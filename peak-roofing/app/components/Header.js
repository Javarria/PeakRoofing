export default function Header() {
  return (
    <header
      className=" bg-white h-20 sm:h-24 flex items-center space-x-4 transition duration-500 ease-in-out pl-2 sm:pl-6 border-b-4 border-solid border-gradient-to-br from-[#D4AF37] to-[#C0C0C0] "
    >
      <a href="/" style={{ position: 'relative' }}>
        <div className="sm:block sm:h-40 sm:w-40 sm:rounded-full mt-[60px] z-10" style={{ background: 'radial-gradient(circle at center, #e0e0e0 0%, #b0b0b0 50%, #e0e0e0 100%)', boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.2)' }} />
      </a>
      <ul className=" container sm:flex sm:space-x-6 lg:space-x-8">
        {/* SERVICES BUTTON */}
        <li className="">
          <a
            href="/services"
            className="text-sm font-extrabold text-black hover:text-[#b76e79] ml-6"
            style={{ fontSize: '18px', fontWeight: 900 }}
          >
            Services
          </a>
        </li>
        {/* ABOUT BUTTON  */}
        <li>
          <a
            href="/about"
            className="text-sm font-extrabold text-black hover:text-[#b76e79]"
            style={{ fontSize: '18px', fontWeight: 900 }}
          >
            About
          </a>
        </li>
        {/* FAQ BUTTON */}
        <li>
          <a
            href="/FAQ"
            className="text-sm font-extrabold  text-black hover:text-[#b76e79]"
            style={{ fontSize: '18px', fontWeight: 900 }}
          >
            FAQ
          </a>
        </li>
        {/* REVIEW BUTTON */}
        <li>


          <a
            href="/reviews"
            className="text-sm font-extrabold  text-black hover:text-[#b76e79]"
            style={{ fontSize: '18px', fontWeight: 900, }}
          >
            Leave A Review
          </a>
        </li>
        {/* BLOG BUTTON */}
        <li>
          <a
            href="/blog"
            className="text-sm font-extrabold  text-black hover:text-[#b76e79] rounded px-2"
            style={{ fontSize: '18px', fontWeight: 900}}
          >
            Blog
          </a>
        </li>
      </ul>


      <div className="flex items-center justify-end w-full ">
        <div className="bg-gradient-to-r from-[#b36e77] via-[#a7838a] to-[#d2947d] h-16 w-48 rounded-full flex items-center justify-center mr-20 pr-5 font-bold" style={{fontWeight: 900}}>
          <div className="bg-white h-12 w-12 rounded-full mr-auto ml-2 flex items-center justify-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="2" width="14" height="22" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
          </div>
          (919)791-6682
        </div>
        </div>
  
    </header>
  );
}

export default function Footer(){
    return(
        <div className="container">
            <div className="bg-black w-full h-[400px] relative"> 
                <div className="bg-black w-[300px] h-[150px] m-auto absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-pink-600">Company Logo</div>

                {/* PHONE NUMBER SECTION */}
                <div className="bg-black w-[300px] h-[50px] m-auto absolute top-[calc(25%+100px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-green-600">
                    <div className="absolute top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 border-2">
                        <div className="bg-white rounded-full w-10 h-10 absolute top-1/2 left-3.5 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF69B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-outgoing absolute top-1/2 left-3 transform -translate-x-1/2 -translate-y-1/2"><polyline points="22 8 22 2 16 2"/><line x1="16" x2="22" y1="8" y2="2"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <a href="tel:+19196414212" className="absolute top-1/2 left-16 transform -translate-y-1/2 text-white font-bold tracking-tight hover:text-pink-500">
                        (919) 641- 4212
                    </a>
                </div>

                {/* EMAIL SECTION */}
                <div className="bg-black w-[300px] h-[50px] m-auto absolute top-[calc(25%+150px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-blue-600 pl-4">
                    <div className="bg-white rounded-full w-10 h-10 absolute top-1/2 left-7 transform -translate-x-1/2 -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF69B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail absolute top-2.5 left-2.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        <div className="w-[250px] absolute top-1/2 right-[-250px] transform -translate-y-1/2">
                            <a href="mailto:PeakRoofingSolutionLLC@gmail.com?subject=Email from Website" className="text-white font-bold px-4 py-2 rounded-md hover:text-pink-500">Email Micheal</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}